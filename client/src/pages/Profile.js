import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { UserImage, UserQuizResults, UserBio } from '../components/Test';

class Profile extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        return (
            <div>
            {/* <div style={{ height: "75vh" }} className="container valign-wrapper"> */}
                <div className="row">
                    <div className="col s12 center-align">
                    <div className='row'>
                <div className='col'>
                    <UserImage/>
                </div>
                <div className='col'>
                    <UserBio/>
                </div>

            </div>
            <UserQuizResults/>
         
                       
                        <button
                            style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem"
                            }}
                            onClick={this.onLogoutClick}
                            className="btn btn-large waves-effect waves-light hoverable"
                        >
                            Logout
            </button>
                    </div>
                </div>
            </div>
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