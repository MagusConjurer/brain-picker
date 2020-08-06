import React, { Component } from 'react';
// import Navbar from '../components/Navbar';
import QuizCentralHeader from '../components/QuizCentralHeader';
import QuizCards from '../components/QuizCards';
import Share from '../components/Share';
import Footer from '../components/Footer';
import API from "../utils/API";

class Quiz extends Component {

    state = {
        quizzes: []
    };

    componentDidMount() {
        this.getQuizzes();
    }

    getQuizzes = () => {
        API.getAllQuizzes()
        .then(res =>
            // console.log(res.data),
            this.setState({
                quizzes: res.data
            })
            )
            .catch(err => console.log(err));
    };

    render() {
        return(

            <div>
                <QuizCentralHeader />
                {this.state.quizzes.map(quizzes => (
                    <QuizCards
                    id={quizzes._id}
                    title={quizzes.title}
                    category={quizzes.category}
                    />
                ))}
                <Share />
                <Footer />
            </div>
        )
    }
}

export default Quiz;