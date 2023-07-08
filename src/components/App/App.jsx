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
  const [isPopupWithFormOpen, setIsPopupWithFormOpen] = useState(false),
  [isSending, setSending] = useState(false),
  [success, setSuccess] = useState(false),
  [error, setError] = useState(false),
  [isMenuOpen, setIsMenuOpen] = useState(false),
  token = process.env.REACT_APP_TOKEN,
  chat_id = process.env.REACT_APP_CHAT,  
  URL = `https://api.telegram.org/bot${token}/sendMessage`; 

  function send(url, data) {
    let text = JSON.stringify(data)
    return fetch(url, {
      method: "POST",      
      headers: {      
        "Content-Type": "application/json",
      },         
      body: JSON.stringify({ chat_id, text })     
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(`Ошибка ${res.status}`));
    });
  }  
  
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  };

  function handlePopupClick(e) {
    setIsPopupWithFormOpen(true);
  } 

  function closeAllPopups() {  
    setIsPopupWithFormOpen(false);        
  } 

  function handleSend(data) {
    setSending("Идёт отправка данных");    
    send(URL, data)
    .then((res) => {
      console.log(res);    
      setSending(false);
      setSuccess("Ваша заявка успешно отправлена!");
      setTimeout(() => setSuccess(false), 5000)
    })   
    .catch(err => {      
      console.log(err);
      setSending(false);
      setError("Произошла ошибка, повторите попытку позже или позвоните нам")     
    })
    .finally(() => {       
      setTimeout(() => {       
        setError(false)
      }, 5000)
    })
   
}

return (
  <>
      <Header onSendClick={handlePopupClick} onShowMenu={toggleMenu} />
      <Menu isOpen={isMenuOpen} onClose={toggleMenu} onMenuClick={handlePopupClick}/>
      <FirstScreen onUpClick={handlePopupClick}/>         
      <About />
      <Preferences />
      <Tocall onSubmit={handleSend} success={success} isSending={isSending} error={error}/> 
      <Quest />
      <CallToAction onSubmit={handleSend} success={success} isSending={isSending} error={error}/>
      <Footer/> 
      <PopupWithForm 
            isOpen={isPopupWithFormOpen} 
            onClose={closeAllPopups} 
            onSubmit={handleSend}
            success={success} 
            isSending={isSending} 
            error={error}                            
            />      
</>  
        
  );
}
export default App;