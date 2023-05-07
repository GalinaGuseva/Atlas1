import React from "react";
import "./Menu.css";

export default function Menu({ isOpen, onClose, onMenuClick }) {
  return (
    <section
      className={`menu ${isOpen ? "menu_active" : ""}`}
      onClick={onClose}
    >
      <div className={`menu__container ${
          isOpen ? "menu__container_visible" : "menu__container_hidden"
         }`}
        >
        <div className="menu__bar">
          <button onClick={onClose} className="menu__btn-close link"></button>
          <nav className="menu__nav">           
            <a href="#system" onClick={onClose} className="menu__link link">О&nbsp;системе</a>
             <a href="#preferences" onClick={onClose} className="menu__link link">Наши преимущества</a>
             <a href="#questions" onClick={onClose} className="menu__link link">Вопросы и ответы</a>
             <a href="#contacts" onClick={onClose} className="menu__link link">Контакты</a>
          </nav>       
          <button type="button" onClick={onMenuClick} className="menu__btn-form link"
             >Оставить заявку</button>
        </div>
      </div>
    </section>
  );
}
