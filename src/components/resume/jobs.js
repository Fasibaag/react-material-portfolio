import React, {Component} from 'react';

const styles = {
  jobHeading: {
    'fontFamily': '"Roboto Condensed", "Helvetica Neue", Helvetica, Arial, Sans-serif',
    'fontWeight': 'bold',
    'marginBottom': '-5px'
  },
  jobText: {
    'marginBottom': '40px',
    'marginTop': '10px'
  },
  jobRole: {
    'fontFamily': '"ff-tisa-web-pro", Palatino, " Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif',
    'letterSpacing': '2px',
    'fontSize': '0.625rem'
  }
};

class Jobs extends Component {
  render() {
    return (
      <div>
        <h4 style={styles.jobHeading}>HINOJOSA S.A.</h4>
        <span style={styles.jobRole}>FULL-STACK DEVELOPER | MAY 10 - DEC 10</span>
        <p style={styles.jobText}>
          Develop a web application for the commercials of the company,
          to keep track of who they offered which product and the acceptance of it.
        </p>

        <h4 style={styles.jobHeading}>POLICE DEPARTMENT</h4>
        <span style={styles.jobRole}>FULL-STACK DEVELOPER | JUN 12 - AUG 12</span>
        <p style={styles.jobText}>
          Fix bugs and develop new features to an internal application
          for the police department management and administration.
        </p>

        <h4 style={styles.jobHeading}>FREELANCER</h4>
        <span style={styles.jobRole}>FULL-STACK DEVELOPER | OCT 12 - PRESENT</span>
        <p style={styles.jobText}>
          Build web applications with the newest technologies on the market,
          on top of JavaScript awesome coding language.
        </p>
      </div>
    );
  }
}

export default Jobs;
