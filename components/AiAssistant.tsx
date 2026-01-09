
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';
import { getAiSupportResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'أهلاً بك في TREND Store! أنا المساعد الذكي، كيف يمكنني مساعدتك اليوم؟' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getAiSupportResponse(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-[60]">
      {isOpen ? (
        <div className="bg-white dark:bg-gray-800 w-[350px] sm:w-[400px] h-[500px] rounded-3xl shadow-2xl flex flex-col border border-blue-100 dark:border-gray-700 overflow-hidden animate-in zoom-in duration-300">
          {/* Header */}
          <div className="bg-blue-600 dark:bg-cyan-900 p-5 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-xl">
                <Bot className="w-6 h-6" />
              </div>
              <div className="text-right">
                <p className="font-bold">مساعد TREND الذكي</p>
                <p className="text-xs text-blue-100">متواجد للرد على استفساراتك</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div className={`flex gap-2 max-w-[80%] ${m.role === 'user' ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 ${m.role === 'user' ? 'bg-blue-100 dark:bg-cyan-900/30' : 'bg-gray-200 dark:bg-gray-700'}`}>
                    {m.role === 'user' ? <User className="w-4 h-4 text-blue-600 dark:text-cyan-400" /> : <Bot className="w-4 h-4 text-gray-600 dark:text-gray-400" />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm leading-relaxed text-right ${m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm border border-gray-100 dark:border-gray-700 rounded-tl-none'}`}>
                    {m.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-end">
                <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 animate-pulse text-xs text-gray-400">
                  جاري التفكير...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="اكتب سؤالك هنا..."
              className="flex-1 bg-gray-100 dark:bg-gray-900 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500 transition-all text-right dark:text-white"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="bg-blue-600 dark:bg-cyan-600 text-white p-2.5 rounded-xl hover:bg-blue-700 dark:hover:bg-cyan-700 transition-colors disabled:opacity-50"
            >
              <Send className="w-5 h-5 transform -rotate-180" />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 dark:bg-cyan-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce"
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      )}
    </div>
  );
};

export default AiAssistant;
