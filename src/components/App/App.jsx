import React from "react";
import { Routes, Route } from 'react-router-dom';
import Main from "../Main/Main";
import Policy from "../Policy/Policy";

const App = () => {

return (   
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="policy" element={<Policy />} />    
      </Routes>    
  );
}

export default App;
