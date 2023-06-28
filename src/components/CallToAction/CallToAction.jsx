import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './CallToAction.css';
import phone from '../../images/phone-icon.svg';
import email from '../../images/email-icon.svg';
import maps from '../../images/maps.svg';
import time from '../../images/time.svg';
import shopping from '../../images/shopping.svg';
import gift from '../../images/gift.svg';
import { useFormWithValidation } from "../../hooks/UseFormWithValidation";

const CallToAction = ({ onSubmit }) => {
  const inputs = { name: '', job: '', email: '', phone: '' };
  const { values, handleChange, handlePaste, errors, isValid, resetForm} = useFormWithValidation(inputs);
  const [isDisabled, setIsDisabled] = useState(true);
  const [accept, setAccept] = useState(false);

  const handleChecked = (e) => {
    setAccept(e.target.checked);
  }

  function handleSubmit(e) {
    e.preventDefault();      
    onSubmit(values);    
  }

  useEffect(() => {   
      setIsDisabled(
        !values.name || !values.job ||!values.email || !values.phone || !accept || !isValid
      );   
  }, [handleChange, isValid, accept, values]); 

  useEffect(() => {
    resetForm();
    setAccept(false);     
}, [onSubmit, setAccept, resetForm]);

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
                   pattern="[а-яА-Яa-zA-ZёË\0-9\-().']{1,}"                
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
                  className={
                   isDisabled
                     ? "call__button link call__button_disabled"
                     : "call__button link"
                   }
                  disabled={isDisabled}         
               >Отправить заявку</button>
               <label className="call__field_thin">
                  <input 
                    type="checkbox"                    
                    name="agree"                    
                    className="call__check"                     
                    onClick={handleChecked}
                    checked={accept}             
                    required />
                  <span className='call__thin link'>Соглашаюсь с <Link to="/policy" className='call__btn'>условиями передачи данных</Link></span>
               </label>     
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