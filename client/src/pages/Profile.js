import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { UserImage, UserBio, Row, Col } from '../components/Test';
import QuizSample from '../QuizSamples.json';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz: QuizSample[0],
            submitted: false,
            result: {},
            chartLabels: [],
            chartValues: []
        };
    }

      getResult(resultIndex) {
        this.setState(state => ({
          result: state.quiz.results[resultIndex]
        }));
      };

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        return (
            <>

            <div className="section z-depth-2" style={{ backgroundColor: 'white', marginBottom: '40px'}}>
            <Row>
                <Col>
                    <UserImage />
                </Col>
                <Col>
                    <UserBio />
                </Col>
            </Row>
            </div>

            <div className="section z-depth-2" style={{ backgroundColor: 'white', marginBottom: '40px', padding: '8px' }}>
                <Row><h4>Your Results:</h4></Row>
                <hr/>
                
                <Row>
                    <Col>
                        <img src={this.state.quiz.image} className="quizImg z-depth-2" alt="idk" />
                    </Col>
                    <Col>
                        <p style={{ fontWeight: 'bold' }}>{this.state.quiz.quizName}</p>
                        <p><em>{this.state.quiz.description}</em></p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <img src={this.state.quiz.results[3].image} alt={this.state.quiz.results[3].title} className="quizImg z-depth-2" />
                    </Col>
                    <Col>
                        <p>{this.state.quiz.results[3].description}</p>
                    </Col>
                </Row>
            </div>


            
            <button
                style={{ width: "150px", borderRadius: "3px", letterSpacing: "1.5px", marginTop: "1rem" }}
                    onClick={this.onLogoutClick}
                    className="btn btn-large waves-effect waves-light hoverable" >
                    Logout
            </button>
            </>
        );
    }
}


Profile.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Profile);
