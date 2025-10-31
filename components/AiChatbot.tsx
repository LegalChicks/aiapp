
import React, { useState, useRef, useEffect } from 'react';
import { getAiResponse } from '../services/geminiService';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const AiChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: "Hello! I'm the LCEN assistant. Ask me anything about starting a poultry farm!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: Message = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const responseText = await getAiResponse(input);
    const botMessage: Message = { text: responseText, sender: 'bot' };

    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  if (!process.env.API_KEY) {
    return null;
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-brand-green text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-all transform hover:scale-110"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-full max-w-sm h-[60vh] bg-white rounded-lg shadow-2xl flex flex-col">
          <header className="bg-brand-brown text-white p-4 rounded-t-lg">
            <h3 className="font-bold text-lg">Poultry Farming Assistant</h3>
          </header>
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div key={index} className={`flex mb-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`rounded-lg px-4 py-2 max-w-[80%] ${msg.sender === 'user' ? 'bg-brand-yellow text-brand-dark' : 'bg-gray-200 text-gray-800'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-3">
                 <div className="rounded-lg px-4 py-2 max-w-[80%] bg-gray-200 text-gray-800">
                    <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-75"></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-150"></div>
                    </div>
                 </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          <div className="p-4 border-t flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask a question..."
              className="flex-1 border rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              className="bg-brand-green text-white px-4 rounded-r-lg hover:bg-green-600 disabled:bg-gray-400"
              disabled={isLoading}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AiChatbot;
