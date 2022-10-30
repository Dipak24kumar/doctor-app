import React from 'react';
import './App.css';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/Reset.css';
import './assets/css/global.css';
// import Page_1 from './pages/Page_1.js';
// import Page_2 from './pages/Page_2.js';
import Page_11 from './pages/Page_11.js';
// import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return ( 
    <BrowserRouter> 
      {/* <Routes> */}
        {/* <Route path="/" element={<Page_1 />}>
         <Route
            path="/home"
            element={<Page_1 />}
          /> 
          <Route path="/Page_2" element={<Page_2 />} /> 
        </Route>  */}
        {/* <Route path="/Page_12" element={<Page_12 />} /> 
      </Routes>  */}
      <Page_11/>
    </BrowserRouter> 
  );
}

export default App;
