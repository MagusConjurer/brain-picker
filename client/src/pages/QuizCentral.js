import React, { Component } from 'react';
import QuizCentralHeader from '../components/QuizCentralHeader';
import QuizCards from '../components/QuizCards';
import Share from '../components/Share';
import Footer from '../components/Footer';
import QuizSample from '../QuizSamples.json';

class QuizCentral extends Component {

    state = {
        QuizSample
    };

    render() {
        return(

            <div>
                <div>
                <h4>Welcome to <b>Pick Their Brain!</b></h4>
                <p style={{marginBottom: '50px', textAlign: 'justify', width: '80%'}}>Here you will find a database of quizzes with weighted results.  No more arbitrary quiz apps where one result goes to one answer.  Now you can take a quiz where answers can feed into multiple results and some questions can matter more than others!</p>
                </div>

                <QuizCentralHeader />
                <QuizCards QuizSample={this.state.QuizSample} />
                <Share className="mt-5" />
                <Footer />
            </div>
        )
    }
}

export default QuizCentral;