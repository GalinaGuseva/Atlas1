import React, { useState } from "react";
import { Link } from 'react-router-dom';
import  './PopupWithForm.css';
import { useFormWithValidation } from "../../hooks/UseFormWithValidation";

export default function PopupWithForm({ isOpen, onClose, onSubmit, success, isSending, error }) {
  const inputs = { name: '', email: '', phone: '' },
  { values, handleChange, handlePaste, setValues, errors, isValid, resetForm} = useFormWithValidation(inputs), 
  [errorText, setErrorText] = useState(),  
  [accept, setAccept] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!accept) {
      setErrorText("Отметьте галочкой согласие на обработку персональных данных");
      setTimeout(() => setErrorText(""), 2000);      
    } else {       
      let message = `Имя: ${values.name}, почта: ${values.email}, тел: ${values.phone}`;          
      onSubmit(message);     
      resetForm();
      setAccept(false);      
    }    
  };  

  function handleLast(e) {
    setValues({ ...values, last: e.target.value });
    setTimeout(() => resetForm(), 10000);
    setTimeout(() => setAccept(false), 10000);    
  }

  return isOpen ? (
    <div className={`popup form-popup ${isOpen && "popup_opened"}`}
      onClick={onClose}
    >
      <div        
        className="popup__container"       
        onClick={(e) => {
          e.stopPropagation();
        }}        
      >
        <button
          type="button"
          className="popup__btn-close"
          title="Закрыть"
          onClick={onClose}
        ></button>
        <form 
           className="popup-form"
           onSubmit={handleSubmit}
           noValidate
        >
        <h4 className="popup__title">Заявка на подключение</h4>
        <label className="popup__field popup__field_top">
          <input
           type="text"
           placeholder="Ваше имя"
           className="popup__input"    
           name="name"          
           minLength="2"
           maxLength="25"
           pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
           value={values.name || ''}
           onChange={handleChange}
           onPaste={handlePaste}
           required
         />
         <span className="popup__input-error">{errors.name}</span>
       </label>
       <label className="popup__field">    
          <input
           type="email"
           placeholder="E-mail (для уведомлений)"       
           name="email"           
           className="popup__input" 
           maxLength="30"
           pattern="^\S+@\S+\.\S+$"
           value={values.email || ''}
           onChange={handleChange}
           onPaste={handlePaste}
           required
         />
         <span className="popup__input-error">{errors.email}</span>
      </label>
      <label className="popup__field"> 
        <input
          type="tel"
          placeholder="Номер телефона"        
          name="phone"
          minLength="8"                
          maxLength="18"
          className="popup__input"                          
          value={values.phone || ''}
          pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
          onChange={handleChange}
          onPaste={handlePaste}
          required
        />
        <span className="popup__input-error">{errors.phone}</span>
      </label>
      <button
          type="submit"
          className="popup__btn-submit"          
          disabled={!values.email || !values.phone || values.last || !isValid}         
        >Отправить заявку</button>
         <label className="popup__field_thin">
            <input 
              type="checkbox"             
              name="agree"              
              className="popup__check"
              onChange={(e) => setAccept(e.target.value)}
              checked={accept}                                              
             />
            <span className='popup__thin'>Соглашаюсь с <Link to="/policy" className='popup__btn'>условиями передачи данных</Link></span>
          </label>
          <label className="popup__field_last">
              <input 
               type="text"
               placeholder="Фамилия"                         
               name="last"              
               className="popup__last"
               onChange={handleLast}
               value={values.last|| ''}
               />
               
            </label> 
          <span className="popup__agree-error">{errorText}</span>
          <span className="popup__success">{success}</span>
          <span className="popup__error">{error}</span>
          <span className="popup__sending">{isSending}</span>        
      </form>
      </div>
    </div>
  ) : null;
}