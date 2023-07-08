import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import './Tocall.css';
import telegram from '../../images/Telegram-icon.svg';
import viber from '../../images/Viber-icon.svg';
import vk from '../../images/vk-icon.svg';
import phone from '../../images/phone-icon.svg';
import email from '../../images/email-icon.svg';
import number from '../../images/number1.png';
import { useFormWithValidation } from "../../hooks/UseFormWithValidation";

const Tocall = ({ onSubmit, success, isSending, error }) => {
  const inputs = { email: '', phone: '', last: '' },
  { values, handleChange, handlePaste, setValues, errors, isValid, resetForm } = useFormWithValidation(inputs),  
  [errorText, setErrorText] = useState(),
  [isCaptchaSuccessful, setIsCaptchaSuccess] = useState(false),
  KEY = process.env.REACT_APP_RECAPTCHA,
  [accept, setAccept] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!accept) {
      setErrorText("Отметьте галочкой согласие на обработку персональных данных");
      setTimeout(() => setErrorText(""), 3000);
    } else if (!isCaptchaSuccessful){
      setErrorText("Подтвердите, что вы не робот!");
      setTimeout(() => setErrorText(""), 3000);              
    } else {       
      let message = `Почта: ${values.email}, тел: ${values.phone}`;          
      onSubmit(message);      
      resetForm();
      setAccept(false);
      setIsCaptchaSuccess(false);      
    }    
  }; 
  
  function handleLast(e) {
    setValues({ ...values, last: e.target.value });
    setTimeout(() => resetForm(), 10000);
    setTimeout(() => setAccept(false), 10000);    
  }

    return (
      <section className="tocall">
        <div className='tocall__center'>
          <div className='tocall__block'>
             <div className='tocall__textblock'>
                <p className='tocall__text'>Для консультации позвоните по телефону<img src= {number} alt="number" className='tocall__number' />либо заполните форму, и&nbsp;мы&nbsp;свяжемся с вами сами.</p>
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
               disabled={!values.email || !values.phone || values.last ||!isValid}          
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
            <label className="tocall__field_last">
              <input 
               type="text"
               placeholder="Фамилия"                         
               name="last"              
               className="tocall__last"
               onChange={handleLast}
               value={values.last|| ''}
               autoComplete="off"
               />               
            </label>            
            <ReCAPTCHA
               sitekey={KEY}
               onChange={() => setIsCaptchaSuccess(true)}                                                            
            />
            <span className="tocall__agree-error">{errorText}</span>
            <span className="tocall__success">{success}</span>
            <span className="tocall__error">{error}</span>
            <span className="tocall__sending">{isSending}</span>      
          </form>            
       </div>                         
     </section>
    )
  };
  
  export default Tocall;