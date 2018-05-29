import React, { Component } from 'react';

class Articles extends Component {
  render() {
    const children = this.props.children;
    return (
      <div className='articles row' >
        {
          React.Children.map(children, (child, i) => {
            // if ( i < 1 ) return;
            console.log(children);
            console.log(child);
            return child;
          })
        }
      </div>
    );
  }
}

export default Articles;