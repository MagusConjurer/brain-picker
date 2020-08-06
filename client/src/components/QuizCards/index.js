import React from "react";
import "./style.css";
// import { checkPropTypes } from "prop-types";

function QuizCards(props) {
  return (
    <div class="card cardWidth sticky-action">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="https://cloud.mysteryscience.com/image/fetch/c_fill,f_auto,q_auto/https://www.dropbox.com/s/hnsgawcap2ket3f/InvisibleForcesM2-Thumbnail-1920x1080.png%3Fdl%3D1" alt=" "></img>
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">
          {props.title}<i class="material-icons right">more_vert</i>
        </span>
        <p>
          <a href="https://github.com/MagusConjurer/brain-picker">This is a link</a>
        </p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">
          {props.title}<i class="material-icons right">close</i>
        </span>
        <p>
          {props.category}
        </p>
      </div>
    </div>
  );
}

export default QuizCards;
