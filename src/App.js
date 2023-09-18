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
    <div className="">
      {/* <h1>Welcome to the Home Page</h1> */}
      <div>
        
      </div>
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

// const Gg = () => {
//   return (
//     <div
//       style={{
//         position: "relative",
//         backgroundColor: "#fff",
//         width: "100%",
//         height: "192.06rem",
//         textAlign: "left",
//         fontSize: "2.5rem",
//         color: "#fff",
//         fontFamily: "'Fira Sans'",
//       }}
//     >
//       <div
//         style={{
//           position: "absolute",
//           width: "100%",
//           top: "5.63rem",
//           right: "0rem",
//           left: "0rem",
//           height: "160.62rem",
//           color: "#800080",
//         }}
//       >
//         <div
//           style={{
//             position: "absolute",
//             top: "0rem",
//             left: "calc(50% - 960px)",
//             backgroundColor: "#800080",
//             width: "120rem",
//             display: "flex",
//             flexDirection: "column",
//             padding: "0rem 22.5rem",
//             boxSizing: "border-box",
//             alignItems: "flex-start",
//             justifyContent: "flex-start",
//             maxWidth: "120rem",
//             color: "#dda0dd",
//           }}
//         >
//           <div
//             style={{
//               alignSelf: "stretch",
//               display: "flex",
//               flexDirection: "row",
//               padding: "5rem 0rem 2rem",
//               alignItems: "flex-start",
//               justifyContent: "flex-start",
//               gap: "1rem",
//             }}
//           >
//             <div
//               style={{
//                 width: "45rem",
//                 display: "flex",
//                 flexDirection: "column",
//                 padding: "0rem 0rem 0rem",
//                 boxSizing: "border-box",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//                 gap: "1rem",
//               }}
//             >
//               <div
//                 style={{
//                   alignSelf: "stretch",
//                   display: "flex",
//                   flexDirection: "row",
//                   padding: "0rem 0rem 0.75rem",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                 }}
//               >
//                 <div
//                   style={{
//                     width: "45rem",
//                     display: "flex",
//                     flexDirection: "row",
//                     alignItems: "flex-start",
//                     justifyContent: "flex-start",
//                   }}
//                 >
//                   <div
//                     style={{
//                       position: "relative",
//                       lineHeight: "3.13rem",
//                       fontWeight: "500",
//                       display: "inline-block",
//                       maxWidth: "45rem",
//                     }}
//                   >
//                     <p style={{ margin: "0" }}>
//                       PocketLLM - Your personal document
//                     </p>
//                     <p style={{ margin: "0" }}>search engine</p>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 style={{
//                   alignSelf: "stretch",
//                   display: "flex",
//                   flexDirection: "row",
//                   padding: "0rem 0rem 0.9rem",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                   fontSize: "1.31rem",
//                   color: "#fff",
//                 }}
//               >
//                 <div
//                   style={{
//                     width: "45rem",
//                     display: "flex",
//                     flexDirection: "row",
//                     alignItems: "flex-start",
//                     justifyContent: "flex-start",
//                   }}
//                 >
//                   <div
//                     style={{
//                       position: "relative",
//                       lineHeight: "1.63rem",
//                       display: "inline-block",
//                       maxWidth: "45rem",
//                     }}
//                   >
//                     <p
//                       style={{ margin: "0" }}
//                     >{`Memorize 1000s of pages PDFs & Documents to search through them.`}</p>
//                     <p style={{ margin: "0" }}>
//                       Powered by AI and LLMs. Trained on your laptop. Fully
//                       private. Fully Free.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 style={{
//                   alignSelf: "stretch",
//                   display: "flex",
//                   flexDirection: "row",
//                   padding: "0rem 0rem 1.63rem",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                   fontSize: "1rem",
//                   color: "#757575",
//                 }}
//               >
//                 <div
//                   style={{
//                     position: "relative",
//                     width: "36rem",
//                     height: "5rem",
//                   }}
//                 >
//                   <div
//                     style={{
//                       position: "absolute",
//                       width: "100%",
//                       top: "0rem",
//                       right: "0rem",
//                       left: "0rem",
//                       display: "flex",
//                       flexDirection: "row",
//                       padding: "0.63rem 0rem",
//                       boxSizing: "border-box",
//                       alignItems: "flex-start",
//                       justifyContent: "flex-start",
//                     }}
//                   >
//                     <div
//                       style={{
//                         flex: "1",
//                         borderRadius: "30px",
//                         backgroundColor: "#fff",
//                         border: "1px solid #666",
//                         boxSizing: "border-box",
//                         height: "3.75rem",
//                         display: "flex",
//                         flexDirection: "row",
//                         padding: "1.28rem 1.06rem",
//                         alignItems: "flex-start",
//                         justifyContent: "flex-start",
//                         maxWidth: "36rem",
//                         zIndex: "0",
//                       }}
//                     >
//                       <div
//                         style={{
//                           width: "33.88rem",
//                           overflow: "hidden",
//                           flexShrink: "0",
//                           display: "flex",
//                           flexDirection: "row",
//                           alignItems: "flex-start",
//                           justifyContent: "flex-start",
//                         }}
//                       >
//                         <div
//                           style={{
//                             position: "relative",
//                             display: "inline-block",
//                             maxWidth: "33.88rem",
//                           }}
//                         >
//                           Type your email…
//                         </div>
//                       </div>
//                     </div>
//                     <div
//                       style={{
//                         margin: "0",
//                         position: "absolute",
//                         top: "-6250rem",
//                         left: "-6249.94rem",
//                         width: "4.15rem",
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "flex-start",
//                         justifyContent: "flex-start",
//                         zIndex: "1",
//                         fontSize: "1.31rem",
//                         color: "#333",
//                       }}
//                     >
//                       <div
//                         style={{
//                           position: "relative",
//                           lineHeight: "1.31rem",
//                           display: "inline-block",
//                           maxWidth: "4.15rem",
//                         }}
//                       >
//                         <b>{`Email `}</b>
//                         <span style={{ color: "#ff0000" }}>*</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div
//                     style={{
//                       position: "absolute",
//                       top: "0.63rem",
//                       left: "27.25rem",
//                       borderRadius: "2px 30px 30px 2px",
//                       backgroundColor: "#dda0dd",
//                       border: "2px solid #dda0dd",
//                       boxSizing: "border-box",
//                       width: "8.75rem",
//                       height: "3.75rem",
//                       display: "flex",
//                       flexDirection: "row",
//                       padding: "1.88rem 2.78rem 1.88rem 2.79rem",
//                       alignItems: "flex-start",
//                       justifyContent: "flex-start",
//                       textAlign: "center",
//                       fontSize: "2rem",
//                       color: "#fff",
//                     }}
//                   >
//                     <div style={{ position: "relative", fontWeight: "600" }}>
//                       Get
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               style={{
//                 width: "29rem",
//                 display: "flex",
//                 flexDirection: "column",
//                 padding: "0rem 0rem 3.09rem",
//                 boxSizing: "border-box",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//               }}
//             >
//               <div
//                 style={{
//                   alignSelf: "stretch",
//                   borderRadius: "20px",
//                   overflow: "hidden",
//                   display: "flex",
//                   flexDirection: "row",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                 }}
//               >
//                 <div
//                   style={{
//                     filter: "blur(0px)",
//                     width: "29rem",
//                     display: "flex",
//                     flexDirection: "row",
//                     padding: "0rem 0rem 0.38rem",
//                     boxSizing: "border-box",
//                     alignItems: "flex-start",
//                     justifyContent: "flex-start",
//                   }}
//                 >
//                   <img
//                     style={{
//                       position: "relative",
//                       width: "29rem",
//                       height: "16.31rem",
//                       objectFit: "cover",
//                       maxWidth: "29rem",
//                     }}
//                     alt=""
//                     src="/pllmvpng@2x.png"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div
//           style={{
//             position: "absolute",
//             top: "26.77rem",
//             left: "calc(50% - 960px)",
//             backgroundColor: "#fff",
//             width: "120rem",
//             display: "flex",
//             flexDirection: "column",
//             padding: "0rem 23rem 0rem 22rem",
//             boxSizing: "border-box",
//             alignItems: "flex-start",
//             justifyContent: "flex-start",
//             maxWidth: "120rem",
//           }}
//         >
//           <div
//             style={{
//               alignSelf: "stretch",
//               position: "relative",
//               height: "8rem",
//               zIndex: "0",
//             }}
//           />
//           <div
//             style={{
//               position: "absolute",
//               margin: "0",
//               width: "100%",
//               top: "-0.06rem",
//               right: "0%",
//               left: "0%",
//               height: "6.25rem",
//               overflow: "hidden",
//               flexShrink: "0",
//               zIndex: "1",
//             }}
//           >
//             <div
//               style={{
//                 position: "absolute",
//                 top: "0rem",
//                 left: "calc(50% + 960.65px)",
//                 width: "120.08rem",
//                 height: "6.25rem",
//                 overflow: "hidden",
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//                 transform: " rotate(180deg)",
//                 transformOrigin: "0 0",
//               }}
//             >
//               <img
//                 style={{
//                   position: "relative",
//                   width: "120.08rem",
//                   height: "6.25rem",
//                 }}
//                 alt=""
//                 src="/vector.svg"
//               />
//             </div>
//           </div>
//         </div>
//         <div
//           style={{
//             position: "absolute",
//             height: "calc(100% - 2391.58px)",
//             top: "34.77rem",
//             bottom: "114.7rem",
//             left: "calc(50% - 600px)",
//             width: "75rem",
//             display: "flex",
//             flexDirection: "row",
//             padding: "0rem 2rem",
//             boxSizing: "border-box",
//             alignItems: "flex-start",
//             justifyContent: "flex-start",
//             gap: "4rem",
//             fontSize: "1.5rem",
//           }}
//         >
//           <div
//             style={{
//               borderRadius: "25px",
//               backgroundColor: "#f3f3f3",
//               boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.4)",
//               width: "33.5rem",
//               display: "flex",
//               flexDirection: "column",
//               padding: "1.25rem 1.88rem",
//               boxSizing: "border-box",
//               alignItems: "flex-start",
//               justifyContent: "flex-start",
//               gap: "1rem",
//             }}
//           >
//             <div
//               style={{
//                 alignSelf: "stretch",
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//               }}
//             >
//               <div
//                 style={{
//                   position: "relative",
//                   lineHeight: "1.5rem",
//                   fontWeight: "500",
//                   display: "inline-block",
//                   maxWidth: "29.75rem",
//                 }}
//               >
//                 Stored locally
//               </div>
//             </div>
//             <div
//               style={{
//                 alignSelf: "stretch",
//                 display: "flex",
//                 flexDirection: "row",
//                 padding: "0rem 0rem 0.9rem",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//                 fontSize: "1.38rem",
//                 color: "#333",
//               }}
//             >
//               <div
//                 style={{
//                   width: "29.75rem",
//                   display: "flex",
//                   flexDirection: "row",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                 }}
//               >
//                 <div
//                   style={{
//                     position: "relative",
//                     lineHeight: "1.75rem",
//                     display: "inline-block",
//                     maxWidth: "29.75rem",
//                   }}
//                 >
//                   <p style={{ margin: "0" }}>
//                     For your privacy, all of the files and models are
//                   </p>
//                   <p style={{ margin: "0" }}>
//                     stored locally on your device. Only you have
//                   </p>
//                   <p style={{ margin: "0" }}>access to them.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div
//             style={{
//               borderRadius: "25px",
//               backgroundColor: "#f3f3f3",
//               boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.4)",
//               width: "33.5rem",
//               display: "flex",
//               flexDirection: "column",
//               padding: "1.25rem 1.88rem 3rem",
//               boxSizing: "border-box",
//               alignItems: "flex-start",
//               justifyContent: "flex-start",
//               gap: "1rem",
//             }}
//           >
//             <div
//               style={{
//                 alignSelf: "stretch",
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//               }}
//             >
//               <div
//                 style={{
//                   position: "relative",
//                   lineHeight: "1.5rem",
//                   fontWeight: "500",
//                   display: "inline-block",
//                   maxWidth: "29.75rem",
//                 }}
//               >
//                 Full Control
//               </div>
//             </div>
//             <div
//               style={{
//                 alignSelf: "stretch",
//                 display: "flex",
//                 flexDirection: "row",
//                 padding: "0rem 0rem 0.9rem",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//                 fontSize: "1.38rem",
//                 color: "#333",
//               }}
//             >
//               <div
//                 style={{
//                   width: "29.75rem",
//                   display: "flex",
//                   flexDirection: "row",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                 }}
//               >
//                 <div
//                   style={{
//                     position: "relative",
//                     lineHeight: "1.75rem",
//                     display: "inline-block",
//                     maxWidth: "29.75rem",
//                   }}
//                 >
//                   <p style={{ margin: "0" }}>
//                     Easily add, update or delete models and files at
//                   </p>
//                   <p style={{ margin: "0" }}>any time.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div
//           style={{
//             position: "absolute",
//             top: "47.92rem",
//             left: "calc(50% - 960px)",
//             backgroundColor: "#800080",
//             width: "120rem",
//             display: "flex",
//             flexDirection: "column",
//             padding: "0rem 22.5rem",
//             boxSizing: "border-box",
//             alignItems: "flex-start",
//             justifyContent: "flex-start",
//             maxWidth: "120rem",
//             color: "#dda0dd",
//           }}
//         >
//           <div
//             style={{
//               alignSelf: "stretch",
//               display: "flex",
//               flexDirection: "row",
//               padding: "9rem 6.5rem 3rem 0rem",
//               alignItems: "flex-start",
//               justifyContent: "flex-start",
//               position: "relative",
//               gap: "1rem",
//             }}
//           >
//             <div
//               style={{
//                 position: "absolute",
//                 margin: "0",
//                 width: "160%",
//                 top: "-0.06rem",
//                 right: "-30%",
//                 left: "-30%",
//                 height: "6.25rem",
//                 overflow: "hidden",
//                 zIndex: "0",
//               }}
//             >
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "0rem",
//                   left: "calc(50% + 960.65px)",
//                   width: "120.08rem",
//                   height: "6.25rem",
//                   overflow: "hidden",
//                   display: "flex",
//                   flexDirection: "row",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                   transform: " rotate(180deg)",
//                   transformOrigin: "0 0",
//                 }}
//               >
//                 <img
//                   style={{
//                     position: "relative",
//                     width: "120.08rem",
//                     height: "6.25rem",
//                   }}
//                   alt=""
//                   src="/vector1.svg"
//                 />
//               </div>
//             </div>
//             <div
//               style={{
//                 width: "37.5rem",
//                 display: "flex",
//                 flexDirection: "column",
//                 padding: "0rem 0rem 5.51rem",
//                 boxSizing: "border-box",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//                 gap: "0.94rem",
//                 zIndex: "1",
//               }}
//             >
//               <div
//                 style={{
//                   alignSelf: "stretch",
//                   display: "flex",
//                   flexDirection: "row",
//                   padding: "0rem 0rem 0.75rem",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                 }}
//               >
//                 <div
//                   style={{
//                     position: "relative",
//                     lineHeight: "3.25rem",
//                     fontWeight: "500",
//                     display: "inline-block",
//                     maxWidth: "37.5rem",
//                   }}
//                 >
//                   Ask PocketLLM
//                 </div>
//               </div>
//               <div
//                 style={{
//                   alignSelf: "stretch",
//                   display: "flex",
//                   flexDirection: "row",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                   fontSize: "1.63rem",
//                   color: "#fff",
//                 }}
//               >
//                 <div
//                   style={{
//                     position: "relative",
//                     lineHeight: "2.13rem",
//                     display: "inline-block",
//                     maxWidth: "37.5rem",
//                   }}
//                 >
//                   <p style={{ margin: "0" }}>
//                     You can ask PocketLLM about anything in your
//                   </p>
//                   <p style={{ margin: "0" }}>
//                     document and corpus of documents. And because
//                   </p>
//                   <p style={{ margin: "0" }}>
//                     of the power of semantic search, you can search
//                   </p>
//                   <p style={{ margin: "0" }}>
//                     entire paragraphs, similar concepts or even your
//                   </p>
//                   <p style={{ margin: "0" }}>multiple topics all at once</p>
//                 </div>
//               </div>
//             </div>
//             <img
//               style={{
//                 position: "relative",
//                 borderRadius: "15px",
//                 width: "30rem",
//                 height: "21.07rem",
//                 objectFit: "cover",
//                 maxWidth: "30rem",
//                 zIndex: "2",
//               }}
//               alt=""
//               src="/cleanshot20230703at1040491gif@2x.png"
//             />
//           </div>
//         </div>
//         <div
//           style={{
//             position: "absolute",
//             top: "81rem",
//             left: "calc(50% - 960px)",
//             backgroundColor: "#fff",
//             width: "120rem",
//             display: "flex",
//             flexDirection: "column",
//             padding: "0rem 22.5rem",
//             boxSizing: "border-box",
//             alignItems: "flex-start",
//             justifyContent: "flex-start",
//             maxWidth: "120rem",
//           }}
//         >
//           <div
//             style={{
//               alignSelf: "stretch",
//               display: "flex",
//               flexDirection: "row",
//               padding: "8rem 0rem 0.31rem",
//               alignItems: "flex-start",
//               justifyContent: "flex-start",
//               position: "relative",
//             }}
//           >
//             <div
//               style={{
//                 position: "absolute",
//                 margin: "0",
//                 width: "160%",
//                 top: "-0.06rem",
//                 right: "-30%",
//                 left: "-30%",
//                 height: "6.25rem",
//                 overflow: "hidden",
//                 zIndex: "0",
//               }}
//             >
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "0rem",
//                   left: "calc(50% + 960.65px)",
//                   width: "120.08rem",
//                   height: "6.25rem",
//                   overflow: "hidden",
//                   display: "flex",
//                   flexDirection: "row",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                   transform: " rotate(180deg)",
//                   transformOrigin: "0 0",
//                 }}
//               >
//                 <img
//                   style={{
//                     position: "relative",
//                     width: "120.08rem",
//                     height: "6.25rem",
//                   }}
//                   alt=""
//                   src="/vector2.svg"
//                 />
//               </div>
//             </div>
//             <div
//               style={{
//                 alignSelf: "stretch",
//                 position: "relative",
//                 lineHeight: "2.5rem",
//                 fontWeight: "500",
//                 display: "flex",
//                 alignItems: "center",
//                 maxWidth: "75rem",
//                 zIndex: "1",
//               }}
//             >
//               PocketLLM is for everyone
//             </div>
//           </div>
//         </div>
//         <div
//           style={{
//             position: "absolute",
//             top: "91.81rem",
//             left: "calc(50% - 960px)",
//             backgroundColor: "#fff",
//             width: "120rem",
//             display: "flex",
//             flexDirection: "column",
//             padding: "0rem 22.5rem",
//             boxSizing: "border-box",
//             alignItems: "flex-start",
//             justifyContent: "flex-start",
//             maxWidth: "120rem",
//             fontSize: "1.75rem",
//           }}
//         >
//           <div
//             style={{
//               alignSelf: "stretch",
//               display: "flex",
//               flexDirection: "row",
//               padding: "3rem 0rem 2rem",
//               alignItems: "flex-start",
//               justifyContent: "flex-start",
//               gap: "1.88rem",
//             }}
//           >
//             <div
//               style={{
//                 width: "23.75rem",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "flex-start",
//                 justifyContent: "center",
//                 gap: "1rem",
//               }}
//             >
//               <div
//                 style={{
//                   width: "100%",
//                   display: "flex",
//                   flexDirection: "row",
//                   padding: "0rem 0rem 0.75rem",
//                   boxSizing: "border-box",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                   maxWidth: "23.75rem",
//                 }}
//               >
//                 <div
//                   style={{
//                     position: "relative",
//                     lineHeight: "1.75rem",
//                     fontWeight: "500",
//                     display: "inline-block",
//                     maxWidth: "23.75rem",
//                   }}
//                 >
//                   Legal Firms/Journalists
//                 </div>
//               </div>
//               <div
//                 style={{
//                   alignSelf: "stretch",
//                   display: "flex",
//                   flexDirection: "row",
//                   padding: "0rem 0rem 0rem 2rem",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                   fontSize: "1.31rem",
//                   color: "#333",
//                 }}
//               >
//                 <div
//                   style={{
//                     width: "21.75rem",
//                     display: "flex",
//                     flexDirection: "row",
//                     alignItems: "flex-start",
//                     justifyContent: "flex-start",
//                   }}
//                 >
//                   <div
//                     style={{
//                       position: "relative",
//                       lineHeight: "1.63rem",
//                       display: "inline-block",
//                       maxWidth: "21.75rem",
//                     }}
//                   >
//                     <p style={{ margin: "0" }}>
//                       Upload all past case files related to
//                     </p>
//                     <p style={{ margin: "0" }}>
//                       a topic and create a fast knowledge
//                     </p>
//                     <p style={{ margin: "0" }}>base</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               style={{
//                 width: "23.75rem",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//                 gap: "1rem",
//               }}
//             >
//               <div
//                 style={{
//                   width: "100%",
//                   display: "flex",
//                   flexDirection: "row",
//                   padding: "0rem 0rem 0.75rem",
//                   boxSizing: "border-box",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                   maxWidth: "23.75rem",
//                 }}
//               >
//                 <div
//                   style={{
//                     position: "relative",
//                     lineHeight: "1.75rem",
//                     fontWeight: "500",
//                     display: "inline-block",
//                     maxWidth: "23.75rem",
//                   }}
//                 >
//                   Researchers
//                 </div>
//               </div>
//               <div
//                 style={{
//                   alignSelf: "stretch",
//                   display: "flex",
//                   flexDirection: "column",
//                   padding: "0rem 0rem 0rem 2rem",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                   fontSize: "1.31rem",
//                   color: "#333",
//                 }}
//               >
//                 <div
//                   style={{
//                     width: "21.75rem",
//                     display: "flex",
//                     flexDirection: "row",
//                     padding: "0rem 0rem 0.63rem",
//                     boxSizing: "border-box",
//                     alignItems: "flex-start",
//                     justifyContent: "flex-start",
//                   }}
//                 >
//                   <div
//                     style={{
//                       position: "relative",
//                       lineHeight: "1.63rem",
//                       display: "inline-block",
//                       maxWidth: "21.75rem",
//                     }}
//                   >
//                     <p style={{ margin: "0" }}>Search and explore papers and</p>
//                     <p style={{ margin: "0" }}>other research material.</p>
//                   </div>
//                 </div>
//                 <div
//                   style={{
//                     width: "21.75rem",
//                     display: "flex",
//                     flexDirection: "row",
//                     padding: "0rem 0rem 0.63rem",
//                     boxSizing: "border-box",
//                     alignItems: "flex-start",
//                     justifyContent: "flex-start",
//                   }}
//                 >
//                   <div
//                     style={{
//                       position: "relative",
//                       lineHeight: "1.63rem",
//                       display: "inline-block",
//                       maxWidth: "21.75rem",
//                     }}
//                   >
//                     <p style={{ margin: "0" }}>Quickly cite sources and find</p>
//                     <p style={{ margin: "0" }}>relevant context.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               style={{
//                 width: "23.75rem",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//                 gap: "1rem",
//               }}
//             >
//               <div
//                 style={{
//                   width: "100%",
//                   display: "flex",
//                   flexDirection: "row",
//                   padding: "0rem 0rem 0.75rem",
//                   boxSizing: "border-box",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                   maxWidth: "23.75rem",
//                 }}
//               >
//                 <div
//                   style={{
//                     position: "relative",
//                     lineHeight: "1.75rem",
//                     fontWeight: "500",
//                     display: "inline-block",
//                     maxWidth: "23.75rem",
//                   }}
//                 >
//                   Knowledge Base
//                 </div>
//               </div>
//               <div
//                 style={{
//                   alignSelf: "stretch",
//                   display: "flex",
//                   flexDirection: "row",
//                   padding: "0rem 0rem 0rem 2rem",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                   fontSize: "1.31rem",
//                   color: "#333",
//                 }}
//               >
//                 <div
//                   style={{
//                     width: "21.75rem",
//                     display: "flex",
//                     flexDirection: "row",
//                     alignItems: "flex-start",
//                     justifyContent: "flex-start",
//                   }}
//                 >
//                   <div
//                     style={{
//                       position: "relative",
//                       lineHeight: "1.63rem",
//                       display: "inline-block",
//                       maxWidth: "21.75rem",
//                     }}
//                   >
//                     <p style={{ margin: "0" }}>
//                       For anyone who wants to build an
//                     </p>
//                     <p style={{ margin: "0" }}>internal knowledge base from</p>
//                     <p style={{ margin: "0" }}>documents for fast search and</p>
//                     <p style={{ margin: "0" }}>retrieval</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div
//           style={{
//             position: "absolute",
//             top: "108.06rem",
//             left: "calc(50% - 960px)",
//             backgroundColor: "#800080",
//             width: "120rem",
//             display: "flex",
//             flexDirection: "column",
//             padding: "0rem 22.5rem",
//             boxSizing: "border-box",
//             alignItems: "flex-start",
//             justifyContent: "flex-start",
//             maxWidth: "120rem",
//             color: "#dda0dd",
//           }}
//         >
//           <div
//             style={{
//               alignSelf: "stretch",
//               display: "flex",
//               flexDirection: "row",
//               padding: "9rem 0rem 1rem",
//               alignItems: "flex-start",
//               justifyContent: "flex-start",
//               position: "relative",
//               gap: "3.13rem",
//             }}
//           >
//             <div
//               style={{
//                 position: "absolute",
//                 margin: "0",
//                 width: "160%",
//                 top: "-0.06rem",
//                 right: "-30%",
//                 left: "-30%",
//                 height: "6.25rem",
//                 overflow: "hidden",
//                 zIndex: "0",
//               }}
//             >
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "0rem",
//                   left: "calc(50% + 960.65px)",
//                   width: "120.08rem",
//                   height: "6.25rem",
//                   overflow: "hidden",
//                   display: "flex",
//                   flexDirection: "row",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                   transform: " rotate(180deg)",
//                   transformOrigin: "0 0",
//                 }}
//               >
//                 <img
//                   style={{
//                     position: "relative",
//                     width: "120.08rem",
//                     height: "6.25rem",
//                   }}
//                   alt=""
//                   src="/vector3.svg"
//                 />
//               </div>
//             </div>
//             <img
//               style={{
//                 position: "relative",
//                 borderRadius: "15px",
//                 width: "33.75rem",
//                 height: "20.25rem",
//                 objectFit: "cover",
//                 maxWidth: "33.75rem",
//                 zIndex: "1",
//               }}
//               alt=""
//               src="/cleanshot20230703at1039061gif@2x.png"
//             />
//             <div
//               style={{
//                 width: "38.13rem",
//                 display: "flex",
//                 flexDirection: "column",
//                 padding: "0rem 0rem 0.06rem",
//                 boxSizing: "border-box",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//                 gap: "0.94rem",
//                 zIndex: "2",
//               }}
//             >
//               <div
//                 style={{
//                   width: "100%",
//                   display: "flex",
//                   flexDirection: "row",
//                   padding: "0rem 0rem 0.75rem",
//                   boxSizing: "border-box",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                   maxWidth: "38.13rem",
//                 }}
//               >
//                 <div
//                   style={{
//                     position: "relative",
//                     lineHeight: "3.25rem",
//                     fontWeight: "500",
//                     display: "inline-block",
//                     maxWidth: "38.13rem",
//                   }}
//                 >
//                   Teach the model
//                 </div>
//               </div>
//               <div
//                 style={{
//                   alignSelf: "stretch",
//                   display: "flex",
//                   flexDirection: "row",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                   fontSize: "1.63rem",
//                   color: "#fff",
//                 }}
//               >
//                 <div
//                   style={{
//                     position: "relative",
//                     lineHeight: "2.13rem",
//                     display: "inline-block",
//                     maxWidth: "38.13rem",
//                   }}
//                 >
//                   <p style={{ margin: "0" }}>
//                     No AI is perfect, but the most useful ones are those
//                   </p>
//                   <p style={{ margin: "0" }}>
//                     that can learn. PocketLLM can actually learn from
//                   </p>
//                   <p style={{ margin: "0" }}>
//                     feedback. Either ‘like’ the results or teach it new
//                   </p>
//                   <p style={{ margin: "0" }}>
//                     associations to help the model learn your use-case
//                   </p>
//                   <p style={{ margin: "0" }}>or jargon.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div
//           style={{
//             position: "absolute",
//             top: "138.31rem",
//             left: "calc(50% - 960px)",
//             backgroundColor: "#fff",
//             width: "120rem",
//             display: "flex",
//             flexDirection: "column",
//             padding: "0rem 22.5rem",
//             boxSizing: "border-box",
//             alignItems: "flex-start",
//             justifyContent: "flex-start",
//             maxWidth: "120rem",
//           }}
//         >
//           <div
//             style={{
//               alignSelf: "stretch",
//               display: "flex",
//               flexDirection: "row",
//               padding: "8rem 0rem 0.31rem",
//               alignItems: "flex-start",
//               justifyContent: "flex-start",
//               position: "relative",
//             }}
//           >
//             <div
//               style={{
//                 position: "absolute",
//                 margin: "0",
//                 width: "160%",
//                 top: "-0.06rem",
//                 right: "-30%",
//                 left: "-30%",
//                 height: "6.25rem",
//                 overflow: "hidden",
//                 zIndex: "0",
//               }}
//             >
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "0rem",
//                   left: "calc(50% + 960.65px)",
//                   width: "120.08rem",
//                   height: "6.25rem",
//                   overflow: "hidden",
//                   display: "flex",
//                   flexDirection: "row",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                   transform: " rotate(180deg)",
//                   transformOrigin: "0 0",
//                 }}
//               >
//                 <img
//                   style={{
//                     position: "relative",
//                     width: "120.08rem",
//                     height: "6.25rem",
//                   }}
//                   alt=""
//                   src="/vector4.svg"
//                 />
//               </div>
//             </div>
//             <div
//               style={{
//                 alignSelf: "stretch",
//                 position: "relative",
//                 lineHeight: "2.5rem",
//                 fontWeight: "500",
//                 display: "flex",
//                 alignItems: "center",
//                 maxWidth: "75rem",
//                 zIndex: "1",
//               }}
//             >
//               Features
//             </div>
//           </div>
//         </div>
//         <div
//           style={{
//             position: "absolute",
//             top: "149.12rem",
//             left: "calc(50% - 960px)",
//             backgroundColor: "#fff",
//             width: "120rem",
//             display: "flex",
//             flexDirection: "column",
//             padding: "0rem 22.5rem",
//             boxSizing: "border-box",
//             alignItems: "flex-start",
//             justifyContent: "flex-start",
//             maxWidth: "120rem",
//             fontSize: "1.31rem",
//             color: "#333",
//           }}
//         >
//           <div
//             style={{
//               alignSelf: "stretch",
//               display: "flex",
//               flexDirection: "row",
//               padding: "3rem 0rem 2rem",
//               alignItems: "flex-start",
//               justifyContent: "flex-start",
//               gap: "1.88rem",
//             }}
//           >
//             <div
//               style={{
//                 width: "23.75rem",
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//               }}
//             >
//               <div
//                 style={{
//                   position: "relative",
//                   lineHeight: "1.63rem",
//                   display: "inline-block",
//                   maxWidth: "23.75rem",
//                 }}
//               >
//                 <p style={{ margin: "0" }}>
//                   Fine-tune results to update the model
//                 </p>
//                 <p style={{ margin: "0" }}>
//                   based on your preferences with 1 click.
//                 </p>
//               </div>
//             </div>
//             <div
//               style={{
//                 width: "23.75rem",
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//               }}
//             >
//               <div
//                 style={{
//                   position: "relative",
//                   lineHeight: "1.63rem",
//                   display: "inline-block",
//                   maxWidth: "23.75rem",
//                 }}
//               >
//                 <p style={{ margin: "0" }}>Summarize results for easy</p>
//                 <p style={{ margin: "0" }}>
//                   understanding. You can pick the top 3
//                 </p>
//                 <p style={{ margin: "0" }}>or 5 results and summarize them.</p>
//               </div>
//             </div>
//             <div
//               style={{
//                 width: "23.75rem",
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//               }}
//             >
//               <div
//                 style={{
//                   position: "relative",
//                   lineHeight: "1.63rem",
//                   display: "inline-block",
//                   maxWidth: "23.75rem",
//                 }}
//               >
//                 <p style={{ margin: "0" }}>
//                   Hyperfast training and retrieval. Train
//                 </p>
//                 <p style={{ margin: "0" }}>
//                   up to a billion parameter model on
//                 </p>
//                 <p style={{ margin: "0" }}>
//                   your laptop in a few minutes and get
//                 </p>
//                 <p style={{ margin: "0" }}>instant results from search</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         style={{
//           position: "absolute",
//           width: "100%",
//           top: "166.25rem",
//           right: "0rem",
//           left: "0rem",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "flex-start",
//           justifyContent: "flex-start",
//           fontSize: "1.25rem",
//         }}
//       >
//         <div
//           style={{
//             backgroundColor: "#800080",
//             borderTop: "2px solid #dda0dd",
//             boxSizing: "border-box",
//             width: "120rem",
//             display: "flex",
//             flexDirection: "column",
//             padding: "0.13rem 22.5rem 0rem",
//             alignItems: "flex-start",
//             justifyContent: "flex-start",
//             maxWidth: "120rem",
//           }}
//         >
//           <div
//             style={{
//               width: "100%",
//               display: "flex",
//               flexDirection: "row",
//               padding: "3rem 0rem 2rem",
//               boxSizing: "border-box",
//               alignItems: "flex-start",
//               justifyContent: "flex-start",
//               gap: "1rem",
//               maxWidth: "75rem",
//             }}
//           >
//             <div
//               style={{
//                 width: "18.25rem",
//                 display: "flex",
//                 flexDirection: "column",
//                 padding: "0rem 0rem 0.63rem",
//                 boxSizing: "border-box",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//                 gap: "1rem",
//                 fontSize: "1rem",
//               }}
//             >
//               <div
//                 style={{
//                   alignSelf: "stretch",
//                   display: "flex",
//                   flexDirection: "row",
//                   padding: "0rem 5rem 0rem 0rem",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "row",
//                     padding: "0.17rem 0rem 0.17rem",
//                     boxSizing: "border-box",
//                     alignItems: "flex-start",
//                     justifyContent: "center",
//                     maxWidth: "13.25rem",
//                   }}
//                 >
//                   <img
//                     style={{
//                       position: "relative",
//                       width: "13.25rem",
//                       height: "3.03rem",
//                       overflow: "hidden",
//                       flexShrink: "0",
//                     }}
//                     alt=""
//                     src="/thirdai-logosvg.svg"
//                   />
//                 </div>
//               </div>
//               <div
//                 style={{
//                   alignSelf: "stretch",
//                   display: "flex",
//                   flexDirection: "row",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                 }}
//               >
//                 <div
//                   style={{
//                     position: "relative",
//                     lineHeight: "1.5rem",
//                     display: "inline-block",
//                     maxWidth: "18.25rem",
//                   }}
//                 >
//                   <p style={{ margin: "0" }}>ThirdAI is on a mission to make</p>
//                   <p style={{ margin: "0" }}>
//                     sophisticated large language models
//                   </p>
//                   <p style={{ margin: "0" }}>
//                     (LLMs) and other cutting-edge AI
//                   </p>
//                   <p style={{ margin: "0" }}>
//                     technologies accessible for everyone.
//                   </p>
//                   <p style={{ margin: "0" }}>
//                     Our goal is to build customized, private
//                   </p>
//                   <p style={{ margin: "0" }}>AI that is trained on commodity</p>
//                   <p style={{ margin: "0" }}>hardware with ultra-low latency</p>
//                   <p style={{ margin: "0" }}>
//                     inference for every organization.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div
//               style={{
//                 width: "37.23rem",
//                 display: "flex",
//                 flexDirection: "column",
//                 padding: "0rem 0rem 4.69rem",
//                 boxSizing: "border-box",
//                 alignItems: "center",
//                 justifyContent: "flex-start",
//                 gap: "0.94rem",
//               }}
//             >
//               <div
//                 style={{
//                   width: "37.23rem",
//                   display: "flex",
//                   flexDirection: "row",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                 }}
//               >
//                 <div
//                   style={{
//                     position: "relative",
//                     lineHeight: "1.25rem",
//                     fontWeight: "500",
//                     display: "inline-block",
//                     maxWidth: "37.23rem",
//                   }}
//                 >
//                   USEFUL LINKS
//                 </div>
//               </div>
//               <div
//                 style={{
//                   alignSelf: "stretch",
//                   display: "flex",
//                   flexDirection: "row",
//                   alignItems: "flex-start",
//                   justifyContent: "space-between",
//                   fontSize: "1.06rem",
//                 }}
//               >
//                 <div
//                   style={{
//                     width: "10.05rem",
//                     display: "flex",
//                     flexDirection: "column",
//                     padding: "0rem 1rem 3.85rem 0rem",
//                     boxSizing: "border-box",
//                     alignItems: "flex-start",
//                     justifyContent: "flex-start",
//                   }}
//                 >
//                   <div
//                     style={{
//                       alignSelf: "stretch",
//                       display: "flex",
//                       flexDirection: "row",
//                       padding: "0rem 0rem 0.96rem",
//                       alignItems: "flex-start",
//                       justifyContent: "flex-start",
//                     }}
//                   >
//                     <div
//                       style={{
//                         position: "relative",
//                         lineHeight: "1.63rem",
//                         textTransform: "uppercase",
//                         fontWeight: "500",
//                         display: "inline-block",
//                         maxWidth: "9.05rem",
//                       }}
//                     >
//                       Technology
//                     </div>
//                   </div>
//                   <div
//                     style={{
//                       alignSelf: "stretch",
//                       display: "flex",
//                       flexDirection: "column",
//                       alignItems: "flex-start",
//                       justifyContent: "flex-start",
//                       gap: "0.44rem",
//                       fontSize: "1rem",
//                     }}
//                   >
//                     <div
//                       style={{
//                         position: "relative",
//                         lineHeight: "1.63rem",
//                         display: "inline-block",
//                         maxWidth: "9.05rem",
//                       }}
//                     >
//                       BOLT Overview
//                     </div>
//                     <div
//                       style={{
//                         position: "relative",
//                         lineHeight: "1.63rem",
//                         display: "inline-block",
//                         maxWidth: "9.05rem",
//                       }}
//                     >
//                       Value Proposition
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   style={{
//                     width: "12.66rem",
//                     display: "flex",
//                     flexDirection: "column",
//                     padding: "0rem 1rem 0.16rem 0rem",
//                     boxSizing: "border-box",
//                     alignItems: "flex-start",
//                     justifyContent: "flex-start",
//                   }}
//                 >
//                   <div
//                     style={{
//                       alignSelf: "stretch",
//                       display: "flex",
//                       flexDirection: "row",
//                       padding: "0rem 0rem 0.96rem",
//                       alignItems: "flex-start",
//                       justifyContent: "flex-start",
//                     }}
//                   >
//                     <div
//                       style={{
//                         position: "relative",
//                         lineHeight: "1.63rem",
//                         textTransform: "uppercase",
//                         fontWeight: "500",
//                         display: "inline-block",
//                         maxWidth: "11.66rem",
//                       }}
//                     >
//                       Solutions
//                     </div>
//                   </div>
//                   <div
//                     style={{
//                       alignSelf: "stretch",
//                       display: "flex",
//                       flexDirection: "column",
//                       alignItems: "flex-start",
//                       justifyContent: "flex-start",
//                       gap: "0.44rem",
//                       fontSize: "1rem",
//                     }}
//                   >
//                     <div
//                       style={{
//                         position: "relative",
//                         lineHeight: "1.63rem",
//                         display: "inline-block",
//                         maxWidth: "11.66rem",
//                       }}
//                     >
//                       Text classification
//                     </div>
//                     <div
//                       style={{
//                         position: "relative",
//                         lineHeight: "1.63rem",
//                         display: "inline-block",
//                         maxWidth: "11.66rem",
//                       }}
//                     >
//                       Question answering
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         padding: "0rem 2.91rem 0rem 0rem",
//                         alignItems: "flex-start",
//                         justifyContent: "flex-start",
//                       }}
//                     >
//                       <div
//                         style={{ position: "relative", lineHeight: "1.63rem" }}
//                       >
//                         <p style={{ margin: "0" }}>Product search and</p>
//                         <p style={{ margin: "0" }}>recommendation</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   style={{
//                     width: "8.19rem",
//                     display: "flex",
//                     flexDirection: "column",
//                     padding: "0rem 0.06rem 0rem 0rem",
//                     boxSizing: "border-box",
//                     alignItems: "flex-start",
//                     justifyContent: "flex-start",
//                     gap: "0.69rem",
//                   }}
//                 >
//                   <div
//                     style={{
//                       alignSelf: "stretch",
//                       display: "flex",
//                       flexDirection: "row",
//                       alignItems: "flex-start",
//                       justifyContent: "flex-start",
//                     }}
//                   >
//                     <div
//                       style={{
//                         position: "relative",
//                         lineHeight: "1.63rem",
//                         textTransform: "uppercase",
//                         fontWeight: "500",
//                         display: "inline-block",
//                         maxWidth: "8.13rem",
//                       }}
//                     >
//                       Newsroom
//                     </div>
//                   </div>
//                   <div
//                     style={{
//                       alignSelf: "stretch",
//                       display: "flex",
//                       flexDirection: "column",
//                       alignItems: "flex-start",
//                       justifyContent: "flex-start",
//                       gap: "0.44rem",
//                       fontSize: "1rem",
//                     }}
//                   >
//                     <div
//                       style={{
//                         position: "relative",
//                         lineHeight: "1.63rem",
//                         display: "inline-block",
//                         maxWidth: "8.13rem",
//                       }}
//                     >
//                       Blog
//                     </div>
//                     <div
//                       style={{
//                         position: "relative",
//                         lineHeight: "1.63rem",
//                         display: "inline-block",
//                         maxWidth: "8.13rem",
//                       }}
//                     >
//                       Events
//                     </div>
//                     <div
//                       style={{
//                         position: "relative",
//                         lineHeight: "1.63rem",
//                         display: "inline-block",
//                         maxWidth: "8.13rem",
//                       }}
//                     >
//                       Press
//                     </div>
//                     <div
//                       style={{
//                         position: "relative",
//                         lineHeight: "1.63rem",
//                         display: "inline-block",
//                         maxWidth: "8.13rem",
//                       }}
//                     >
//                       Brand assets
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   style={{
//                     width: "6.33rem",
//                     display: "flex",
//                     flexDirection: "column",
//                     padding: "0rem 0.06rem 0rem 0rem",
//                     boxSizing: "border-box",
//                     alignItems: "flex-start",
//                     justifyContent: "flex-start",
//                     gap: "0.69rem",
//                   }}
//                 >
//                   <div
//                     style={{
//                       alignSelf: "stretch",
//                       display: "flex",
//                       flexDirection: "row",
//                       alignItems: "flex-start",
//                       justifyContent: "flex-start",
//                     }}
//                   >
//                     <div
//                       style={{
//                         position: "relative",
//                         lineHeight: "1.63rem",
//                         textTransform: "uppercase",
//                         fontWeight: "500",
//                         display: "inline-block",
//                         maxWidth: "6.27rem",
//                       }}
//                     >
//                       Company
//                     </div>
//                   </div>
//                   <div
//                     style={{
//                       alignSelf: "stretch",
//                       display: "flex",
//                       flexDirection: "column",
//                       alignItems: "flex-start",
//                       justifyContent: "flex-start",
//                       gap: "0.44rem",
//                       fontSize: "1rem",
//                     }}
//                   >
//                     <div
//                       style={{
//                         position: "relative",
//                         lineHeight: "1.63rem",
//                         display: "inline-block",
//                         maxWidth: "6.27rem",
//                       }}
//                     >
//                       Our story
//                     </div>
//                     <div
//                       style={{
//                         position: "relative",
//                         lineHeight: "1.63rem",
//                         display: "inline-block",
//                         maxWidth: "6.27rem",
//                       }}
//                     >
//                       Team
//                     </div>
//                     <div
//                       style={{
//                         position: "relative",
//                         lineHeight: "1.63rem",
//                         display: "inline-block",
//                         maxWidth: "6.27rem",
//                       }}
//                     >
//                       Careers
//                     </div>
//                     <div
//                       style={{
//                         position: "relative",
//                         lineHeight: "1.63rem",
//                         display: "inline-block",
//                         maxWidth: "6.27rem",
//                       }}
//                     >
//                       Contact us
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               style={{
//                 width: "17.52rem",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//               }}
//             >
//               <div
//                 style={{
//                   alignSelf: "stretch",
//                   display: "flex",
//                   flexDirection: "row",
//                   padding: "0rem 0rem 1rem",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                 }}
//               >
//                 <div
//                   style={{
//                     position: "relative",
//                     lineHeight: "1.25rem",
//                     textTransform: "uppercase",
//                     fontWeight: "500",
//                     display: "inline-block",
//                     maxWidth: "17.52rem",
//                   }}
//                 >
//                   Contact
//                 </div>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                   gap: "0.47rem",
//                   fontSize: "1rem",
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "row",
//                     padding: "0rem 0rem 0.47rem",
//                     alignItems: "center",
//                     justifyContent: "flex-start",
//                   }}
//                 >
//                   <div
//                     style={{
//                       display: "flex",
//                       flexDirection: "row",
//                       padding: "0rem 0.25rem",
//                       alignItems: "flex-start",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <img
//                       style={{
//                         alignSelf: "stretch",
//                         position: "relative",
//                         maxHeight: "100%",
//                         width: "2rem",
//                         overflow: "hidden",
//                         flexShrink: "0",
//                       }}
//                       alt=""
//                       src="/svg.svg"
//                     />
//                   </div>
//                   <div
//                     style={{
//                       display: "flex",
//                       flexDirection: "row",
//                       padding: "0rem 0.21rem 0rem 0.5rem",
//                       alignItems: "flex-start",
//                       justifyContent: "flex-start",
//                     }}
//                   >
//                     <div style={{ position: "relative", lineHeight: "1.5rem" }}>
//                       <p style={{ margin: "0" }}>
//                         <b>Address</b>
//                       </p>
//                       <p style={{ margin: "0" }}>
//                         3200 Southwest Fwy, Suite 3120,
//                       </p>
//                       <p style={{ margin: "0" }}>Houston, Texas 77027</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "row",
//                     padding: "0rem 4.96rem 0rem 0rem",
//                     alignItems: "center",
//                     justifyContent: "flex-start",
//                   }}
//                 >
//                   <div
//                     style={{
//                       display: "flex",
//                       flexDirection: "row",
//                       padding: "0rem 0.25rem",
//                       alignItems: "flex-start",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <img
//                       style={{
//                         alignSelf: "stretch",
//                         position: "relative",
//                         maxHeight: "100%",
//                         width: "2rem",
//                         overflow: "hidden",
//                         flexShrink: "0",
//                       }}
//                       alt=""
//                       src="/svg1.svg"
//                     />
//                   </div>
//                   <div
//                     style={{
//                       display: "flex",
//                       flexDirection: "column",
//                       padding: "0rem 0rem 0rem 0.5rem",
//                       alignItems: "flex-start",
//                       justifyContent: "flex-start",
//                     }}
//                   >
//                     <b style={{ position: "relative", lineHeight: "1.5rem" }}>
//                       Email
//                     </b>
//                     <div
//                       style={{
//                         position: "relative",
//                         lineHeight: "1.5rem",
//                         fontWeight: "500",
//                         color: "#dda0dd",
//                       }}
//                     >
//                       contact@thirdai.com
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 style={{
//                   alignSelf: "stretch",
//                   display: "flex",
//                   flexDirection: "column",
//                   padding: "1.31rem 0rem 0rem",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                   gap: "1rem",
//                 }}
//               >
//                 <div
//                   style={{
//                     alignSelf: "stretch",
//                     display: "flex",
//                     flexDirection: "row",
//                     alignItems: "flex-start",
//                     justifyContent: "flex-start",
//                   }}
//                 >
//                   <div
//                     style={{
//                       position: "relative",
//                       lineHeight: "1.25rem",
//                       textTransform: "uppercase",
//                       fontWeight: "500",
//                       display: "inline-block",
//                       maxWidth: "17.52rem",
//                     }}
//                   >
//                     Follow US
//                   </div>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "row",
//                     padding: "0rem 5.39rem 0rem 0rem",
//                     alignItems: "flex-start",
//                     justifyContent: "flex-start",
//                     gap: "0.38rem",
//                   }}
//                 >
//                   <div
//                     style={{
//                       borderRadius: "22px",
//                       border: "2px solid #dda0dd",
//                       display: "flex",
//                       flexDirection: "row",
//                       padding: "0.69rem",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <div
//                       style={{
//                         width: "1.38rem",
//                         height: "1.38rem",
//                         overflow: "hidden",
//                         flexShrink: "0",
//                         display: "flex",
//                         flexDirection: "row",
//                         padding: "0.13rem 0rem 0.13rem 0rem",
//                         boxSizing: "border-box",
//                         alignItems: "flex-start",
//                         justifyContent: "flex-start",
//                       }}
//                     >
//                       <img
//                         style={{
//                           position: "relative",
//                           width: "1.38rem",
//                           height: "1.12rem",
//                         }}
//                         alt=""
//                         src="/vector5.svg"
//                       />
//                     </div>
//                   </div>
//                   <div
//                     style={{
//                       borderRadius: "22px",
//                       border: "2px solid #dda0dd",
//                       display: "flex",
//                       flexDirection: "row",
//                       padding: "0.69rem",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <div
//                       style={{
//                         width: "1.38rem",
//                         height: "1.38rem",
//                         overflow: "hidden",
//                         flexShrink: "0",
//                         display: "flex",
//                         flexDirection: "row",
//                         padding: "0.09rem 0.09rem 0.09rem 0.09rem",
//                         boxSizing: "border-box",
//                         alignItems: "flex-start",
//                         justifyContent: "flex-start",
//                       }}
//                     >
//                       <img
//                         style={{
//                           position: "relative",
//                           width: "1.2rem",
//                           height: "1.2rem",
//                         }}
//                         alt=""
//                         src="/vector6.svg"
//                       />
//                     </div>
//                   </div>
//                   <div
//                     style={{
//                       borderRadius: "22px",
//                       border: "2px solid #dda0dd",
//                       display: "flex",
//                       flexDirection: "row",
//                       padding: "0.69rem",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <div
//                       style={{
//                         width: "1.38rem",
//                         height: "1.38rem",
//                         overflow: "hidden",
//                         flexShrink: "0",
//                         display: "flex",
//                         flexDirection: "row",
//                         padding: "0.09rem",
//                         boxSizing: "border-box",
//                         alignItems: "flex-start",
//                         justifyContent: "flex-start",
//                       }}
//                     >
//                       <img
//                         style={{
//                           position: "relative",
//                           width: "1.2rem",
//                           height: "1.2rem",
//                         }}
//                         alt=""
//                         src="/vector7.svg"
//                       />
//                     </div>
//                   </div>
//                   <div
//                     style={{
//                       borderRadius: "22px",
//                       border: "2px solid #dda0dd",
//                       display: "flex",
//                       flexDirection: "row",
//                       padding: "0.69rem",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <div
//                       style={{
//                         width: "1.38rem",
//                         height: "1.38rem",
//                         overflow: "hidden",
//                         flexShrink: "0",
//                         display: "flex",
//                         flexDirection: "row",
//                         padding: "0.23rem 0.04rem 0.23rem 0.04rem",
//                         boxSizing: "border-box",
//                         alignItems: "flex-start",
//                         justifyContent: "flex-start",
//                       }}
//                     >
//                       <img
//                         style={{
//                           position: "relative",
//                           width: "1.3rem",
//                           height: "0.92rem",
//                         }}
//                         alt=""
//                         src="/vector8.svg"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div
//           style={{
//             backgroundColor: "#800080",
//             borderTop: "1px solid #fff",
//             boxSizing: "border-box",
//             width: "120rem",
//             display: "flex",
//             flexDirection: "column",
//             padding: "1.06rem 0rem 1rem",
//             alignItems: "flex-start",
//             justifyContent: "flex-start",
//             maxWidth: "120rem",
//             minHeight: "3.13rem",
//             textAlign: "center",
//             fontSize: "1rem",
//           }}
//         >
//           <div
//             style={{
//               width: "100%",
//               position: "relative",
//               lineHeight: "1.63rem",
//               display: "inline-block",
//               maxWidth: "120rem",
//             }}
//           >
//             Copyright © 2023. All Rights Reserved. ThirdAI Corp.
//           </div>
//         </div>
//       </div>
//       <div
//         style={{
//           position: "absolute",
//           top: "0rem",
//           left: "0rem",
//           backgroundColor: "#800080",
//           width: "120rem",
//           display: "flex",
//           flexDirection: "row",
//           padding: "0rem 22.5rem",
//           boxSizing: "border-box",
//           alignItems: "flex-start",
//           justifyContent: "center",
//           fontSize: "1.13rem",
//         }}
//       >
//         <div
//           style={{
//             width: "75rem",
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "flex-start",
//             justifyContent: "flex-start",
//             maxWidth: "75rem",
//             minHeight: "5.63rem",
//           }}
//         >
//           <div
//             style={{
//               width: "13.64rem",
//               display: "flex",
//               flexDirection: "row",
//               flexWrap: "wrap",
//               padding: "0.31rem 0.19rem 0.31rem 0.19rem",
//               boxSizing: "border-box",
//               alignItems: "center",
//               justifyContent: "flex-start",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 padding: "0.98rem 0rem 0.98rem",
//                 boxSizing: "border-box",
//                 alignItems: "flex-start",
//                 justifyContent: "center",
//                 maxWidth: "13.25rem",
//               }}
//             >
//               <img
//                 style={{
//                   position: "relative",
//                   width: "13.25rem",
//                   height: "3.03rem",
//                   overflow: "hidden",
//                   flexShrink: "0",
//                 }}
//                 alt=""
//                 src="/thirdai-logosvg1.svg"
//               />
//             </div>
//           </div>
//           <div
//             style={{
//               width: "61.36rem",
//               display: "flex",
//               flexDirection: "row",
//               flexWrap: "wrap",
//               padding: "1.88rem 0rem 1.88rem 21.85rem",
//               boxSizing: "border-box",
//               alignItems: "center",
//               justifyContent: "flex-end",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 flexWrap: "wrap",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-end",
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "row",
//                   padding: "0rem 0.75rem 0rem 0rem",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "row",
//                     padding: "0.31rem 0rem",
//                     alignItems: "center",
//                     justifyContent: "flex-start",
//                     gap: "0.24rem",
//                   }}
//                 >
//                   <div
//                     style={{
//                       position: "relative",
//                       lineHeight: "1.25rem",
//                       textTransform: "uppercase",
//                       fontWeight: "500",
//                     }}
//                   >
//                     Technology
//                   </div>
//                   <div
//                     style={{
//                       display: "flex",
//                       flexDirection: "row",
//                       padding: "0.02rem 0rem 0.11rem",
//                       alignItems: "flex-start",
//                       justifyContent: "flex-start",
//                     }}
//                   >
//                     <div
//                       style={{
//                         width: "1.13rem",
//                         height: "1.13rem",
//                         overflow: "hidden",
//                         flexShrink: "0",
//                         display: "flex",
//                         flexDirection: "row",
//                         padding: "0.31rem 0.21rem 0.32rem 0rem",
//                         boxSizing: "border-box",
//                         alignItems: "flex-start",
//                         justifyContent: "flex-start",
//                       }}
//                     >
//                       <img
//                         style={{
//                           position: "relative",
//                           width: "0.92rem",
//                           height: "0.5rem",
//                         }}
//                         alt=""
//                         src="/vector9.svg"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "row",
//                   padding: "0rem 0.75rem",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "row",
//                     padding: "0.31rem 0rem",
//                     alignItems: "center",
//                     justifyContent: "flex-start",
//                     gap: "0.22rem",
//                   }}
//                 >
//                   <div
//                     style={{
//                       position: "relative",
//                       lineHeight: "1.25rem",
//                       textTransform: "uppercase",
//                       fontWeight: "500",
//                     }}
//                   >
//                     Solutions
//                   </div>
//                   <div
//                     style={{
//                       display: "flex",
//                       flexDirection: "row",
//                       padding: "0.02rem 0rem 0.11rem",
//                       alignItems: "flex-start",
//                       justifyContent: "flex-start",
//                     }}
//                   >
//                     <div
//                       style={{
//                         width: "1.13rem",
//                         height: "1.13rem",
//                         overflow: "hidden",
//                         flexShrink: "0",
//                         display: "flex",
//                         flexDirection: "row",
//                         padding: "0.31rem 0.21rem 0.32rem 0rem",
//                         boxSizing: "border-box",
//                         alignItems: "flex-start",
//                         justifyContent: "flex-start",
//                       }}
//                     >
//                       <img
//                         style={{
//                           position: "relative",
//                           width: "0.92rem",
//                           height: "0.5rem",
//                         }}
//                         alt=""
//                         src="/vector10.svg"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "row",
//                   padding: "0rem 0.75rem",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "row",
//                     padding: "0.31rem 0rem 0.31rem 0rem",
//                     alignItems: "center",
//                     justifyContent: "flex-start",
//                     gap: "0.2rem",
//                   }}
//                 >
//                   <div
//                     style={{
//                       position: "relative",
//                       lineHeight: "1.25rem",
//                       textTransform: "uppercase",
//                       fontWeight: "500",
//                     }}
//                   >
//                     Newsroom
//                   </div>
//                   <div
//                     style={{
//                       display: "flex",
//                       flexDirection: "row",
//                       padding: "0.02rem 0rem 0.11rem",
//                       alignItems: "flex-start",
//                       justifyContent: "flex-start",
//                     }}
//                   >
//                     <div
//                       style={{
//                         width: "1.13rem",
//                         height: "1.13rem",
//                         overflow: "hidden",
//                         flexShrink: "0",
//                         display: "flex",
//                         flexDirection: "row",
//                         padding: "0.31rem 0.21rem 0.32rem 0rem",
//                         boxSizing: "border-box",
//                         alignItems: "flex-start",
//                         justifyContent: "flex-start",
//                       }}
//                     >
//                       <img
//                         style={{
//                           position: "relative",
//                           width: "0.92rem",
//                           height: "0.5rem",
//                         }}
//                         alt=""
//                         src="/vector11.svg"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "row",
//                   padding: "0rem 0.75rem",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "row",
//                     padding: "0.31rem 0rem",
//                     alignItems: "center",
//                     justifyContent: "flex-start",
//                     gap: "0.23rem",
//                   }}
//                 >
//                   <div
//                     style={{
//                       position: "relative",
//                       lineHeight: "1.25rem",
//                       textTransform: "uppercase",
//                       fontWeight: "500",
//                     }}
//                   >
//                     Company
//                   </div>
//                   <div
//                     style={{
//                       display: "flex",
//                       flexDirection: "row",
//                       padding: "0.02rem 0rem 0.11rem",
//                       alignItems: "flex-start",
//                       justifyContent: "flex-start",
//                     }}
//                   >
//                     <div
//                       style={{
//                         width: "1.13rem",
//                         height: "1.13rem",
//                         overflow: "hidden",
//                         flexShrink: "0",
//                         display: "flex",
//                         flexDirection: "row",
//                         padding: "0.31rem 0.21rem 0.32rem 0rem",
//                         boxSizing: "border-box",
//                         alignItems: "flex-start",
//                         justifyContent: "flex-start",
//                       }}
//                     >
//                       <img
//                         style={{
//                           position: "relative",
//                           width: "0.92rem",
//                           height: "0.5rem",
//                         }}
//                         alt=""
//                         src="/vector12.svg"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "row",
//                   padding: "0.31rem 0rem 0.31rem 0.75rem",
//                   alignItems: "flex-start",
//                   justifyContent: "flex-start",
//                 }}
//               >
//                 <div
//                   style={{
//                     alignSelf: "stretch",
//                     position: "relative",
//                     lineHeight: "1.25rem",
//                     textTransform: "uppercase",
//                     fontWeight: "500",
//                     display: "flex",
//                     alignItems: "center",
//                   }}
//                 >
//                   Contact
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gg;
