import React, { Component } from 'react';
import Articles from './Articles';
import Article from './Article/Article'


import axios from 'axios';

class Articlepage extends Component {
  state = {
    posts: null,
    hasData: false,
    filter: '夢想'
  }


  componentDidMount() {
    axios.get('https://awiclass.monoame.com/api/command.php?type=get&name=post')
      .then(res => {
        // console.log(res.data);
        this.setState({
          posts: res.data,
          hasData: true
        })
      }).catch(err => {
        console.log(err);
      })
  }

  onChangeInput = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  render() {
    const { posts, hasData, filter } = this.state;
    let newPosts = null;
    // description, name_cht, title
    if (hasData) {
      newPosts = posts.filter((post) => {
        const tags = ['description', 'name_cht', 'title'];
        let flag = false;

        tags.forEach((tage)=>{
          if(post.title.indexOf(filter) !== -1 ){
            // return true
            // console.log(post);
            flag = true;
          }
        })
        // console.log(post);
        return flag;
      }).map((filterPost)=>{
        filterPost.description = filterPost.description.substr(0, 60);
        return filterPost
      });
    }


    console.log(newPosts);

    return (
      <div className='articlePage' >
        <div className='row'>
          <div className='col-12' >
            <br />
            <label htmlFor="">關鍵字</label>
            <input type="text" name="" id="" 
              onChange={this.onChangeInput} 
              value={filter}
            />
          </div>
        </div>
        <Articles>
          {
            hasData ? newPosts.map((el, i) => {
              return <Article key={i} {...el} />
            }) : null
          }
        </Articles>
      </div>
    );
  }
}

export default Articlepage;