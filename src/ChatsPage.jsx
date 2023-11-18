import React, { useState } from "react";
import ChatComponent from "./components/ChatComponent";
import TuringChatComponent from "./components/TuringChatComponent";
import PsychChatComponent from "./components/PsychChatComponent";
import EightyChatComponent from "./components/EightyChatComponent";
import JHChatComponent from "./components/JHChatComponent";
import MOVChatComponent from "./components/MOVChatComponent";
import NasaChatComponent from "./components/NasaChatComponent";
import YTChatComponent from "./components/YTChatComponent";
import { BrowserRouter as Router } from "react-router-dom";

function ChatsPage() {
  const [activeChat, setActiveChat] = useState("Norwegian Wood");

  const handleChatClick = (chatName) => {
    setActiveChat(chatName);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/4 bg-gray-200 border-r">
        <ul>
          <li
            onClick={() => handleChatClick("Norwegian Wood")}
            className={`p-4 cursor-pointer hover:bg-gray-300 ${
              activeChat === "Norwegian Wood" && "bg-gray-300"
            }`}
          >
            Norwegian Wood
          </li>
          <li
            onClick={() => handleChatClick("Turing")}
            className={`p-4 cursor-pointer hover:bg-gray-300 ${
              activeChat === "Turing" && "bg-gray-300"
            }`}
          >
            Turing
          </li>
          <li
            onClick={() => handleChatClick("Psych")}
            className={`p-4 cursor-pointer hover:bg-gray-300 ${
              activeChat === "Psych" && "bg-gray-300"
            }`}
          >
            Psychology Of Money
          </li>
          <li
            onClick={() => handleChatClick("Eighty")}
            className={`p-4 cursor-pointer hover:bg-gray-300 ${
              activeChat === "Eighty" && "bg-gray-300"
            }`}
          >
            Eighty
          </li>
          <li
            onClick={() => handleChatClick("JH")}
            className={`p-4 cursor-pointer hover:bg-gray-300 ${
              activeChat === "JH" && "bg-gray-300"
            }`}
          >
            JH
          </li>
          <li
            onClick={() => handleChatClick("MOV")}
            className={`p-4 cursor-pointer hover:bg-gray-300 ${
              activeChat === "MOV" && "bg-gray-300"
            }`}
          >
            MOV
          </li>
          <li
            onClick={() => handleChatClick("Nasa")}
            className={`p-4 cursor-pointer hover:bg-gray-300 ${
              activeChat === "Nasa" && "bg-gray-300"
            }`}
          >
            Nasa
          </li>
          <li
            onClick={() => handleChatClick("YT")}
            className={`p-4 cursor-pointer hover:bg-gray-300 ${
              activeChat === "YT" && "bg-gray-300"
            }`}
          >
            YouTube
          </li>
        </ul>
      </div>
      <div className="w-3/4 bg-white">
        <div className="bg-indigo-500 text-white p-4">
          {activeChat}
        </div>
        <div className="p-4">
          {activeChat === "Norwegian Wood" && <ChatComponent />}
          {activeChat === "Turing" && <TuringChatComponent />}
          {activeChat === "Psych" && <PsychChatComponent />}
          {activeChat === "Eighty" && <EightyChatComponent />}
          {activeChat === "JH" && <JHChatComponent />}
          {activeChat === "MOV" && <MOVChatComponent />}
          {activeChat === "Nasa" && <NasaChatComponent />}
          {activeChat === "YT" && <YTChatComponent />}
        </div>
      </div>
    </div>
  );
}

export default ChatsPage;
