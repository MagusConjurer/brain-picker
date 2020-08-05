import React, { Component } from 'react';
import QuizCentralHeader from '../components/quizCentralHeader';
import QuizCards from '../components/quizCards';
import Share from '../components/Share';
import Footer from '../components/Footer';

class Quiz extends Component {
    render() {
        return(

            <div>
                <QuizCentralHeader />
                <QuizCards />
                <Share />
                <Footer />
            </div>
        )
    }
}

export default Quiz;