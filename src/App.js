// App.js
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ChatsPage from "./ChatsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/chats">Go to Chats</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chats" element={<ChatsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
