import React from 'react';
import './App.css';
import './assets/css/Reset.css';
import './assets/css/global.css'; 
import Page_1 from './pages/Page_1.js';
import Page_2 from './pages/Page_2.js';
 
function App() {
  return (
    <div className="App-cover"> 
     {/* <Page_1 /> */}
     <Page_2 />

    </div> 
  );
}

export default App;
