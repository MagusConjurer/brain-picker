import React, { Component } from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  RedditIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import "./style.css";

class Share extends Component {
  render() {
    const shareUrl = "https://github.com/MagusConjurer/brain-picker";
    const title = "Pick Their Brain";

    return (
      <div className="margin">
        <FacebookShareButton url={shareUrl} quote={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} quote={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <RedditShareButton url={shareUrl} quote={title}>
          <RedditIcon size={32} round />
        </RedditShareButton>
        <WhatsappShareButton url={shareUrl} quote={title}>
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
