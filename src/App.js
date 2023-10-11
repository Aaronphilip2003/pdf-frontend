// App.js
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ChatsPage from "./ChatsPage";
import Vocab from "./components/Vocab";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <nav>
          <Link to="/chats">Go to Chats</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chats" element={<ChatsPage />} />
          <Route path="/vocab" element={<Vocab />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
