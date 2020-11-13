import React, { Component } from 'react';
import QuizPageHeader from '../components/QuizPageHeader';
import Share from '../components/Share';
import Footer from '../components/Footer';
import QuizSample from '../QuizSamples.json';
import QuizForm from '../components/QuizForm';
import Result from '../components/Result';
import API from '../utils/API';

class QuizTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
        quiz: QuizSample[0],
        submitted: false,
        result: {},
        chartLabels: [],
        chartValues: []
    };

    this.getResult = this.getResult.bind(this);
    this.setChartValues = this.setChartValues.bind(this);
    this.setSubmitted = this.setSubmitted.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  getResult(resultIndex) {
    this.setState(state => ({
      result: state.quiz.results[resultIndex]
    }), ()  => {this.setChartValues()});
  };

  setChartValues() {
    let labels = [];
    this.state.quiz.results.forEach(result => labels.push(result.title));
    API.getTotalResults().then(res => {
      this.setState((state, props) => ({
        chartLabels: labels,
        chartValues: res.data
      }));
    })
  };

  setSubmitted() {
    this.setState(state => ({
      submitted: true
    }));
  }

  handleSubmitClick(e, selected) {
    e.preventDefault();
    console.log(selected);
    this.getResult(3);
    setTimeout(() => {this.setSubmitted();}, 2000);
  }

  render() {
      return(
            <div>
                <QuizPageHeader quiz={this.state.quiz} />
                {this.state.submitted 
                  ? <Result {...this.state} />
                  : <QuizForm quizQuestions={this.state.quiz.questions} clickHandler={this.handleSubmitClick}/>
                }
                <Share />
                <Footer />
            </div>
        )
    }
}

export default QuizTest;
