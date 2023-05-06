import React from 'react';
import { Link } from 'react-router-dom';
import './Tocall.css';
import telegram from '../../images/Telegram-icon.svg';
import viber from '../../images/Viber-icon.svg';
import vk from '../../images/vk-icon.svg';
import phone from '../../images/phone-icon.svg';
import email from '../../images/email-icon.svg';

const Tocall = () => {
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
                         
          <ul className="tocall__form">
              <li className="tocall__item">                
                  <img src={phone} alt="phone" className="tocall__phone" />                
                <p className='tocall__field'>Номер телефона</p>
              </li>
              <li className="tocall__item">              
                <img src={email} alt="email" className="tocall__email" />               
                <p className='tocall__field'>E-mail</p>                
              </li>              
              <li className="tocall__item tocall__item_blue">
                <button type="button" className='tocall__field_blue'>Перезвоните мне</button>
              </li>
              <li className="tocall__item_thin">
                <input type="checkbox" className="tocall__check" />                
                <span className='tocall__field_thin link'>Соглашаюсь с <Link to="/policy" className='tocall__btn'>условиями передачи данных</Link></span>                
              </li> 
          </ul>            
       </div>                         
     </section>
    );
  };
  
  export default Tocall;