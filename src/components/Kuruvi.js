import React, { useState } from "react";
import './Kuruvi.css';
import { IoMdSend } from "react-icons/io";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Kuruvi = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State to track whether the chatbot is open or not

  // Initialize the Gemini API client
  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const sendMessage = async (e) => {
    e.preventDefault();

    if (inputText.trim() === "") return;

    // Add user's message to the state
    const userMessage = { text: inputText, sender: "user" };
    setMessages([...messages, userMessage]);

    setInputText("");

    try {
      // Generate content from Gemini API
      const result = await model.generateContent(inputText);

      // Log the response for debugging
      console.log('Response from Gemini API:', result);

      // Assuming the result contains the generated text in result.response.text
      const botMessage = { text: result.response.text, sender: "bot" };

      // Update the state with the bot's message
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error fetching response from Gemini API", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Sorry, there was an error. Please try again.", sender: "bot" },
      ]);
    }
  };

  // Toggle the chatbot visibility
  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Chatbot toggle button */}
      <div className={`chat-toggle-btn ${isOpen ? 'close-btn' : ''}`} onClick={toggleChat}>
        {isOpen ? '-' : 'GROK'}
      </div>

      {/* Chatbot window */}
      {isOpen && (
        <div className="kuruvi-chat">
          <div className="chat-header" onClick={toggleChat}>
            <h3>Kuruvi Chatbot</h3>
          </div>

          <div className="chat-window">
            <div className="messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>
                  <p>{msg.text}</p>
                </div>
              ))}
            </div>
          </div>

          <form className="chat-input" onSubmit={sendMessage}>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask me anything..."
            />
            <button type="submit"><IoMdSend/></button>
          </form>
        </div>
      )}
    </>
  );
};

export default Kuruvi;
