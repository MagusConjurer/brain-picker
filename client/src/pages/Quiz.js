import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import QuizCentralHeader from '../components/QuizCentralHeader';
import QuizCards from '../components/QuizCards';
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