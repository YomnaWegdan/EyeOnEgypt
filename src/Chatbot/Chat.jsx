import React, { useEffect, useRef, useState } from 'react';

export default function Chat () {
    
    const API_KEY = process.env.API_KEY;


  const [userMessage, setUserMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    {
      message: 'Hi there!\nHow can I help you today?',
      sender: 'Chatbot',
    },
  ]);

  const handleChat = async () => {
    if (!userMessage.trim()) return;

    // Display user message immediately
    setChatMessages(prevMessages => [...prevMessages, { message: userMessage, sender: 'User' }]);
    setUserMessage('');

   

    try {
                  const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${API_KEY}`,
                    },
                    body: JSON.stringify({
                      model: 'gpt-3.5-turbo',
                      messages: chatMessages.map(msg => ({ role: msg.sender.toLowerCase(), content: msg.message })),
                    }),
                  });
              
                  if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                  }
              
                  const data = await response.json();
                  const botResponse = data.choices[0].message.content;
              
                  // Update chat messages with the bot's response
                  setChatMessages(prevMessages => [...prevMessages, { message: botResponse, sender: 'Chatbot' }]);
                  chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
                } catch (error) {
                  console.error(error);
                  setChatMessages(prevMessages => [...prevMessages, { message: 'Oops! Something went wrong. Please try again.', sender: 'Chatbot' }]);
                  chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
                }
              };
              
          

  const chatboxRef = useRef(null);

  useEffect(() => {
//     // Scroll to bottom of chatbox after messages have been updated
//     // chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;

chatboxRef.current.scrollTo({ top: chatboxRef.current.scrollHeight, behavior: 'smooth' });


      
  }, [chatMessages]);

            

  return (
    <div className="chat w-auto shadow border">
      <header className="text-center py-2 h-75 bg-light-color">
        <h4 className="text-sec mx-4">EyeOnEgypt</h4>
      </header>
      <ul ref={chatboxRef} className="chat-body list-unstyled bg-white mb-0 overflow-auto "  >
        {chatMessages.map((msg, index) => (
          <li key={index} className={`${msg.sender.toLowerCase()} d-flex align-items-center justify-content-${msg.sender.toLowerCase() === 'user' ? 'start' : 'end me-2 '}`}>
            {msg.sender.toLowerCase() === 'user' ? <span><i className="fa-solid fa-user p-2 text-sec my-2"></i></span> : <span><i className="fa-solid fa-robot p-2 text-sec my-2"></i></span>}
            <div className='bg-light-color p-2 rounded-3 my-2'>
              <p>{msg.message}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="chat-input d-flex align-items-center justify-content-between border-top bg-light-color">
        <input
          className="form-control p-3 w-75 border-0 bg-light-color"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Enter a message..."
          required
        ></input>
        <button className="btn" onClick={handleChat}><i className="fa-regular fa-paper-plane text-sec"></i></button>
      </div>
    </div>
  );
};
