import React from 'react';
import './App.css';
import { useState } from 'react';
import event from './assets/event1.png';

function App() {
  let [blog, setBlog] = useState([
    {title: '갈비 맛집', date: '2021-04-12'},
    {title: '우동 맛집', date: '2021-06-07'},
    {title: '닭갈비 맛집', date: '2021-06-18'}
  ]);
  let [firstLike, setFirstLike] = useState(0);
  let [secondLike, setSecondLike] = useState(0);
  let [thirdLike, setThirdLike] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <nav className="orange-nav">
        <h1>맛집 블로그</h1>
      </nav>
      <Banner/>
      <ol className="blog-list">
        <li>
          <div className="list-header">
            <h3>{blog[0].title}</h3>
            <button type="button" className="btn like-btn" onClick={() => {setFirstLike(firstLike + 1)}}>
            👍
            </button>
            <span className="like-count">
              {firstLike}
            </span>
          </div>
          
          <p>{blog[0].date}</p>
        </li>
        <li>
          <div className='list-header'>
            <h3>{blog[1].title}</h3>
            <button type="button" className="btn like-btn" onClick={() => {setSecondLike(secondLike + 1)}}>
            👍
            </button>
            <span className="like-count">
              {secondLike}
            </span>
          </div>
          <p>{blog[1].date}</p>
        </li>
        <li>
          <div className='list-header'>
            <h3 onClick={() => {
                if(modal){
                  setModal(false);
                } else {
                  setModal(true);
                }
              }}>{blog[2].title}</h3>
            <button type="button" className="btn like-btn" onClick={() => {setThirdLike(thirdLike + 1)}}>
            👍
            </button>
            <span className="like-count">
              {thirdLike}
            </span>
          </div>
          <p>{blog[2].date}</p>
        </li>
      </ol>
      
      {
        modal === true ? <Modal/> : null
      }

      <button type="button" className="btn random-btn" onClick={() => {
          let copyBlog = [...blog];
          copyBlog[0].title = '만두국 맛집';
          setBlog(copyBlog);
        }}>
        랜덤추천
      </button>

      <button type="button" className="btn sort-btn" onClick={() => {
          let copyBlog = [...blog];
          copyBlog.sort((item1, item2) => {
            return item1.title > item2.title ? 1 : -1
          });
          setBlog(copyBlog);
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
