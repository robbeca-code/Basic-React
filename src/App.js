import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  let [title, setTitle] = useState(['갈비 맛집', '우동 맛집', '닭갈비 맛집']);
  let [firstLike, setFirstLike] = useState(0);
  let [secondLike, setSecondLike] = useState(0);
  let [thirdLike, setThirdLike] = useState(0);
  return (
    <div className="App">
      <nav className="orange-nav">
        <h1>맛집 블로그</h1>
      </nav>
      <ol className="blog-list">
        <li>
          <div className="list-header">
            <h3>{title[0]}</h3>
            <button type="button" className="btn like-btn" onClick={()=>{setFirstLike(firstLike + 1)}}>
            👍
            </button>
            <span className="like-count">
              {firstLike}
            </span>
          </div>
          
          <p>생성 날짜</p>
        </li>
        <li>
          <div className='list-header'>
            <h3>{title[1]}</h3>
            <button type="button" className="btn like-btn" onClick={()=>{setSecondLike(secondLike + 1)}}>
            👍
            </button>
            <span className="like-count">
              {secondLike}
            </span>
          </div>
          <p>생성 날짜</p>
        </li>
        <li>
          <div className='list-header'>
            <h3>{title[2]}</h3>
            <button type="button" className="btn like-btn" onClick={()=>{setThirdLike(thirdLike + 1)}}>
            👍
            </button>
            <span className="like-count">
              {thirdLike}
            </span>
          </div>
          <p>생성 날짜</p>
        </li>
      </ol>

      <button type="button" className="btn random-btn" onClick={()=>{
          let copyTitle = [...title];
          copyTitle[0] = '곱창 맛집';
          setTitle(copyTitle);
        }}>랜덤추천</button>
    </div>
  );
}

export default App;
