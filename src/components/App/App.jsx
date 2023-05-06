import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "../Main/Main";
import Policy from "../Policy/Policy";

const App = () => {

return (
  <BrowserRouter>    
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="policy" element={<Policy />} />    
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
