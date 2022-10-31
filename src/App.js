import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/Reset.css';
import './assets/css/global.css';
import Page_1 from './pages/Page_1.js';
import Page_2 from './pages/Page_2.js';
import Page_3 from './pages/Page_3.js';
import Page_4 from './pages/Page_4.js';
import Page_5 from './pages/Page_5.js';
import Page_6 from './pages/Page_6.js';
import Page_7 from './pages/Page_7.js';
import Page_8 from './pages/Page_8.js';
import Page_9 from './pages/Page_9.js';
import Page_10 from './pages/Page_10.js';
import Page_101 from './pages/Page_101.js';
import Page_102 from './pages/Page_102.js';
import Page_103 from './pages/Page_103.js';
import Page_11 from './pages/Page_11.js';
import Page_12 from './pages/Page_12.js';
import Page_104 from './pages/Page_104.js';

// import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={<Page_1 />} />
        <Route path="/Page_2"
          element={<Page_2 />} />
        <Route path="/Page_3"
          element={<Page_3 />} />
        <Route path="/Page_4"
          element={<Page_4 />} />
        <Route path="/Page_5"
          element={<Page_5 />} />
        <Route path="/Page_6"
          element={<Page_6 />} />
        <Route path="/Page_7"
          element={<Page_7 />} />
        <Route path="/Page_8"
          element={<Page_8 />} />
        <Route path="/Page_9"
          element={<Page_9 />} />
        <Route path="/Page_10"
          element={<Page_10 />} />
        <Route path="/Page_11"
          element={<Page_11 />} />
        <Route path="/Page_11"
          element={<Page_11 />} />
        <Route path="/Page_12"
          element={<Page_12 />} />
        <Route path="/Page_101"
          element={<Page_101 />} />
        <Route path="/Page_102"
          element={<Page_102 />} />
        <Route path="/Page_103"
          element={<Page_103 />} />
        <Route path="/Page_104"
          element={<Page_104 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
