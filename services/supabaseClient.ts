// services/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// !! Replace with your own project URL and anon key from Part 1
const supabaseUrl = 'YOUR_PROJECT_URL';
const supabaseAnonKey = 'YOUR_ANON_PUBLIC_KEY';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL or Anon Key is missing. Check your .env file or configuration.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
