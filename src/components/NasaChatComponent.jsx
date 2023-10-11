import React, { useState } from "react";
import { MainContainer, ChatContainer, MessageList, MessageInput, Message } from "@chatscope/chat-ui-kit-react";
import axios from "axios";
import "./chat.css";

const NasaChatComponent = () => {
  const [messages, setMessages] = useState([]);

  const API_ENDPOINT = "http://127.0.0.1:8000/query/nasa/"; // API endpoint for Eighty

  const sendMessage = (message) => {
    const newMessage = {
      message: message,
      sender: "You",
      sentTime: new Date().toLocaleString(),
      direction: "outgoing",
      position: "single",
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    axios
      .get(API_ENDPOINT, {
        params: {
          query: message,
        },
      })
      .then((response) => {
        const responseData = response.data;
        const incomingMessages = responseData.answers.map((answer, index) => ({
          message: answer,
          sender: "Eighty",
          sentTime: new Date().toLocaleString(),
          direction: "incoming",
          position: index === responseData.answers.length - 1 ? "last" : "single",
        }));
        setMessages((prevMessages) => [...prevMessages, ...incomingMessages]);
      })
      .catch((error) => {
        console.error("Error sending query:", error);
      });
  };

  return (
    <div className="chatPage-div">
      <MainContainer>
        <ChatContainer>
          {/* No ConversationHeader */}
          <MessageList>
            {messages.map((msg, index) => (
              <Message
                key={index}
                model={{
                  message: msg.message,
                  sender: msg.sender,
                  sentTime: msg.sentTime,
                  direction: msg.direction,
                  position: msg.position,
                }}
              />
            ))}
          </MessageList>
          {/* MessageInput for Eighty */}
          <MessageInput placeholder="Chat with JH....." onSend={sendMessage} />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default NasaChatComponent;
