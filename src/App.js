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
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState([false, false, false]);

  return (
    <div className="App">
      <nav className="orange-nav">
        <h1>맛집 블로그</h1>
      </nav>
      <Banner/>
      <ol className="blog-list">
        {
          blog.map((list, i) => {
              return(
                <li>
                  <article>
                    <header className="list-header">
                      <h3 onClick={
                        () => {
                          if(modal[i]) {
                            let copyModal = [...modal];
                            copyModal[i] = false;
                            setModal(copyModal);
                          } else {
                            let copyModal = [...modal];
                            copyModal[i] = true;
                            setModal(copyModal);
                          }
                        }
                      }>{list.title}</h3>
                      <button type="button" className="btn like-btn" onClick={() => {
                          let copyLike = [...like];
                          copyLike[i] = like[i] + 1;
                          setLike(copyLike);
                        }}>
                      👍
                      </button>
                      <span className="like-count">
                        {like[i]}
                      </span>
                    </header>
                    
                    <p>{list.date}</p>
                  </article>
                  
                  {
                    modal[i] === true ? <Modal setBlog={setBlog} blog={blog} list={list}/> : null
                  }
                </li>
              );
            }
          )
        }
      </ol>

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

function Modal(props) {
  return(
      <aside className="modal">
        <h3>{props.list.title}</h3>
        <span>{props.list.date}</span>
        <p>상세내용</p>
        <button type="button" className="btn change-btn" onClick={() => {
          let copyBlog = props.blog;
          copyBlog[0].title = "녹두전 맛집";
          props.setBlog(copyBlog);
        }}>
          제목수정
        </button>
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
