import React from 'react';
import './Quest.css';
import Question from "../Question/Question";
import { questionData } from "../../utils/content";

const Quest = () => {
  return (
      <section id="questions" className="quest">
          <div className='quest__center'>
             <div className='quest__head'>
               <div className='quest__icon'></div>      
               <div className='quest__title'>Вопросы и ответы</div>
             </div>                         
            <ul className="quest__list">            
              {questionData.map(({ id, question, answer }) => (
              <Question question={question} answer={answer} key={id}/>
             ))}
           </ul>             
       </div>                         
     </section>
    );
  };
  
  export default Quest;