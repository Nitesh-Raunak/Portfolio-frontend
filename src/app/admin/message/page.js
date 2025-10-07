"use client";

import React, { useEffect, useState } from "react";





const AdminMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/contact");
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="pt-30 p-6 bg-gray-900 text-white min-h-screen">
  <h2 className="text-3xl font-bold mb-6">Messages Dashboard</h2>
  <div className="space-y-4">
    {messages.length > 0 ? (
      messages.map((msg) => (
        <div
          key={msg._id}
          className="p-4 bg-gray-800 rounded-lg shadow-md"
        >
          <p><span className="font-semibold">Name:</span> {msg.name}</p>
          <p><span className="font-semibold">Email:</span> {msg.email}</p>
          <p><span className="font-semibold">Message:</span> {msg.message}</p>
          <p className="text-sm text-gray-400">
            {new Date(msg.createdAt).toLocaleString()}
          </p>
        </div>
      ))
    ) : (
      <p>No messages yet.</p>
    )}
  </div>
</div>

  );
};

export default AdminMessages;
