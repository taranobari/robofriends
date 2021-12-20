import logo from './logo.svg';
import './App.css';
import react from 'react';

class App extends react.Component {
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="app-logo" alt="logo"/>
          <h1 className="App-title">welcome to React</h1>
          </header>
          <p className="App-intro">to get strated, edit<code>src/App.js</code>and save it to relod</p>
      </div>
    )
  }
  
  
}

export default App;
