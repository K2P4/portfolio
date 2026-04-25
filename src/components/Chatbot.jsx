import React, { useState } from 'react';
import { useAskChatbotMutation } from '../store/endpoints/chatbot';
import { BsChatDotsFill, BsX, BsSendFill, BsArrowRightShort } from 'react-icons/bs';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [ask, { isLoading }] = useAskChatbotMutation();

  const suggestedQuestions = ['What services do you offer?', 'Show me your projects.', 'How can I contact you?'];

  const handleSend = async (messageText = input) => {
    const textToSend = messageText.trim();
    if (!textToSend) return;

    const userMsg = { role: 'user', content: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    try {
      const res = await ask({ question: textToSend }).unwrap();
      setMessages((prev) => [...prev, { role: 'bot', content: res }]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: 'bot', content: "Sorry, I can't connect right now." }]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-[340px] h-[480px] md:w-[380px] md:h-[520px] bg-white rounded-2xl shadow-md flex flex-col overflow-hidden   animate-fade-in translate-y-0 translate-x-0">
          <div className="bg-blue-600 p-2 md:p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <BsChatDotsFill size={20} />
              <h3 className="font-medium">Portfolio Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition">
              <BsX size={24} />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-5 bg-gray-50 flex flex-col scroll-smooth">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4 animate-slide-in-bottom">
                <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                  <BsChatDotsFill size={32} />
                </div>
                <p className="text-gray-700 font-medium">Hi! How can I help?</p>
                <div className="flex flex-col gap-2 w-full">
                  {suggestedQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(q)}
                      className="text-left py-2.5 px-4 text-sm bg-white border border-gray-200 rounded-xl hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all flex items-center justify-between group"
                    >
                      {q}
                      <BsArrowRightShort size={20} className="text-gray-400 group-hover:text-blue-600" />
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 max-w-[85%] rounded-2xl text-[13.5px] leading-relaxed animate-slide-in-bottom ${
                  msg.role === 'user' ? 'bg-blue-600 text-white ml-auto rounded-tr-none' : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none shadow-sm'
                }`}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-1.5 text-gray-400 text-xs ml-1">
                <div className="flex gap-0.5">
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
                <span>Typing...</span>
              </div>
            )}
          </div>

          <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              className="flex-1 bg-gray-50 text-gray-800 border-none rounded-xl px-4 py-2 focus:ring-1 focus:ring-blue-500 transition text-sm"
              placeholder="Message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button disabled={isLoading || !input.trim()} className="bg-blue-600 p-2.5 text-white rounded-xl hover:bg-blue-700 transition disabled:opacity-40 shadow-sm" onClick={() => handleSend()}>
              <BsSendFill size={18} />
            </button>
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="bg-blue-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-105">
          <BsChatDotsFill size={28} />
        </button>
      )}
    </div>
  );
}
