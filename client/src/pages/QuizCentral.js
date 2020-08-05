import React, { Component } from 'react';
<<<<<<< HEAD:client/src/pages/Quiz.js
import QuizCentralHeader from '../components/quizCentralHeader';
import QuizCards from '../components/quizCards';
=======
import QuizCentralHeader from '../components/QuizCentralHeader';
import QuizCards from '../components/QuizCards';
>>>>>>> 3b48bfde64565c669c58a41294de64badabd57fb:client/src/pages/QuizCentral.js
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
                <QuizCentralHeader />
                <QuizCards QuizSample={this.state.QuizSample} />
                <Share className="mt-5" />
                <Footer />
            </div>
        )
    }
}

export default QuizCentral;