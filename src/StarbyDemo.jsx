import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function StarbyDemo() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm Starby, your AI streaming companion! I can chat with you, respond to your stream, and even react to your audience. Try asking me something!",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response (in real app, this would call your API)
    setTimeout(() => {
      const responses = [
        "That's a great question! As an AI designed for streaming, I love interacting with both streamers and their audience.",
        "I can help you engage with your viewers, answer questions about your stream, and even change my expressions based on the mood!",
        "Thanks for trying out my demo! In the real version, I use Google Cloud Speech-to-Text and ChatGPT's API for natural conversations.",
        "I'm designed to pause when you speak over me and can read Twitch chat to interact with your audience in real-time!",
        "That's interesting! I can also integrate with OBS to change my overlay expressions and react to channel point redemptions."
      ];

      const botMessage = {
        id: Date.now() + 1,
        text: responses[Math.floor(Math.random() * responses.length)],
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div>
      {/* Fixed background */}
      <div 
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0f0b1a 0%, #1a1332 50%, #2d1b69 100%)",
          zIndex: -2
        }}
      ></div>

      {/* Bubbles background */}
      <div className="bubbles">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              width: `${40 + i * 5}px`,
              height: `${40 + i * 5}px`,
              left: `${10 + i * 10}%`,
              animationDelay: `${-i * 2}s`,
              animationDuration: `${15 + i * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Header */}
      <header>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>
            ← Back to Portfolio
          </Link>
          <p style={{ textAlign: "right", margin: 0 }}>
            <a href="https://www.linkedin.com/in/erin-haynes-uiuc/" target="_blank" rel="noopener noreferrer">LinkedIn</a> • <a href="https://github.com/Kittyheart20" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </div>
      </header>

      <main style={{ paddingTop: '8rem' }}>
        {/* Demo Header */}
        {/* <div className="HeaderBox" style={{ margin: '4rem auto' }}>
          <h1>Starby AI Chatbot Demo</h1>
          <h3>Live AI Streaming Companion</h3>
          <p style={{ color: '#c4b5fd', marginTop: '1rem' }}>
            This is a simplified demo of Starby. The real version integrates with Twitch, 
            uses voice recognition, and can control OBS overlays!
          </p>
        </div> */}

        {/* Chat Interface */}
        {/* <div className="MainBox" style={{ maxWidth: '800px', margin: '2rem auto', height: '600px', display: 'flex', flexDirection: 'column' }}> */}
          {/* Chat Messages */}
          {/* <div style={{ 
            flex: 1, 
            overflowY: 'auto', 
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {messages.map((message) => (
              <div
                key={message.id}
                style={{
                  display: 'flex',
                  justifyContent: message.isBot ? 'flex-start' : 'flex-end',
                  marginBottom: '1rem'
                }}
              >
                <div
                  style={{
                    background: message.isBot 
                      ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(168, 85, 247, 0.1) 100%)'
                      : 'linear-gradient(135deg, rgba(251, 207, 181, 0.2) 0%, rgba(254, 215, 170, 0.15) 100%)',
                    color: message.isBot ? '#c4b5fd' : '#fbbf7d',
                    padding: '0.8rem 1.2rem',
                    borderRadius: '18px',
                    maxWidth: '70%',
                    border: `1px solid ${message.isBot ? 'rgba(139, 92, 246, 0.3)' : 'rgba(251, 207, 181, 0.3)'}`,
                    wordWrap: 'break-word'
                  }}
                >
                  <div style={{ fontSize: '0.9rem', marginBottom: '0.3rem', opacity: 0.8 }}>
                    {message.isBot ? '🤖 Starby' : '👤 You'}
                  </div>
                  <div>{message.text}</div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(168, 85, 247, 0.1) 100%)',
                  color: '#c4b5fd',
                  padding: '0.8rem 1.2rem',
                  borderRadius: '18px',
                  border: '1px solid rgba(139, 92, 246, 0.3)'
                }}>
                  <div style={{ fontSize: '0.9rem', marginBottom: '0.3rem', opacity: 0.8 }}>
                    🤖 Starby
                  </div>
                  <div>Typing...</div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div> */}

          {/* Input Form */}
          {/* <form onSubmit={handleSendMessage} style={{ 
            padding: '1rem',
            borderTop: '1px solid rgba(139, 92, 246, 0.2)',
            display: 'flex',
            gap: '1rem'
          }}>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Chat with Starby..."
              style={{
                flex: 1,
                padding: '0.8rem 1rem',
                borderRadius: '12px',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#c4b5fd',
                fontSize: '1rem'
              }}
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isTyping}
              style={{
                padding: '0.8rem 1.5rem',
                borderRadius: '12px',
                border: 'none',
                background: inputMessage.trim() && !isTyping 
                  ? 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)'
                  : 'rgba(139, 92, 246, 0.3)',
                color: 'white',
                cursor: inputMessage.trim() && !isTyping ? 'pointer' : 'not-allowed',
                fontSize: '1rem',
                fontWeight: '500'
              }}
            >
              Send
            </button>
          </form> */}
        {/* </div> */}

        {/* Features Box */}
        <div className="MainBox" style={{ maxWidth: '800px', margin: '2rem auto' }}>
          <h3 style={{ color: '#c4b5fd', marginBottom: '1rem' }}>✨ Real Starby Features</h3>
          <div style={{ textAlign: 'left', color: '#d1c4f7' }}>
            <p><strong>🎙️ Voice Integration:</strong> Uses Google Cloud Speech-to-Text for natural conversation</p>
            <p><strong>🤖 AI Powered:</strong> ChatGPT API integration for intelligent responses</p>
            <p><strong>📺 OBS Integration:</strong> Changes expressions and overlays in real-time</p>
            <p><strong>💬 Twitch Integration:</strong> Reads chat and responds to channel points</p>
            <p><strong>🔇 Smart Pausing:</strong> Automatically stops speaking when streamer talks</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default StarbyDemo; 