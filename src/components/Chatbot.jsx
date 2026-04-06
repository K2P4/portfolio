import React, { useState } from 'react';
import { useAskChatbotMutation } from '../store/endpoints/chatbot';
import { BsChatDotsFill, BsX } from 'react-icons/bs';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [ask, { isLoading }] = useAskChatbotMutation();

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    const res = await ask({ question: userMsg.content });
    if (res.data) {
      setMessages((prev) => [...prev, { role: 'bot', content: res.data }]);
    } else if (res.error) {
      setMessages((prev) => [...prev, { role: 'bot', content: "Sorry, I can't connect right now." }]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-[420px] h-[450px]  rounded-xl shadow-2xl flex flex-col overflow-hidden border">
          <div className="bg-primary/95 p-4 flex justify-between items-center text-white">
            <h3 className="font-semibold">Thura AI Assistant</h3>
            <button onClick={() => setIsOpen(false)}>
              <BsX size={24} />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-100 flex flex-col">
            {messages.length === 0 && <p className="text-gray-400 text-sm text-center m-auto">Ask me anything!</p>}
            {messages.map((msg, i) => (
              <div key={i} className={`p-2 max-w-[80%] rounded-lg ${msg.role === 'user' ? 'bg-blue-600 text-white ml-auto' : 'bg-gray-200 text-gray-800'}`}>
                {msg.content}
              </div>
            ))}
            {isLoading && <div className="text-gray-500 text-sm animate-pulse">Replying...</div>}
          </div>

          <div className="p-3 bg-gray-100 flex">
            <input
              type="text"
              className="flex-1 bg-gray-100 text-gray-800 border border-gray-300 rounded-l-xl  focus:outline-none"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className="bg-primary px-4 text-white rounded-r-xl hover:bg-blue-700 transition" onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-105">
          <BsChatDotsFill size={28} />
        </button>
      )}
    </div>
  );
}
