import React, { useState } from 'react';
import './Question.css';

const Question = ({ question, answer }) => {
  const [isAnswer, setAnswer] = useState(false); 

  return (
            <li className="quest__item">
              <div className='quest__field'  onClick={() => setAnswer(!isAnswer)}>               
                  <p className='quest__faq'>{question}</p>
                  <span className={` ${ isAnswer ? 'quest__check  quest__check_active' : 'quest__check'}`}></span>
                </div>
                {isAnswer && <p className='quest__answer'>{answer}</p>}                              
             </li>                   
    );
};

export default Question;