import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "../Main/Main";
import Policy from "../Policy/Policy";
import NotFound from "../NotFound/NotFound";

const App = () => {

return (
  <BrowserRouter>
    <div className="App">      
      <Routes>
      <Route path="/" element={<Main />} />      
      <Route path="policy" element={<Policy />} />
      <Route path="/*" element={<NotFound />} />
      </Routes>     
    </div>
    </BrowserRouter>
  );
}

export default App;
