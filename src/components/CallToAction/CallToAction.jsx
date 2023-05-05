import React from 'react';
import './CallToAction.css';
import phone from '../../images/phone-icon.svg';
import email from '../../images/email-icon.svg';
import maps from '../../images/maps.svg';
import time from '../../images/time.svg';
import shopping from '../../images/shopping.svg';
import gift from '../../images/gift.svg';


const CallToAction = ({ onAcc }) => {
    return (
      <section className="call">
         <div className='call__center'>
            <ul className='call__form'>
               <li className='call__header'>Заявка на&nbsp;подключение</li>      
               <li className='call__field'>Ваше имя</li>
               <li className='call__field'>Название организации</li>
               <li className='call__field'><img src={email} alt="email" className="call__email" />E-mail (для уведомлений)</li>
               <li className='call__field'><img src={phone} alt="phone" className="call__phone" />Номер телефона</li>
               <li className="call__bottom">
                  <div className='call__button'>Отправить заявку</div>
                  <div className="call__field_thin">
                    <input type="checkbox" className="call__check" />
                    <span className='call__thin'>Соглашаюсь с <button type="button" onClick={onAcc} className='call__btn'>условиями передачи данных</button></span>                    
                  </div>
              </li>
            </ul>
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