import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Tocall.css';
import telegram from '../../images/Telegram-icon.svg';
import viber from '../../images/Viber-icon.svg';
import vk from '../../images/vk-icon.svg';
import phone from '../../images/phone-icon.svg';
import email from '../../images/email-icon.svg';
import { useFormWithValidation } from "../../hooks/UseFormWithValidation";
import { regExp } from "../../constants/RegExp";

const Tocall = ({ onSubmit }) => {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation({   
    email: "",
    phone: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);  

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values); 
  }

  useEffect(() => {   
      setIsDisabled(
        !values.email || !values.phone || !isValid
      );   
  }, [handleChange, isValid, values]);

  useEffect(() => {
    resetForm();
  }, [resetForm]);

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
                pattern={regExp.phone}
                value={values.phone || ""}
                onChange={handleChange}
                required
              />
              <span className="tocall__input-error">{errors.phone}</span>         
            </label>
            <label className="tocall__field">
              <img src={email} alt="email" className="tocall__email" />
              <input
                type="email"
                placeholder="E-mail"
                className="tocall__input"       
                name="email"                
                pattern={regExp.email}
                value={values.email || ""}
                onChange={handleChange}
                required
              />
              <span className="tocall__input-error">{errors.email}</span>         
            </label>
            <button
               type="submit"
               className={
                isDisabled
                 ? "tocall__field tocall__btn-submit link tocall__btn-submit_disabled"
                 : "tocall__field tocall__btn-submit link"
                }
               disabled={isDisabled}         
            >Перезвоните мне</button>
            <label className="tocall__field_thin">
              <input 
                type="checkbox"
                id="iagree" 
                name="agree"
                value="1"
                className="tocall__check"             
                required />
             <span className='tocall__thin link'>Соглашаюсь с <Link to="/policy" className='tocall__btn'>условиями передачи данных</Link></span>
            </label>        
          </form>            
       </div>                         
     </section>
    )
  };
  
  export default Tocall;