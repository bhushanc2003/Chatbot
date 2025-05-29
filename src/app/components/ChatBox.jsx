'use client';
import React, { useState } from "react";
import {getHiteshResponse } from "../util/genAI";
import Chatbubble from "./Chatbubble";

const ChatBox = () => {
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState("");

 const handleSend = async () => {
  if (!message.trim()) return;

  const userMsg = { role: "user", parts: [{ text: message }] };
  const updatedChats = [...chats, userMsg]; 

  setChats(updatedChats);
  setMessage("");

  try {
    const aiMsg = await getHiteshResponse(updatedChats);
    setChats((prev) => [...prev, aiMsg]);
  } catch (err) {
    console.error("Error fetching AI response:", err);
  }
};

 return (
  <div className="p-4 w-full max-w-4xl mx-auto">
    <div className="min-h-[600px] max-h-[400px] overflow-y-auto space-y-3 rounded-md p-4 bg-black shadow-md">
      {chats.map((chat, index) => (
        <div key={index} className="flex flex-col">
          <Chatbubble role={chat.role} text={chat.parts[0].text} />
        </div>
      ))}
    </div>

    <div className="mt-4 flex gap-2 ">
      <input
        type="text"
        className="border rounded px-3 py-2 w-full bg-black whitespace-pre-wrap text-white"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  </div>
);
};

export default ChatBox;
