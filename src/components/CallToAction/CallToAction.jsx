import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import './CallToAction.css';
import phone from '../../images/phone-icon.svg';
import email from '../../images/email-icon.svg';
import maps from '../../images/maps.svg';
import time from '../../images/time.svg';
import shopping from '../../images/shopping.svg';
import gift from '../../images/gift.svg';
import { useFormWithValidation } from "../../hooks/UseFormWithValidation";

const CallToAction = ({ onSubmit, success, isSending, error }) => {
  const inputs = { name: '', job: '', email: '', phone: '' },
  { values, handleChange, handlePaste, setValues, errors, isValid, resetForm} = useFormWithValidation(inputs), 
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
      let message = `Имя: ${values.name}, организация: ${values.job}, почта: ${values.email}, тел: ${values.phone}`;          
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
      <section className="call">
         <div className='call__center'>
           <form 
              className="call__form"
              onSubmit={handleSubmit}
              noValidate
            >
              <p className='call__header'>Заявка на&nbsp;подключение</p>
              <label className="call__field">
                <input
                  type="text"
                  className="call__input"
                  placeholder="Ваше имя"        
                  name="name"                  
                  minLength="2"
                  maxLength="25"
                  pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
                  value={values.name || ""}
                  onChange={handleChange}
                  onPaste={handlePaste}
                  required
                 />
                <span className="call__input-error">{errors.name}</span>
              </label>
              <label className="call__field">
                <input
                  type="text"
                  className="call__input"
                  placeholder="Название организации"        
                  name="job"                  
                  minLength="2"
                  maxLength="30"                                 
                  value={values.job || ""}
                  onChange={handleChange}
                  onPaste={handlePaste}
                  required                             
                />
                <span className="call__input-error">{errors.job}</span>
              </label>
              <label className="call__field">
                 <img src={email} alt="email" className="call__email" />
                 <input
                   type="email"
                   className="call__input"
                   placeholder="E-mail"        
                   name="email"
                   maxLength="40"                 
                   pattern="^\S+@\S+\.\S+$"
                   value={values.email || ""}
                   onChange={handleChange}
                   onPaste={handlePaste}
                   required
                 />
                 <span className="call__input-error">{errors.email}</span>         
              </label>
              <label className="call__field">
                 <img src={phone} alt="phone" className="call__phone" />
                 <input
                   type="tel"
                   className="call__input"
                   placeholder="Номер телефона"        
                   name="phone"
                   minLength="8"
                   maxLength="18"                  
                   pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
                   value={values.phone || ""}
                   onChange={handleChange}
                   onPaste={handlePaste}
                   required
                 />
                 <span className="call__input-error">{errors.phone}</span>         
              </label>
              <button
                 type="submit"
                 className="call__button link"                  
                 disabled={!values.name ||!values.email || !values.phone || values.last || !isValid}         
              >Отправить заявку</button>
              <label className="call__field_thin">
                 <input 
                   type="checkbox"                    
                   name="agree"                    
                   className="call__check"                     
                   onChange={(e) => setAccept(e.target.value)}
                   checked={accept}             
                 />
                 <span className='call__thin link'>Соглашаюсь с <Link to="/policy" className='call__btn'>условиями передачи данных</Link></span>
              </label>
              <label className="call__field_last">
              <input 
               type="text"
               placeholder="Фамилия"                         
               name="last"              
               className="call__last"
               onChange={handleLast}
               value={values.last|| ''}
               autoComplete="off"
               />               
            </label> 
              <ReCAPTCHA
                 sitekey={KEY}
                 onChange={() => setIsCaptchaSuccess(true)}                                                            
          />
              <span className="call__agree-error">{errorText}</span>
              <span className="call__success">{success}</span>
              <span className="call__error">{error}</span>
              <span className="call__sending">{isSending}</span>   
           </form>                 
            
          <div className='call__text'>
            <div className='call__title'>Автоматизируйте аптеку с&nbsp;системой “Атлас”</div>
            <div className='call__subtitle'>Попробуйте бесплатно, чтобы ощутить реальные выгоды в своей работе</div>
             <ul className='call__icons'>
                <li className='call__item'>
                   <img src={maps} alt="maps" className="call__icon" />
                   <p className='call__icontext'>Работаем со всеми регионами России и СНГ</p>
                </li>
                <li className='call__item'>
                  <img src={time} alt="time" className="call__icon" />
                  <p className='call__icontext'>Удобная и быстрая инвентаризация</p>
                </li>
                <li className='call__item'>
                  <img src={shopping} alt="shopping" className="call__icon" />
                  <p className='call__icontext'>Гибкая система ценообразования и скидок</p>
                </li>
                <li className='call__item'>
                  <img src={gift} alt="gift" className="call__icon" />
                  <p className='call__icontext'>Повышение доходности с помощью автоматизации</p>
                </li>
             </ul>
            </div>            
         </div>                         
     </section>
    );
  };
  
  export default CallToAction;