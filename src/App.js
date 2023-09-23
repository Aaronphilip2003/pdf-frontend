import React, { useState } from "react";
import {
  MainContainer,
  Sidebar,
  ChatContainer,
  ConversationList,
  Conversation,
  MessageList,
  ConversationHeader,
} from "@chatscope/chat-ui-kit-react";
import ChatComponent from "./components/ChatComponent";
import TuringChatComponent from "./components/TuringChatComponent";
import PsychChatComponent from "./components/PsychChatComponent";
import EightyChatComponent from "./components/EightyChatComponent";
import JHChatComponent from "./components/JHChatComponent";
import MOVChatComponent from "./components/MOVChatComponent"; // Import your MOVChatComponent

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
          <Conversation
            name="Eighty"
            onClick={() => handleChatClick("Eighty")}
            active={activeChat === "Eighty"}
          />
          <Conversation
            name="JH"
            onClick={() => handleChatClick("JH")}
            active={activeChat === "JH"}
          />
          {/* Add a Conversation for MOV */}
          <Conversation
            name="MOV"
            onClick={() => handleChatClick("MOV")}
            active={activeChat === "MOV"}
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
          {activeChat === "Eighty" && <EightyChatComponent />}
          {activeChat === "JH" && <JHChatComponent />}
          {/* Render MOVChatComponent when activeChat is "MOV" */}
          {activeChat === "MOV" && <MOVChatComponent />}
        </MessageList>
      </ChatContainer>
    </MainContainer>
  );
}

function App() {
  return (
    <div className="App">
      <ChatsPage />
    </div>
  );
}

export default App;
