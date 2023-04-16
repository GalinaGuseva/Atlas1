import React from 'react';
import './About.css';
import image from '../../images/pharmacy.jpg';

const About = () => {
    return (
      <section id="system" className="about">
        <div className='about__center'>
          <div className='about__maintext'>
            <p className='about__overhead'>О системе</p>
             <h2 className="about__title">Программный комплекс "Атлас" - это удобно и надёжно</h2>
             <h3 className="about__subtitle">Экономьте время и деньги при работе с заказами</h3>
          </div>        
          <div className='about__container'>
             <img src={image} alt="аптека" className="about__image" /> 
             <ul className="about__list">
                <li className="about__item">
                  <p className='about__text'>Система «Атлас» создана в 2015 году разработчиками с большим опытом в аптечном бизнесе, легко интегрируется с другими информационными системами (маркетплейсы, маркировка, ЭДО и пр.)</p>
                 </li>
                 <li className="about__item">
                   <p className='about__text'>Это облачная система товарного учёта для аптек с автоматическим расчётом потребности, автоматических торгов и управления ассортиментом.</p>
                 </li>
                 <li className="about__item">
                   <p className='about__text'>Не требует установки дополнительных программ, проста и надёжна в использовании и обслуживании.</p>
                 </li>
                 <li className="about__item">
                   <p className='about__text'>Состоит из  кассового модуля и облачной части, где ведётся основной учёт и производятся закупки.</p>
                 </li>
                 <li className="about__item">
                   <p className='about__text'>Для достижения оптимального результата требуется минимум действий пользователя.</p>
                 </li>
                 <li className="about__item">
                   <p className='about__text'>Система автоматически настраивает электронное взаимодействие с поставщиками.</p>
                 </li>         
               </ul>            
            </div>
          </div>                
      </section>
    );
  };
  
  export default About;