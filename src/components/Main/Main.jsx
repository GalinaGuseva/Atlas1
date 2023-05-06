import React from 'react';
import Header from "../Header/Header";
import FirstScreen from '../FirstScreen/FirstScreen';
import Preferences from '../Preferences/Preferences';
import About from '../About/About';
import Tocall from '../Tocall/Tocall';
import Quest from '../Quest/Quest';
import CallToAction from '../CallToAction/CallToAction';
import Footer from '../Footer/Footer';
import PopupWithForm from "../PopupWithForm/PopupWithForm";

const Main = () => {
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
    <> 
      <Header onSendClick={handlePopupClick}/>
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

export default Main;
