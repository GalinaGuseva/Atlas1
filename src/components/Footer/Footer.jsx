import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import phone from '../../images/phone-bold.svg';
import email from '../../images/email-white.svg';
import number from '../../images/telephon.png';

const Footer = () => {
    return (
      <section className='footer' id='contacts'>
        <div className='footer__center'>             
          <div className='footer__info'>
            <div className='footer__container'>            
              <div className='footer__logotip'>
                <div className="footer__logo"></div>
                <p className='footer__name'>Информационные технологии  Атлас - автоматизация аптек и&nbsp;аптечных сетей</p>
              </div>
              <ul className='footer__contacts'>              
                <li className='footer__item'>
                  <img src={phone} alt="phone" className="footer__icon icon" />
                  <img src= {number} alt="number" className='footer__iconicon' />
                </li>
                <li className='footer__item'>
                  <img src={email} alt="email" className="footer__icon icon" />
                  <p className='footer__icontext'>aptATLAS@mail.ru</p>
                </li>              
              </ul>
             </div>            
             <div className='footer__notice'>             
                <p className='footer__text'>Информация, размещённая на сайте, не является публичной офертой</p>
                <Link to="/policy" className='footer__btn'>
                  <p>Политика конфиденциальности</p>
                </Link>                            
             </div>
          </div>
          <div className='footer__copyright'>© 2015 - 2023 Информационные технологии "АТЛАС" / Все права защищены</div>            
       </div>                         
     </section>
    );
  };
  
  export default Footer;