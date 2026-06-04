import { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import "./ChatMessages.scss";

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <article className="chat-messages__container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessages) => {
        return (
          <ChatMessage
            message={chatMessages.message}
            sender={chatMessages.sender}
            isTyping={chatMessages.isTyping}
            key={chatMessages.id}
          />
        );
      })}
    </article>
  );
}

export default ChatMessages;
