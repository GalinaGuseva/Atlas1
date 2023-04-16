import React from 'react';
import './Preferences.css';

const Preferences = () => {
    return (
      <section id="preferences" className="preferences">
        <div className='preferences__center'>                    
           <h4 className="preferences__title">Что вы получите, установив нашу систему?</h4>           
             <ul className="preferences__list">
                <li className="preferences__item">
                  <span className='preferences__icon icon'>1</span>
                  <h5 className='preferences__subtitle'>Сокращение времени работы заведующего</h5>
                  <p className='preferences__text'>Ежедневное формирование заказа занимает минуты</p>
                 </li>
                 <li className="preferences__item">
                   <span className='preferences__icon icon'>2</span>
                   <h5 className='preferences__subtitle'>Повышение доходности за счёт сокращения товарного запаса</h5>
                   <p className='preferences__text'>Снижение доли неликвидных товаров за счёт автоматической регулировки по спросу и сезонности</p>
                 </li>
                 <li className="preferences__item">
                   <span className='preferences__icon icon'>3</span>
                   <h5 className='preferences__subtitle'>Упрощение работы персонала</h5>
                   <p className='preferences__text'>Мы сами настраиваем электронное взаимодействие с поставщиками, быстрая инвентаризация, автосписки ЖНЛП</p>
                 </li>
                 <li className="preferences__item">
                   <span className='preferences__icon icon'>4</span>
                   <h5 className='preferences__subtitle'>Полный комплекс для работы аптеки, склада и кассы</h5>
                   <p className='preferences__text'>Ничего дополнительно докупать и устанавливать не нужно</p>
                 </li>
                 <li className="preferences__item">
                   <span className='preferences__icon icon'>5</span>
                   <h5 className='preferences__subtitle'>Высокая надёжность </h5>
                   <p className='preferences__text'>Даже при перебоях с интернетом и связи с сервером касса продолжит работу в автономном режиме</p>
                 </li>
                 <li className="preferences__item">
                   <span className='preferences__icon icon'>6</span>
                   <h5 className='preferences__subtitle'>Автоматизация аптеки за 1 день</h5>
                   <p className='preferences__text'>Бесплатно обучим персонал и дадим рекомендации по повышению эффективности</p>
                 </li>         
               </ul>            
            </div>                        
      </section>
    );
  };
  
  export default Preferences;