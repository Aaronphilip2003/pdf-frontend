import React, { useState } from "react";
import "./App.css";
import { MainContainer, Sidebar, ChatContainer, ConversationList, Conversation, MessageList, ConversationHeader, Message } from "@chatscope/chat-ui-kit-react";
import ChatComponent from "./components/ChatComponent";
import TuringChatComponent from "./components/TuringChatComponent";
import PsychChatComponent from "./components/PsychChatComponent";

function App() {
  const [   activeChat, setActiveChat] = useState("Norwegian Wood");

  const handleChatClick = (chatName) => {
    setActiveChat(chatName);
  };

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
