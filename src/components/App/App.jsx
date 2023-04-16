import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Quest from "../Quest/Quest";
import Tocall from "../Tocall/Tocall";
import Preferences from "../Preferences/Preferences";
import CallToAction from "../CallToAction/CallToAction";
import Footer from "../Footer/Footer";
import AccordionPopup from "../AccordionPopup/AccordionPopup";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function App() {
  const [isAccordionPopupOpen, setIsAccordionPopupOpen] = React.useState(false);
  const [isPopupWithFormOpen, setIsPopupWithFormOpen] = React.useState(false);

function handleAccordClick(e) {
  setIsAccordionPopupOpen(true);
}  

function handlePopupClick(e) {
  setIsPopupWithFormOpen(true);
} 

function closeAllPopups() {
  setIsAccordionPopupOpen(false);
  setIsPopupWithFormOpen(false);        
} 

function handleSend({userName, job, email, phone}) {
  console.log(userName, job, email, phone);
};

return (
    <div className="App">
      <Header onSendClick={handlePopupClick}/>
      <Main />
      <About />
      <Preferences />
      <Tocall onAccor={handleAccordClick}/> 
      <Quest />
      <CallToAction onAcc={handleAccordClick}/>
      <Footer  onAccord={handleAccordClick}/>
      <AccordionPopup isOpen={isAccordionPopupOpen} onClose={closeAllPopups} />
      <PopupWithForm isOpen={isPopupWithFormOpen} onClose={closeAllPopups} onSubmit={handleSend} />
    </div>
  );
}

export default App;
