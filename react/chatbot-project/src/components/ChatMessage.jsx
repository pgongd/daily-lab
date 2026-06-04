import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/user.png";
import "./ChatMessage.scss";

export function ChatMessage({ message, sender, isTyping }) {
  return (
    <div
      className={`message ${
        sender === "user" ? "chat-message--user" : "chat-message--robot"
      }`}
    >
      {sender === "robot" && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      <div className={`chat-message__bubble ${isTyping ? "typing" : ""}`}>
        {isTyping ? (
          <div className="typing-indicator">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        ) : (
          message
        )}
      </div>
      {sender === "user" && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  );
}
