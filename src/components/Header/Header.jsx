import React from 'react';
import './Header.css';

export default function Header({ onSendClick, onShowMenu }) {
  return (
    <header className="header">
      <div className='header__center'>
         <div className="header__logo"></div>
         <div className='header__block'>
           <nav className="header__nav">
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
         <button type="button" onClick={onShowMenu}className="header__nav-burger"></button>
      </div>
  </header>
  );
}
