import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NetworkInfoSection from './components/NetworkInfoSection';
import ModelSection from './components/ModelSection';
import AiHelperSection from './components/AiHelperSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import AiChatbot from './components/AiChatbot';
import Dashboard from './components/Dashboard';
import { User, logout } from './services/authService';
import Notification from './components/Notification';

const App: React.FC = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  const handleLoginSuccess = (user: User) => {
    setCurrentUser(user);
    closeLoginModal();
    // Trigger a notification on successful login
    setNotification(`Welcome back, ${user.name}! Check out the latest announcements.`);
  };

  const handleLogout = () => {
    logout();
    setCurrentUser(null);
  };
  
  const handleUserUpdate = (updatedUser: User) => {
    setCurrentUser(updatedUser);
  };

  const isLoggedIn = !!currentUser;

  return (
    <div className="bg-brand-light text-brand-dark font-sans">
       {notification && isLoggedIn && (
        <Notification message={notification} onClose={() => setNotification(null)} />
      )}
      <Header 
        isLoggedIn={isLoggedIn}
        onLoginClick={openLoginModal} 
        onLogout={handleLogout}
      />
      <main>
        {isLoggedIn && currentUser ? (
          <Dashboard user={currentUser} onUserUpdate={handleUserUpdate} />
        ) : (
          <>
            <Hero />
            <NetworkInfoSection />
            <ModelSection />
            <AiHelperSection />
            <ContactSection />
          </>
        )}
      </main>
      <Footer />
      {!isLoggedIn && (
         <LoginModal 
            isOpen={isLoginModalOpen} 
            onClose={closeLoginModal} 
            onLoginSuccess={handleLoginSuccess} 
          />
      )}
      <AiChatbot />
    </div>
  );
};

export default App;