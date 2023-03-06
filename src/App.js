import './App.css';

import React, {Component} from 'react'

// import App1UseCallBack from './components/App1UseCallBack'
import App2UseMemo from './components2/App2UseMemo'

class App extends Component {

  render() {
    return (

      <div className="App">
          {/* <App1UseCallBack/> */}
          <App2UseMemo/>
      </div>
    );  
  }
}

export default App;
