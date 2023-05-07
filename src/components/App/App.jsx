import React, { useState } from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import FirstScreen from '../FirstScreen/FirstScreen';
import Preferences from '../Preferences/Preferences';
import About from '../About/About';
import Tocall from '../Tocall/Tocall';
import Quest from '../Quest/Quest';
import CallToAction from '../CallToAction/CallToAction';
import Footer from '../Footer/Footer';
import PopupWithForm from "../PopupWithForm/PopupWithForm";

const App = () => {
  const [isPopupWithFormOpen, setIsPopupWithFormOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  };

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
  <>
      <Header onSendClick={handlePopupClick} onShowMenu={toggleMenu} />
      <Menu isOpen={isMenuOpen} onClose={toggleMenu} onMenuClick={handlePopupClick}/>
      <FirstScreen onUpClick={handlePopupClick}/>         
      <About />
      <Preferences />
      <Tocall/> 
      <Quest />
      <CallToAction/>
      <Footer/> 
      <PopupWithForm isOpen={isPopupWithFormOpen} onClose={closeAllPopups} onSubmit={handleSend} />        
</>  
        
  );
}

export default App;
