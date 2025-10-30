import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Brain, User } from 'lucide-react';

interface ChatBotProps {
  onClose: () => void;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export const ChatBot: React.FC<ChatBotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your GeoPolitics AI assistant. I can help you analyze global conflicts, economic trends, geopolitical developments, and country vulnerabilities. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('ukraine') || lowerMessage.includes('russia')) {
      return "The Russia-Ukraine conflict remains a critical geopolitical situation. Current analysis shows continued military operations with significant impacts on global energy markets, food security, and international relations. Ukraine faces critical vulnerabilities across military, economic, and energy sectors with infrastructure systematically targeted. The conflict has led to massive displacement and economic disruption across Europe. Would you like specific analysis on military developments, economic impacts, or diplomatic efforts?";
    }
    
    if (lowerMessage.includes('china') || lowerMessage.includes('taiwan')) {
      return "China-Taiwan tensions represent one of the most significant flashpoints in East Asia. Taiwan faces high vulnerabilities due to energy import dependency (99%), military buildup across the strait, and critical semiconductor supply chain risks. Recent military exercises and diplomatic posturing indicate escalating tensions. The situation has major implications for global supply chains, particularly semiconductors, and could potentially involve regional allies. Key vulnerability factors include energy security, economic blockade risks, and cyber warfare threats.";
    }
    
    if (lowerMessage.includes('lebanon') || lowerMessage.includes('economic collapse')) {
      return "Lebanon represents a critical case study in multi-dimensional state vulnerability. The country faces critical risks across economic (currency collapse, banking crisis), energy (electricity shortages), and political (government collapse) dimensions. The vulnerability assessment shows scores above 90 in economic and political categories. Key threats include complete financial system breakdown, mass emigration of skilled population, and regional conflict spillover effects. This demonstrates how economic vulnerabilities can cascade into broader state failure.";
    }
    
    if (lowerMessage.includes('bangladesh') || lowerMessage.includes('climate')) {
      return "Bangladesh faces critical climate vulnerabilities with a score of 95/100 in our assessment. As one of the world's most climate-vulnerable nations, it faces severe threats from sea level rise, extreme weather events, and flooding. The country's high population density and dependence on agriculture make it particularly susceptible. Additional vulnerabilities include energy import dependency, political instability, and the ongoing Rohingya refugee crisis straining resources. Climate change impacts represent an existential threat requiring immediate adaptation measures.";
    }
    
    if (lowerMessage.includes('haiti') || lowerMessage.includes('state collapse')) {
      return "Haiti represents the most extreme case of state vulnerability in our current assessment, with critical ratings across multiple dimensions. The country faces complete security breakdown with gang control, economic paralysis, severe food insecurity, and humanitarian catastrophe. Vulnerability scores exceed 90 in military, economic, food, and social categories. Key threats include total state collapse, mass starvation, cholera outbreaks, and the necessity for international intervention. This case illustrates how multiple vulnerabilities can compound to create complete state failure.";
    }
    
    if (lowerMessage.includes('vulnerability') || lowerMessage.includes('assessment')) {
      return "Our vulnerability assessment framework analyzes countries across 8 key dimensions: Military, Economic, Energy, Food Security, Cyber, Climate, Social, and Political stability. Each dimension is scored 0-100 and categorized as Low, Medium, High, or Critical risk. Current analysis shows 4 countries at Critical risk (Ukraine, Lebanon, Sri Lanka, Haiti) and 2 at High risk (Taiwan, Bangladesh). The assessment helps identify cascading risks where vulnerabilities in one area can trigger failures in others. Would you like detailed analysis of any specific country or vulnerability category?";
    }
    
    if (lowerMessage.includes('middle east') || lowerMessage.includes('israel') || lowerMessage.includes('palestine')) {
      return "The Middle East remains highly volatile with multiple interconnected conflicts. The Israel-Palestine situation continues to impact regional stability, while Iran's nuclear program and proxy network expansion create additional tensions. Regional power dynamics involve Saudi Arabia, UAE, Turkey, and other key players. Energy security and religious factors add complexity to the geopolitical landscape. Several Middle Eastern countries face high vulnerabilities in energy, political, and social dimensions.";
    }
    
    if (lowerMessage.includes('economic') || lowerMessage.includes('trade') || lowerMessage.includes('inflation')) {
      return "Current global economic analysis shows significant challenges: supply chain disruptions, inflation pressures, and trade tensions between major economies. Key concerns include energy price volatility, food security, and potential recession risks. Several countries in our vulnerability assessment show critical economic risks, particularly Lebanon and Sri Lanka with debt defaults and currency crises. Central bank policies and geopolitical events continue to drive market uncertainty. Would you like analysis on specific regions or economic indicators?";
    }
    
    if (lowerMessage.includes('threat') || lowerMessage.includes('security')) {
      return "Global threat assessment currently shows elevated risks across multiple domains: military conflicts, cyber warfare, economic instability, and climate-related security challenges. Our vulnerability framework identifies key threat vectors including state-sponsored activities, non-state actors, and hybrid warfare tactics. Regional hotspots require continuous monitoring for escalation potential. Countries with high vulnerability scores face compounding security risks that can trigger broader instability.";
    }
    
    return "I can provide detailed analysis on various geopolitical topics including: active conflicts, economic trends, threat assessments, regional power dynamics, security developments, and comprehensive country vulnerability assessments. Our analysis covers 8 key vulnerability dimensions: Military, Economic, Energy, Food Security, Cyber, Climate, Social, and Political stability. Please specify which area you'd like me to analyze, or ask about a particular country, region, or situation.";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 w-96 h-96 bg-slate-800 rounded-xl shadow-2xl border border-slate-700 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-blue-400" />
          <span className="text-white font-medium">GeoPolitics AI</span>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.sender === 'bot' && (
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Brain className="w-3 h-3 text-white" />
              </div>
            )}
            <div
              className={`max-w-xs p-3 rounded-lg text-sm ${
                message.sender === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-700 text-gray-200'
              }`}
            >
              {message.text}
            </div>
            {message.sender === 'user' && (
              <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-3 h-3 text-white" />
              </div>
            )}
          </div>
        ))}
        
        {isTyping && (
          <div className="flex gap-2 justify-start">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Brain className="w-3 h-3 text-white" />
            </div>
            <div className="bg-slate-700 text-gray-200 p-3 rounded-lg text-sm">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-slate-700">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about vulnerabilities, conflicts, analysis..."
            className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 text-sm"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim() || isTyping}
            className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};