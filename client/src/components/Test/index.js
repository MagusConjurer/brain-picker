import React from 'react';
import './style.css';
import Collapsible from 'react-collapsible';

export function UserImage() {
    return(
        <div className=''>
            <h6>Profile test</h6>
<<<<<<< HEAD
            <img alt="." src='./images/default-person.png'/>
=======
            <img src='./images/default-person.png' alt="default-person" />
>>>>>>> 77ac9b99ae2bb10086e151282057f5e905a655f2
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


