import './App.css';

import React, {Component} from 'react'


// import App1UseCallBack from './components/App1UseCallBack'
// import App2UseMemo from './components2/App2UseMemo'

import App3UseRef from './components3/App3UseRef';

class App extends Component {

  render() {
    return (

      <div className="">
          {/* <App1UseCallBack/> */}
          {/* <App2UseMemo/> */}

          <App3UseRef/>
      </div>
    );  
  }
}

export default App;
