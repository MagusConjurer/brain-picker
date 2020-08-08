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
  }

  getResult(resultIndex) {
    this.setState(state => ({
      result: state.quiz.results[resultIndex]
    }), () => {
      console.log("After getResult", this.state)
      this.setChartValues()
    });
  };

  setChartValues() {
    let labels = [];
    this.state.quiz.results.forEach(result => labels.push(result.title));
    API.getTotalResults().then(res => {
      this.setState((state, props) => ({
        chartLabels: labels,
        chartValues: res.data
      }), () => {
        console.log("After setChartValues", this.state)
      });
    })
  };

  setSubmitted() {
    this.setState(state => ({
      submitted: true
    }));
  }

  componentDidMount() {
    this.getResult(1)
    setTimeout(() => {this.setSubmitted();}, 2000);
  }

  render() {
      return(
            <div>
                <QuizPageHeader quiz={this.state.quiz} />
                {this.state.submitted 
                  ? <Result {...this.state} />
                  : this.state.quiz.questions.map(question => <QuizForm quizQuestion={question} />)
                }
                <Share className="mt-5" />
                <Footer />
            </div>
        )
    }
}

export default QuizTest;
