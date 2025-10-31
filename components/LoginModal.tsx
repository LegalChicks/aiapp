import React, { useState } from 'react';
import { login, User } from '../services/authService';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: User) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const user = await login(username, password);
      onLoginSuccess(user);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleFeatureClick = (featureName: string) => {
     alert(`${featureName} functionality requires a backend.`);
  }

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <h2 className="text-2xl font-bold text-brand-dark mb-2 text-center">Member Login</h2>
        <p className="text-center text-sm text-gray-500 mb-4">Demo: `member1`/`password123` or `admin`/`adminpass`</p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-brand-yellow"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-brand-yellow"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
             <div className="text-right">
                <button type="button" onClick={() => handleFeatureClick('Forgot Password')} className="text-sm text-brand-green hover:underline font-medium">
                    Forgot Password?
                </button>
            </div>
          </div>
          
          {error && <p className="bg-red-100 text-red-700 text-sm p-3 rounded mb-4">{error}</p>}

          <div className="flex items-center justify-between mb-6">
            <button
              className="bg-brand-green hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Sign In
            </button>
          </div>
           <div className="text-center">
                <p className="text-gray-600 text-sm">
                    Don't have an account?{' '}
                    <button
                        type="button"
                        onClick={() => handleFeatureClick('Registration')}
                        className="font-bold text-brand-green hover:underline"
                    >
                        Register Now
                    </button>
                </p>
            </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;