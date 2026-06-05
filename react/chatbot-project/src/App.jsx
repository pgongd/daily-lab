import { useState } from "react";
import { Header } from "./components/Header";
import { ChatInput } from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      id: crypto.randomUUID(),
      message: "안녕하세요.  AI 상담 도우미입니다.",
      sender: "robot",
    },
    {
      id: crypto.randomUUID(),
      sender: "user",
      message: "회원가입은 어떻게 하나요?",
    },
    {
      id: crypto.randomUUID(),
      sender: "robot",
      isTyping: true,
    },
  ]);
  return (
    <div className="wrap">
      <Header />
      <main className="chat-content">
        <ChatMessages chatMessages={chatMessages} />
        <ChatInput
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
      </main>
    </div>
  );
}

export default App;
