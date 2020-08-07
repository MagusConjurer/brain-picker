import React, { Component } from 'react';
import QuizPageHeader from '../components/QuizPageHeader';
import Share from '../components/Share';
import Footer from '../components/Footer';
import QuizSample from '../QuizSamples.json';
import QuizForm from '../components/QuizForm';
import Result from '../components/Result';

class QuizTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
        quiz: QuizSample[0],
        submitted: false,
        result: {},
        labels: []
    };
  }

  getResult(resultIndex) {
    this.setState(state => ({
      result: state.quiz.results[resultIndex]
    }), () => this.setLabels());
  };

  setLabels() {
    let quizLabels = [];
    this.state.quiz.results.forEach(result => quizLabels.push(result.title));
    this.setState({
      labels: quizLabels
    });
  };

  componentDidMount() {
    this.getResult(1);
    //this.setState({submitted: true});
  }

  render() {
      return(
          <div>
              <QuizPageHeader />
              {this.state.submitted 
                ? <Result quiz={this.state.quiz.quizName} result={this.state.result} labels={this.state.labels} />
                : <QuizForm />
              }
              <Share className="mt-5" />
              <Footer />
          </div>
      )
  }
}

export default QuizTest;
