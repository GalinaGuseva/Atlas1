import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import  './PopupWithForm.css';
import { useFormWithValidation } from "../../hooks/UseFormWithValidation";

export default function PopupWithForm({ isOpen, onClose, onSubmit }) {
  const inputs = { name: '', email: '', phone: '' };
  const { values, handleChange, handlePaste, errors, isValid, resetForm} = useFormWithValidation(inputs); 
  const [accept, setAccept] = useState(false);
 
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
    setAccept(false);
  } 

  useEffect(() => {
    resetForm();
    setAccept(false);     
  }, [onSubmit, setAccept, resetForm]);

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
          disabled={!values.email || !values.phone || !accept || !isValid}         
        >Отправить заявку</button>
         <label className="popup__field_thin">
            <input 
              type="checkbox"             
              name="agree"              
              className="popup__check"
              onChange={() => setAccept(!accept)}
              checked={accept}                                              
              required />
            <span className='popup__thin'>Соглашаюсь с <Link to="/policy" className='popup__btn'>условиями передачи данных</Link></span>
          </label>           
      </form>
      </div>
    </div>
  ) : null;
}