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
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  };

  function handlePopupClick(e) {
    setIsPopupWithFormOpen(true);
  } 

  function closeAllPopups() {  
    setIsPopupWithFormOpen(false);        
  } 
  
  function handleSend(values) {
    console.log(values);
    setSuccess('Всё зашибись!)');
        setTimeout(() => setSuccess(''), 2000);
        setError('Или нет');
        setTimeout(() => setError(''), 2000);
  }; 

return (
  <>
      <Header onSendClick={handlePopupClick} onShowMenu={toggleMenu} />
      <Menu isOpen={isMenuOpen} onClose={toggleMenu} onMenuClick={handlePopupClick}/>
      <FirstScreen onUpClick={handlePopupClick}/>         
      <About />
      <Preferences />
      <Tocall onSubmit={handleSend}/> 
      <Quest />
      <CallToAction onSubmit={handleSend}/>
      <Footer/> 
      <PopupWithForm 
            isOpen={isPopupWithFormOpen} 
            onClose={closeAllPopups} 
            onSubmit={handleSend} 
            setError={setError}
            error={error}
            success={success}
            />        
</>  
        
  );
}

export default App;
