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
  }

  getResult(resultIndex) {
    this.setState(state => ({
      result: state.quiz.results[resultIndex]
    }));
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

  somethingHappened() {
    console.log("it happened");
    this.getResult(2)
    setTimeout(() => {
      this.setSubmitted()
    }, 2000);
    
  }

  

  render() {
      return(
            <div>
                <QuizPageHeader quiz={this.state.quiz} />
                {this.state.submitted 
                  ? <Result {...this.state} />
                  : this.state.quiz.questions.map((question, index) => <QuizForm key={index} quizQuestion={question} /> )
                }
                <SubmitBtn />
                <Share />
                <Footer />
            </div>
        )
    }
}


export default QuizTest;
