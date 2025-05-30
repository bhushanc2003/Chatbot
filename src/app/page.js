// src/App.jsx
import React from "react";
import ChatBox from "./components/ChatBox";
import { Analytics } from "@vercel/analytics/next"

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <ChatBox />
    </div>
  );
};

export default App;
