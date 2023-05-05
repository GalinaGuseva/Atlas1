import React from 'react';
import './FirstScreen.css';
import icon1 from '../../images/icon11.png';
import icon2 from '../../images/icon12.png';
import icon3 from '../../images/icon32.png';
import icon4 from '../../images/icon33.png';

const FirstScreen = ({onUpClick}) => {
  return (
    <section className="first">
      <div className='first__center'>
        <div className='first-block'>
           <div className='first__text'>
           <h1 className="first__title">Автоматизация аптек под&nbsp;ключ</h1>
           <h2 className="first__subtitle">Готовое комплексное решение</h2>
           </div>
           <button
               type="button"
               className="first__button link_button"
               onClick={onUpClick}
                >Попробовать бесплатно</button>
           <ul className="first__list">
              <li className="first__item">
                 <img src={icon1} alt="icon1" className="first__icon icon" />
                 <p className='first__icontext'>Полный комплекс программ</p>
               </li>
               <li className="first__item">
                 <img src={icon2} alt="icon2" className="first__icon icon" />
                 <p className='first__icontext'>Продажи, товарный&nbsp;учёт, инвентаризация</p>
               </li>
               <li className="first__item">
                 <img src={icon3} alt="icon3" className="first__icon icon" />
                 <p className='first__icontext'>Учёт потребности, работа с поставщиками</p>
               </li>
               <li className="first__item">
                  <img src={icon4} alt="icon4" className="first__icon icon" />
                  <p className='first__icontext'>Быстрая и дружелюбная техподдержка</p>
               </li>
            </ul>
          </div>
          <div className="first__image"></div>
      </div>
    </section>
  );
};

export default FirstScreen;
