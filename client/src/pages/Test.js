import React, { Component } from 'react';
import { UserImage, UserQuizResults, UserBio } from '../components/Test';


class Test extends Component {
    render() {
        return(
            <>
            <div className='row'>
                <div className='col'>
                    <UserImage/>
                </div>
                <div className='col'>
                    <UserBio/>
                </div>

            </div>
            <UserQuizResults/>
            </>
        )
    }
}

export default Test;