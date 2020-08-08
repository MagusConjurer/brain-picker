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
            <p>Username</p>
            <p># of Quizes Taken</p>
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
