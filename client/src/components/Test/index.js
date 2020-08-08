import React from 'react';
import './style.css';
// import Collapsible from 'react-collapsible';

export function UserImage() {
  return(
    <div className="">
      <img alt="." src='./images/default-person.png'/>
    </div>
  )
}

export function UserBio() {
    return(
        <div className='userBio'>
            <p>Welcome back!</p>
            <p>Total Quizzes Taken: 1</p>
            <p><strike>Total Quizzes Created: 0</strike> <em>Coming Soon!</em></p>
        </div>
    )
}

export function Row({ children }) {
  return <div className={'row'}>{children}</div>
};

export function Col({ children }) {
  return (
    <div className={'col'}>{children}</div>
  );
};


//         // <div className='quizResults'>
//         //     <Collapsible trigger="Quiz Name" className='.Collapsible__trigger Collapsible__contentOuter'>
//         //         <p>Quiz results!!!</p>
//         //     </Collapsible>
//         // </div>
//     )
// }
