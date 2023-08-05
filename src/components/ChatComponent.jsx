import React, { useState } from "react";
import "./chat.css";
import { MainContainer, Sidebar, ChatContainer, ConversationList, Conversation, MessageList, MessageInput, ConversationHeader, Message } from "@chatscope/chat-ui-kit-react";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import axios from "axios";

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);

  const API_ENDPOINT = "http://127.0.0.1:8000/query/norwegianwood/";

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
        const incomingMessage = {
          message: responseData.answer,
          sender: "Receiver",
          sentTime: new Date().toLocaleString(),
          direction: "incoming",
          position: "single",
        };
        setMessages((prevMessages) => [...prevMessages, incomingMessage]);
      })
      .catch((error) => {
        console.error("Error sending query:", error);
      });
  };

  return (
    <div className="chatPage-div">
      <MainContainer>
        <Sidebar position="left">
          <ConversationList>
            <Conversation name="Norwegian Wood" />
          </ConversationList>
        </Sidebar>
        <ChatContainer>
          <ConversationHeader>
            <ConversationHeader.Content userName="Norwegian Wood" />
          </ConversationHeader>
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
          <MessageInput placeholder="Chat with your Data....." onSend={sendMessage} />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default ChatComponent;
