// services/authService.ts
import { supabase } from './supabaseClient';

// This is the shape of your 'profiles' table, not the auth.users
export interface UserProfile {
  id: string; // This is the UUID from auth.users
  name: string;
  cluster: string;
  role: 'member' | 'admin';
  contactMethod?: string;
}

// Note: We are no longer exporting 'User' from here, 
// as Supabase provides its own User type from auth.
// Your App.tsx will need to be updated to import User from '@supabase/supabase-js'

/**
 * Simulates a login request to the Supabase backend.
 */
export const login = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) throw error;
  if (!data.user) throw new Error("Login failed, no user returned.");

  // After successful login, fetch the user's profile data
  const { data: profileData, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', data.user.id)
    .single(); // .single() assumes one-to-one mapping and returns an object

  if (profileError) throw profileError;

  // Combine auth user data and profile data
  // This matches the structure your app expects
  const user: UserProfile = {
    id: data.user.id,
    name: profileData.name,
    cluster: profileData.cluster,
    role: profileData.role,
    contactMethod: profileData.contactMethod,
  };

  return user;
};

/**
 * Simulates updating a user's profile information.
 */
export const updateUserProfile = async (userId: string, contactMethod: string): Promise<UserProfile> => {
  const { data, error } = await supabase
    .from('profiles')
    .update({ contactMethod: contactMethod })
    .eq('id', userId)
    .select()
    .single(); // Return the updated row

  if (error) throw error;
  return data;
};

/**
 * Simulates fetching all users for an admin panel.
 */
export const getAllUsers = async (): Promise<UserProfile[]> => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .neq('role', 'admin'); // .neq() means "not equal to"

  if (error) throw error;
  return data;
};

/**
 * Logs the user out of Supabase.
 */
export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('Error logging out:', error);
  } else {
    console.log('User logged out.');
  }
};

// IMPORTANT: You will need to add a Sign Up function
// to create users in your new database.
// You can call this from your LoginModal or a new SignUpModal.
export const signUp = async (email: string, password: string, name: string, cluster: string) => {
    const { data: authData, error: authError } = await supabase.auth.signUp({
        email: email,
        password: password,
    });

    if (authError) throw authError;
    if (!authData.user) throw new Error("Sign up failed, no user created.");

    // Now, create their profile in the 'profiles' table
    const { error: profileError } = await supabase
        .from('profiles')
        .insert({
            id: authData.user.id, // Link to the auth.users table
            name: name,
            cluster: cluster,
            role: 'member', // Default role
        });

    if (profileError) throw profileError;

    return authData.user;
}
