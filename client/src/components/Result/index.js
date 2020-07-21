import React from 'react';

class Result extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <span className="card-title">Quiz Name</span>
          <h5>Result Title</h5>
          <div className="row">
            <div className="card-image">
              <img className="col s4" src="https://picsum.photos/200" alt="placeholder" />
            </div>
            <p className="col s8">Result description</p>
          </div>
          <div className="row">
            <p className="col s3">Compare Your Results <i className="activator material-icons right">more_vert</i></p>
          </div>
        </div>
        <div className="card-reveal">
          <span className="card-title">Quiz Name<i className="material-icons right">close</i></span>
          <p>Include the chart of results to compare</p>
        </div>
      </div>
    )
  }
}

export default Result;