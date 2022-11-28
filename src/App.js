import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  let [title, setTitle] = useState(['갈비 맛집', '우동 맛집', '닭갈비 맛집']);
  return (
    <div className="App">
      <nav className="black-nav">
        <h1>맛집 블로그</h1>
      </nav>
      <ol className="blog-list">
        <li>
          <h3>{title[0]}</h3>
          <p>생성 날짜</p>
        </li>
        <li>
          <h3>{title[1]}</h3>
          <p>생성 날짜</p>
        </li>
        <li>
          <h3>{title[2]}</h3>
          <p>생성 날짜</p>
        </li>
      </ol>
    </div>
  );
}

export default App;
