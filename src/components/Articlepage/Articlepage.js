import React, { Component } from 'react';
import Articles from './Articles';
import Article from './Article/Article'


import axios from 'axios';

class Articlepage extends Component {
  state = {
    posts: null,
    hasData: false,
    filter: ''
  }


  componentDidMount() {
    axios.get('https://awiclass.monoame.com/api/command.php?type=get&name=post')
      .then(res => {
        console.log(res.data);
        this.setState({
          posts: res.data,
          hasData: true
        })
      }).catch(err => {
        console.log(err);
      })
  }

  render() {
    const { posts, hasData } = this.state;
    return (
      <div className='articlePage' >
        <div className='row'>
          <div className='col-12' >
            <br/>
            <label htmlFor="">關鍵字</label>
            <input type="text" name="" id=""/>
          </div>
        </div>
        <Articles>
          {
            hasData ? posts.map((el, i) => {
              return <Article key={i} {...el} />
            }) : null
          }
        </Articles>
      </div>
    );
  }
}

export default Articlepage;