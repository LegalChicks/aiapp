export interface User {
  id: number;
  username: string;
  name: string;
  cluster: string;
  role: 'member' | 'admin';
  contactMethod?: string;
}

// In a real application, this data would come from a secure backend.
const mockUsers: User[] = [
  { id: 1, username: 'member1', name: 'Juan dela Cruz', cluster: 'Tuguegarao City', role: 'member', contactMethod: 'Email: juan@example.com' },
  { id: 2, username: 'member2', name: 'Maria Santos', cluster: 'Solana', role: 'member', contactMethod: 'Phone: 0917-123-4567' },
  { id: 3, username: 'admin', name: 'Froilan Lingan', cluster: 'HQ', role: 'admin' },
];

const mockPasswords: { [key: string]: string } = {
  member1: 'password123',
  member2: 'password456',
  admin: 'adminpass',
};

/**
 * Simulates a login request to a backend.
 * @param username The user's username.
 * @param password The user's password.
 * @returns A Promise that resolves with the User object on success.
 * @throws An error if login fails.
 */
export const login = (username: string, password: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockUsers.find((u) => u.username === username);
      if (user && mockPasswords[username] === password) {
        // In a real app, you'd store a token (e.g., in localStorage or a cookie)
        resolve(user);
      } else {
        reject(new Error('Invalid username or password.'));
      }
    }, 500); // Simulate network delay
  });
};

/**
 * Simulates updating a user's profile information.
 * @param userId The ID of the user to update.
 * @param contactMethod The new preferred contact method.
 * @returns A Promise that resolves with the updated User object.
 */
export const updateUserProfile = (userId: number, contactMethod: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userIndex = mockUsers.findIndex(u => u.id === userId);
      if (userIndex !== -1) {
        // Create a new user object to ensure immutability for React state updates
        const updatedUser = { ...mockUsers[userIndex], contactMethod };
        mockUsers[userIndex] = updatedUser; // Update our mock "database"
        resolve(updatedUser);
      } else {
        reject(new Error('User not found.'));
      }
    }, 300); // Simulate network delay
  });
};

/**
 * Simulates fetching all users for an admin panel.
 * @returns A Promise that resolves with an array of all users.
 */
export const getAllUsers = (): Promise<User[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Return all users except the admin itself for management purposes
            resolve(mockUsers.filter(u => u.role !== 'admin'));
        }, 400); // Simulate network delay
    });
};


/**
 * Simulates logging a user out.
 */
export const logout = () => {
  // In a real app, you'd clear the authentication token.
  console.log('User logged out.');
};