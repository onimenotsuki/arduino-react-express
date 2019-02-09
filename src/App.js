import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { isPower: false };
  }

  togglePower() {
    const action = !this.state.isPower ? 'on' : 'off';

    fetch(`http://localhost:8080/led?power=${action}`)
      .then(_res => {
        console.log(_res);

        this.setState(prevState => ({
          isPower: !prevState.isPower,
        }));
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Aquí editaremos el código
          </p>
        </header>
      </div>
    );
  }
}

export default App;
