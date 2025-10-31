import React, { useEffect, useState } from 'react';

interface NotificationProps {
  message: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Animate in
    setVisible(true);

    // Set a timer to automatically close the notification
    const timer = setTimeout(() => {
      handleClose();
    }, 5000); // 5 seconds

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, [message]);

  const handleClose = () => {
    setVisible(false);
    // Allow animation to finish before calling onClose
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`fixed top-5 right-5 z-[100] w-full max-w-sm p-4 rounded-lg shadow-lg bg-brand-green text-white flex items-start justify-between transition-all duration-300 ease-in-out
        ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
    >
      <div className="flex items-center">
        <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>{message}</span>
      </div>
      <button onClick={handleClose} className="text-white/80 hover:text-white">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </div>
  );
};

export default Notification;