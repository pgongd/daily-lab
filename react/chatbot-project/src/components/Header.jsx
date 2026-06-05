import "./Header.scss";
export function Header() {
  return (
    <header className="chat-header">
      <button type="button" className="icon-btn" aria-label="뒤로가기">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
      </button>

      <div className="chat-header__title">
        <span className="chat-header__status"></span>
        <h1 className="chat-header__title">상담하기</h1>
      </div>

      <button type="button" className="icon-btn" aria-label="추가">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      </button>
    </header>
  );
}
