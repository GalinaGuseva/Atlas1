import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Policy from "../Policy/Policy";
import NotFound from "../NotFound/NotFound";
import PopupWithForm from "../PopupWithForm/PopupWithForm";


function App() {
 
  const [isPopupWithFormOpen, setIsPopupWithFormOpen] = React.useState(false);

function handlePopupClick(e) {
  setIsPopupWithFormOpen(true);
} 

function closeAllPopups() {  
  setIsPopupWithFormOpen(false);        
} 

function handleSend({userName, job, email, phone}) {
  console.log(userName, job, email, phone);
};

return (
    <div className="App">
      <Header onSendClick={handlePopupClick}/>
      <Routes>
      <Route exact path="/" element={<Main onUpClick={handlePopupClick}/>} />      
      <Route path="/policy" element={<Policy />} />
      <Route path="/*" element={<NotFound />} />
      </Routes>    
      <PopupWithForm isOpen={isPopupWithFormOpen} onClose={closeAllPopups} onSubmit={handleSend} />
    </div>
  );
}

export default App;
