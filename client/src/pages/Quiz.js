import React, { Component } from 'react';
import QuizPageHeader from '../components/QuizPageHeader';
import Share from '../components/Share';
import Footer from '../components/Footer';
import QuizSample from '../QuizSamples.json';
import QuizForm from '../components/QuizForm';

class QuizTest extends Component {

    state = {
        QuizSample,
        submitted: false,
        result: {},
        labels: []
    };

    getResult(resultIndex) {
      this.setState({
        result: QuizSample.results[resultIndex]
      });
    };

    setLabels() {
      quizLabels = [];
      QuizSample.results.forEach(result => quizLabels.push(result.title));
      this.setState({
        labels: quizLabels
      });
    };

    componentDidMount() {
      this.setLabels();
    }

    render() {
        return(

            <div>
                <QuizPageHeader />
                {submitted 
                  ? <QuizForm />
                  : <Result quiz={QuizSample.quizName} result={this.state.result} labels={this.state.labels} />
                }
                <Share className="mt-5" />
                <Footer />
            </div>
        )
    }
}

export default QuizTest;
