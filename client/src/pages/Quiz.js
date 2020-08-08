import React, { Component } from 'react';
import QuizPageHeader from '../components/QuizPageHeader';
import Share from '../components/Share';
import Footer from '../components/Footer';
import QuizSample from '../QuizSamples.json';
import QuizForm from '../components/QuizForm';
import SubmitBtn from '../components/SubmitBtn';
import Result from '../components/Result';
import API from '../utils/API';


let buttonClicked = false;

class QuizTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
        quiz: QuizSample[0],
        submitted: false,
        result: {},
        chartLabels: [],
        chartValues: [],
        buttonClicked: false
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

  handleClick(e) {
    e.preventDefault();
    console.log('The button was clicked.');
    this.setState(state => ({
      buttonClicked: true
    }));
  };
  
  

  setSubmitted() {
    this.setState(state => ({
      submitted: true
    }));
  }

<<<<<<< HEAD
  somethingHappened() {
    console.log("it happened");
    this.getResult(2)
    setTimeout(() => {
      this.setSubmitted()
    }, 2000);
    
=======
  handleSubmitClick(e) {
    e.preventDefault();
    this.getResult(3);
    setTimeout(() => {this.setSubmitted();}, 2000);
>>>>>>> d40a289bc9db9e9f74e6f13d9efaee6c7f6d0aac
  }

  

  render() {
      return(
            <div>
                <QuizPageHeader quiz={this.state.quiz} />
                {this.state.submitted 
                  ? <Result {...this.state} />
                  : this.state.quiz.questions.map((question, index) => <QuizForm key={index} quizQuestion={question} /> )
                }
                <SubmitBtn clickHandler={this.handleSubmitClick} />
                <Share />
                <Footer />
            </div>
        )
    }
}


export default QuizTest;
