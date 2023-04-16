import React from 'react';
import './Main.css';
import icon1 from '../../images/icon11.png';
import icon2 from '../../images/icon12.png';
import icon3 from '../../images/icon32.png';
import icon4 from '../../images/icon33.png';

const Main = () => {
  return (
    <section className="main">
      <div className='main__center'>
        <div className='main__text'>
           <h1 className="main__title">Автоматизация аптек под ключ</h1>
           <h2 className="main__subtitle">Готовое комплексное решение</h2>
        </div>        
        <div className='main__container'>
          <div className='main__columns'>
            <button    
               type="button"           
               className="main__button link_button"
                >Попробовать бесплатно</button>      
            <ul className="main__list">
              <li className="main__item">
                 <img src={icon1} alt="icon1" className="main__icon icon" />
                 <p className='main__icontext'>Полный комплекс программ</p>
               </li>
               <li className="main__item">
                 <img src={icon2} alt="icon2" className="main__icon icon" />
                 <p className='main__icontext'>Продажи, товарный&nbsp;учёт, инвентаризация</p>
               </li>
               <li className="main__item">
                 <img src={icon3} alt="icon3" className="main__icon icon" />
                 <p className='main__icontext'>Учёт потребности, работа с поставщиками</p>
               </li>
               <li className="main__item">
                  <img src={icon4} alt="icon4" className="main__icon icon" />
                  <p className='main__icontext'>Быстрая и дружелюбная техподдержка</p>
               </li>          
             </ul>
          </div>
          <div className="main__image"></div>
          </div>
        </div>                
    </section>
  );
};

export default Main;