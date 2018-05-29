import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
  constructor(props) {
    super(props)
    console.log('[Person.js] Inside Constructor:', props);
  }

  componentWillMount() {
    console.log('[Person.js] componentWillMount()');
  }

  // static getDerivedStateFromProps(props, state){
  //   // console.log(object);
  // }

  componentDidMount() {
    console.log('[Person.js] componentDidMount()');
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATA Person.js] componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATA Person.js] shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATA Person.js] componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATA Person.js] componentDidUpdate ');
  }

  render() {
    console.log('[Person.js] render()');
    return (
      <div className='Person'>
        <p onClick={this.props.click}>I'm a {this.props.name} I'm {this.props.age} year old!</p>
        <p>{this.props.children}</p>
        <input
          ref={(inp) => { this.inputElement = inp }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name} />
      </div>
    );
  }
}

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside Constructor:', props);
  }

  componentWillMount() {
    console.log('[Persons.js] componentWillMount()');
  }

  componentDidMount() {
    console.log('[Persons.js] componentDidMount()');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATA Persons.js] componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATA Persons.js] shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATA Persons.js] componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATA Persons.js] componentDidUpdate ');
  }

  render() {
    console.log('[Persons.js] Insider render()');
    return this.props.persons.map((person, i) => {
      return <Person
        key={i}
        click={() => this.props.clicked(i)}
        position={i}
        name={person.name}
        age={person.id}
        changed={(event) => this.props.changed(event, i)}
      />
    });
  }


}


class Lifecycles extends Component {
  constructor(props) {
    super(props);
    console.log('[Lifecycles.js] Inside Constructor:', props);

    this.state = {
      persons: [
        { name: 'japan', age: 20 },
        { name: 'relax', age: 30 },
        { name: 'taiwan', age: 10 },
      ],
      showPerson: false,
    }
  }

  // componentWillMount() {
  //   console.log('[Lifecycles.js] componentWillMount()');
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[Lifecycles.js] static getDerivedStateFromProps', nextProps, prevState);
    console.log('使用 getDerivedStateFromProps 就不能使用 componentWillMount, componentWillReceiveProps, componentWillUpdate');
    return {
      ...prevState,
      ...nextProps
    };
  }

  componentDidMount() {
    console.log('[Lifecycles.js] componentDidMount()');
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log('[UPDATA Lifecycles.js] componentWillReceiveProps', nextProps);
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATA Lifecycles.js] shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Are we adding new items to the list?
    // Capture the scroll position so we can adjust scroll later.
    // if (prevProps.list.length < this.props.list.length) {
    //   const list = this.listRef.current;
    //   return list.scrollHeight - list.scrollTop;
    // }
    // return null;
    console.log('[UPDATA Lifecycles.js] getSnapshotBeforeUpdate', prevProps, prevState);
    return null;
  }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log('[UPDATA Lifecycles.js] componentWillUpdate', nextProps, nextState);
  // }

  componentDidUpdate() {
    console.log('[UPDATA Lifecycles.js] componentDidUpdate ');
  }

  deleteEvent = (i) => {
    // console.log('delete', i);
    // let persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(i, 1);

    this.setState({ persons })
  }

  changeEvent = (event, i) => {
    const person = this.state.persons[i];
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[i] = person;

    this.setState({ persons })
  }


  render() {
    console.log('[Lifecycles.js] Insider render()');
    return (
      <div>
        <Persons
          persons={this.state.persons}
          clicked={this.deleteEvent}
          changed={this.changeEvent}
        />
      </div>
    );
  }
}

export default Lifecycles;