import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <hr/>
          <li>
            <Link to="/Booking">飯店</Link>
          </li>
          <div>
            將Vue 轉換成 React 版本
            <br/>
            <a href="https://www.facebook.com/bosscodingplease/">參考來源</a>
          </div>
          <hr/>
          {/* <li>
            <Link to="/Weather">天氣</Link>
          </li> */}
          <li>
            <Link to="/Carousel">輪播</Link>
          </li>
          <div>
            將Vue 轉換成 React 版本
            <br/>
            <a href="https://www.facebook.com/bosscodingplease/">參考來源</a>
          </div>
          <hr/>
          <li>
            <Link to="/Colorpage">色票</Link>
          </li>
          <div>
            將Vue 轉換成 React 版本
            <br/>
            <a href="https://www.facebook.com/bosscodingplease/">參考來源</a>
          </div>
          <hr/>
          <li>
            <Link to="/Articlepage">查詢文章</Link>
          </li>
          <div>
            將Vue 轉換成 React 版本
            <br/>
            <a href="https://www.facebook.com/bosscodingplease/">參考來源</a>
          </div>
          <hr/>
          <li>
            <Link to="/TestRef">Ref-Practice</Link>
          </li>
          <div>
            遇過的面試考題
            <a href="https://reactjs.org/docs/refs-and-the-dom.html">參考來源</a>
          </div>
          <li>
            <Link to="/Children">Children-Practice</Link>
          </li>
          <li>
            <Link to="/Lifecycle">練習React Lifecycle 舊版</Link>
          </li>
          {/* <li>
            <Link to="/Lifecycle">練習React Lifecycle 舊版</Link>
          </li> */}
          
        </ul>
      </div>
    );
  }
}

export default Home;