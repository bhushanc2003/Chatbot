'use client';
import React, { useState } from "react";
import {getHiteshResponse } from "../util/genAI";

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
    <div className="p-4 w-full max-w-2xl mx-auto">
      <div className="space-y-3 min-h-[400px] border rounded-md p-4 bg-black shadow-md">
        {chats.map((chat, index) => (
          <div key={index} className="flex flex-col">
            <strong className="text-blue-600">{chat.role=='model'?'Hitesh Sir':'Me'}:</strong>
            <p className="whitespace-pre-wrap">{chat.parts[0].text}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-2 ">
        <input
          type="text"
          className="border rounded px-3 py-2 w-full bg-black"
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
