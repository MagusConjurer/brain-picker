import React, { Component } from 'react';
import QuizPageHeader from '../components/QuizPageHeader';
import Share from '../components/Share';
import Footer from '../components/Footer';
import QuizSample from '../QuizSamples.json';
import QuizForm from '../components/QuizForm';

class QuizTest extends Component {

    state = {
        QuizSample
    };

    render() {
        return(

            <div>
                <QuizPageHeader />
                <QuizForm />
                <Share className="mt-5" />
                <Footer />
            </div>
        )
    }
}

export default QuizTest;
