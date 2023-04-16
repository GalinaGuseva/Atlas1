import React from 'react';
import './Header.css';

export default function HeaderMain({ onSendClick }) {
  return (
    <header className="header">
      <div className='header__center'>
         <div className="header__logo"></div>
           <nav className="nav">
             <a href="#system" className="nav__link link">
               О&nbsp;системе
             </a>
             <a href="#preferences" className="nav__link link">
               Наши преимущества
             </a>
             <a href="#questions" className="nav__link link">
               Вопросы и ответы
             </a>
             <a href="#contacts" className="nav__link link">
                Контакты
            </a>
           </nav>
           <button type="button" onClick={onSendClick} className="button-header link"
             >Оставить заявку</button>
      </div>
  </header>
  );
}
