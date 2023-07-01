import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Tocall.css';
import telegram from '../../images/Telegram-icon.svg';
import viber from '../../images/Viber-icon.svg';
import vk from '../../images/vk-icon.svg';
import phone from '../../images/phone-icon.svg';
import email from '../../images/email-icon.svg';
import { useFormWithValidation } from "../../hooks/UseFormWithValidation";

const Tocall = ({ onSubmit }) => {
  const inputs = { email: '', phone: '' },
  { values, handleChange, handlePaste, errors, isValid, resetForm } = useFormWithValidation(inputs),  
  [errorText, setErrorText] = useState(),
  [success, setSuccess] = useState(),
  [accept, setAccept] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!accept) {
      setErrorText("Отметьте галочкой согласие на обработку персональных данных");
      setTimeout(() => setErrorText(""), 2000);      
    } else {       
      onSubmit(values);
      setSuccess("Данные успешно отправлены!");
      setTimeout(() => setSuccess(""), 2000);
      resetForm();
      setAccept(false);      
    }    
  };  

    return (
      <section className="tocall">
        <div className='tocall__center'>
          <div className='tocall__block'>
             <div className='tocall__textblock'>
                <p className='tocall__text'>Для консультации позвоните по телефону +7&nbsp;(000)&nbsp;000-00-00 либо заполните форму, и&nbsp;мы&nbsp;свяжемся с вами сами.</p>
                <p className='tocall__text'>Также связаться с нами можно в соцсетях:</p>
              </div>
              <div className='tocall__icons'>
                <button type="button" className="tocall__button link_button"
                 ><img src={viber} alt="viber" className="tocall__icon" />Viber</button>
                <button type="button" className="tocall__button link_button"
                 ><img src={telegram} alt="telegram" className="tocall__icon" />Telegram</button>
                <button type="button" className="tocall__button link_button"
                 ><img src={vk} alt="vk" className="tocall__icon" />VK</button>
              </div>  
          </div>  
                         
          <form 
            className="tocall__form"
            onSubmit={handleSubmit}
            noValidate
          >
            <label className="tocall__field">
              <img src={phone} alt="phone" className="tocall__phone" />
              <input
                type="text"
                placeholder="Номер телефона"
                className="tocall__input"     
                name="phone"
                minLength="8"
                maxLength="18"         
                pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
                value={values.phone || ""}
                onChange={handleChange}
                onPaste={handlePaste}
                required
              />
              <span className="tocall__input-error">{errors.phone}</span>         
            </label>
            <label className="tocall__field">
              <img src={email} alt="email" className="tocall__email" />
              <input
                type="email"
                placeholder="E-mail"       
                name="email"                
                className="tocall__input"                
                maxLength="30"                       
                value={values.email || ''}
                pattern="^\S+@\S+\.\S+$"
                onChange={handleChange}
                onPaste={handlePaste}
                required
              />
              <span className="tocall__input-error">{errors.email}</span>         
            </label>
            <button
               type="submit"
               className="tocall__field tocall__btn-submit link"                
               disabled={!values.email || !values.phone || !isValid}          
            >Перезвоните мне</button>
            <label className="tocall__field_thin">
              <input 
               type="checkbox"             
               name="agree"              
               className="tocall__check"
               onChange={(e) => setAccept(e.target.value)}
               checked={accept}
               />
             <span className='tocall__thin link'>Соглашаюсь с <Link to="/policy" className='tocall__btn'>условиями передачи данных</Link></span>
            </label>
            <span className="tocall__error">{errorText}</span>
            <span className="tocall__success">{success}</span>       
          </form>            
       </div>                         
     </section>
    )
  };
  
  export default Tocall;