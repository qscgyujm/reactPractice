import React, { Component } from 'react';

const ChildA = ({ name }) => (
  <h1 style={{
    backgroundColor: '#ffffcc'
  }} >
    {`Hello ${name}`}
  </h1>
);

const ChildB = ({ name }) => (
  <h1 style={{
    backgroundColor: '#ffffcc'
  }} >
    bbbb
  </h1>
);


const Something = ({ name }) => (
  <h1 style={{
    backgroundColor: '#ccffcc',
  }}
  >Something</h1>
);

// const Parent = (props) => (
//   <div style={{
//     backgroundColor: '#ffcccc',
//   }}>
//     <Something />
//     <div>
//       {props.children}
//     </div>
//     <Something />
//   </div>
// );

class Parent extends Component {
  render() {
    const children = this.props.children;
    console.log(children);
    return (
      <React.Fragment>
        <Something />
        <div>
          {/* {children} */}
          {
            React.Children.map(children, (child, i) => {
              // if ( i < 1 ) return;
              console.log(child);
              return child;
            })
          }
        </div>
        <Something />
      </React.Fragment>
    );
  }
}


class Children extends Component {
  state = {
    aa: ['a', 'b', 'c']
  }
  render() {
    return (
      <Parent>
        <ChildA name={this.state.aa} />
        <ChildB name={this.state.aa} />
      </Parent>
    );
  }
}




export default Children;