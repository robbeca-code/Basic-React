import React from 'react';
import './App.css';
import { useState } from 'react';
import event from './assets/event1.png';

function App() {
  let [blog, setBlog] = useState([
    {title: '갈비 맛집', date: '2021-4-12'},
    {title: '우동 맛집', date: '2021-6-7'},
    {title: '닭갈비 맛집', date: '2021-6-18'}
  ]);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [num, setNum] = useState(0);
  let [input, setInput] = useState('');
  let date = new Date();
  let inputDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  
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
                <li key={i}>
                  <article className="list">
                    <header className="list-header">
                      <h3 onClick={
                        () => {
                          setNum(i);

                          if(modal) {
                            setModal(false);
                          } else {
                            setModal(true);
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
                    
                    <span>{list.date}</span>

                    <button type="button" className="btn remove-btn" onClick={() => {
                      let copyBlog = [...blog];
                      copyBlog.splice(i, 1);
                      setBlog(copyBlog);
                    }}>
                      삭제
                    </button>
                  </article>
                </li>
              );
            }
          )
        }
      </ol>

      <input type="text" className="search-title" value={input} onChange={(e) => {
        setInput(e.target.value);

        let copyList = [...blog];
        copyList.push({title: input, date: inputDate});
        setBlog(copyList);
      }} />

      {
        modal ? <Modal num={num} blog={blog}/> : null
      }

      <div className="btn-container">
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
      
    </div>
  );
}

function Modal(props) {
  return(
      <aside className="modal">
        <h3>{props.blog[props.num].title}</h3>
        <span>{props.blog[props.num].date}</span>
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
