import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Matt', age: 31 },
      { name: '', age: 28 },
      { name: 'Jeff', age: 32 }
    ],
    otherPersons: 'some people'
  };

  switchNameHandler = () => {
    console.log('Was Clicked');
    // Don't Do This: this.state.persons[0].name 'Maximillian';
    this.setState( {
      persons: [
      { name: 'Matthew', age: 31 },
      { name: 'Christopher', age: 28 },
      { name: 'Jeffrey', age: 32 }

      ]
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>Never Stop Coding</code>
          </p>
          <button onClick={this.switchNameHandler}>Click to Mutate</button>
          
          <Person
             name={this.state.persons[0].name} 
             age={this.state.persons[0].age}
             click={this.switchNameHandler} >Hobbies: Coding</Person>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} />
            
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />
          
          <h1>Testing</h1>
        </header>
      </div>
    );


  }
}

export default App;
