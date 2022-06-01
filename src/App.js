import './App.css';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
import Home from './page/Index';
import Tintuc from './page/Tintuc';

import ReactDOM from 'react-dom/client';
function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/tintuc" element={<Tintuc />} /> 
        </Routes>
      </BrowserRouter>


    </div>

  );
}

export default App;
