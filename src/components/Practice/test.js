import React, { Component } from 'react';

class test extends Component {

  myRef = React.createRef();

  componentDidMount(){
    this.refs.myText.focus(); 
  }

  focus = () => {
    // focus();
    console.log(this.textInput);
  }

  focus2 =() =>{
    console.log(this.myRef.current);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={input => this.textInput = input} 
        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focus}
        />
        <input type="text" ref="myText" />
        <input type="button" 
          ref={this.myRef}
          value="Focus2 the text input"
          onClick={this.focus2}  
        />

      </div>

    );
  }
}

export default test;