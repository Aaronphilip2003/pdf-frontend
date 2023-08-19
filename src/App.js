import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import {
  MainContainer,
  Sidebar,
  ChatContainer,
  ConversationList,
  Conversation,
  MessageList,
  ConversationHeader,
  Message,
} from "@chatscope/chat-ui-kit-react";
import ChatComponent from "./components/ChatComponent";
import TuringChatComponent from "./components/TuringChatComponent";
import PsychChatComponent from "./components/PsychChatComponent";

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to the Home Page</h1>
      <Link to="/chats">
        <button>Go to Chats</button>
      </Link>
    </div>
  );
}

function ChatsPage() {
  const [activeChat, setActiveChat] = useState("Norwegian Wood");

  const handleChatClick = (chatName) => {
    setActiveChat(chatName);
  };

  return (
    <MainContainer>
      <Sidebar position="left">
        <ConversationList>
          <Conversation
            name="Norwegian Wood"
            onClick={() => handleChatClick("Norwegian Wood")}
            active={activeChat === "Norwegian Wood"}
          />
          <Conversation
            name="Turing"
            onClick={() => handleChatClick("Turing")}
            active={activeChat === "Turing"}
          />
          <Conversation
            name="Psychology Of Money"
            onClick={() => handleChatClick("Psych")}
            active={activeChat === "Psych"}
          />
        </ConversationList>
      </Sidebar>
      <ChatContainer>
        <ConversationHeader>
          <ConversationHeader.Content userName={activeChat} />
        </ConversationHeader>
        <MessageList>
          {activeChat === "Norwegian Wood" && <ChatComponent />}
          {activeChat === "Turing" && <TuringChatComponent />}
          {activeChat === "Psych" && <PsychChatComponent />}
        </MessageList>
        {/* Remove the MessageInput from here */}
      </ChatContainer>
    </MainContainer>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chats" element={<ChatsPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
