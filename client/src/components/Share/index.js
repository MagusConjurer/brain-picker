import React, { Component } from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import "./style.css";

class Share extends Component {
  render() {
    const shareUrl = "https://pick-their-brain.herokuapp.com/";
    const title = "Pick Their Brain"; 

    return (
      <div className="margin">
        <p>Share <b>Pick Their Brain</b> on Social Media!</p>
        <FacebookShareButton url={shareUrl} quote={title} className="shareIcon">
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} quote={title} className="shareIcon">
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <RedditShareButton url={shareUrl} quote={title} className="shareIcon">
          <RedditIcon size={32} round />
        </RedditShareButton>
        <LinkedinShareButton url={shareUrl} quote={title} className="shareIcon">
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <WhatsappShareButton url={shareUrl} quote={title} className="shareIcon">
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <EmailShareButton url={shareUrl} quote={title}>
          <EmailIcon size={32} round />
        </EmailShareButton>
      </div>
    );
  }
}

export default Share;
