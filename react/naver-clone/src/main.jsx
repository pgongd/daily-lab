import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/main.scss'
import App from './App.jsx' // 👈 조금 이따가 만들 도화지 파일입니다.

// html에 있던 id="root"를 찾아서, 그 안에 리액트 시스템을 주입하는 핵심 코드입니다.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)