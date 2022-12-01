import React from 'react';
import './App.css';
import { useState } from 'react';
import event from './assets/event1.png';

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
      <Banner/>
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
      <Modal/>

      <button type="button" className="btn random-btn" onClick={()=>{
          let copyTitle = [...title];
          copyTitle[0] = '만두국 맛집';
          setTitle(copyTitle);
        }}>
        랜덤추천
      </button>

      <button type="button" className="btn sort-btn" onClick={()=>{
          let copyTitle = [...title]
          copyTitle.sort();
          setTitle(copyTitle);
        }}>
        오름차순 정렬
      </button>
    </div>
  );
}

function Modal() {
  return(
      <aside className="modal">
        <h3>제목</h3>
        <span>날짜</span>
        <p>상세내용</p>
      </aside>
  );
}

function Banner() {
  return(
    <aside className="banner">
      <img src={event} alt='Banner'/>
    </aside>
  );
}
export default App;
