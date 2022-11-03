import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import io from "socket.io-client";
import "./App.css";
import Content from "./components/chat/Content";
import Footer from "./layout/chat/Footer";
import Header from "./layout/chat/Header";
const socket = io("http://localhost:4000");

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isConnected, setIsConnected] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    socket.on("connection", () => {
      setIsConnected(true);
    });
    socket.on("Server-sent-data", (data) => {
      setMessage(data);
    });
    if (!name) {
      setName(prompt("name"));
    }
  }, []);
  const onSubmit = (value) => {
    socket.emit("Client-sent-data", name, value.message);
    reset();
  };

  const onKeyPressed = () => {
    console.log("is typing");
  };

  return (
    <div className="comtainer">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
