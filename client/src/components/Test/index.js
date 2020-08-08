import React from 'react';
import './style.css';
import Collapsible from 'react-collapsible';

export function UserImage() {
    return(
        <div className=''>
            <h6>Profile test</h6>
            <img src='./images/default-person.png' alt="default-person" />
        </div>
    );
}

export function UserBio() {
    return(
        <div className='userBio'>
            <p>Username</p>
            <p># of Quizes Taken</p>
        </div>
    )
}

export function UserQuizResults() {
    return(
        <div className='quizResults'>
            <Collapsible trigger="Quiz Name" className='.Collapsible__trigger Collapsible__contentOuter'>
                <p>Quiz results!!!</p>
            </Collapsible>
        </div>
    )
}


// class Test extends Component {
//     render() {
//         return (
// <>

//             <div className='userInfo'>
//                 <img src='./images/default-person.png'/>
//             </div>




//             <div className='main'>
//                 <Collapsible trigger="Quiz Name" className='.Collapsible__trigger Collapsible__contentOuter'>
//                     <p>Quiz results!!!</p>
//                 </Collapsible>
//             </div>
// </>
//         )
//     }
// }


