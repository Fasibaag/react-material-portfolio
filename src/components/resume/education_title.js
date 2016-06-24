import React, {Component} from 'react';

const styles = {
  educationHeading: {
    'fontFamily': '"Roboto Condensed", "Helvetica Neue", Helvetica, Arial, Sans-serif',
    'fontWeight': 'bold',
    'marginBottom': '-5px'
  },
  educationText: {
    'marginBottom': '40px',
    'marginTop': '10px'
  },
  educationRole: {
    'fontFamily': '"ff-tisa-web-pro", Palatino, " Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif',
    'letterSpacing': '2px',
    'fontSize': '0.625rem'
  }
};

class EducationTitle extends Component {
  render() {
    return (
      <div>
        <h4 style={styles.educationHeading}>COMPUTER SCIENCE</h4>
        <span style={styles.educationRole}>UPV | SET 06 - JUN 10</span>
        <p style={styles.educationText}>
          Computer Science management career.
        </p>

        <h4 style={styles.educationHeading}>MODERN REACT WITH REDUX</h4>
        <span style={styles.educationRole}>UDEMY.COM | APR 2016</span>
        <p style={styles.educationText}>
          A React / Redux course from Udemy.com website.
        </p>

        <h4 style={styles.educationHeading}>ADVANCED REACT AND REDUX</h4>
        <span style={styles.educationRole}>UDEMY.COM | APR 2016</span>
        <p style={styles.educationText}>
          An advanced React / Redux course from Udemy.com website.
        </p>

        <h4 style={styles.educationHeading}>THE COMPLETE REACT WEB APP DEVELOPER COURSE</h4>
        <span style={styles.educationRole}>UDEMY.COM | APR 2016</span>
        <p style={styles.educationText}>
          A React / Redux and its ecosystem course from Udemy.com website.
        </p>

        <h4 style={styles.educationHeading}>BUILD APPS WITH REACT NATIVE</h4>
        <span style={styles.educationRole}>UDEMY.COM | COURSING</span>
        <p style={styles.educationText}>
          A React Native course from Udemy.com
        </p>
      </div>
    );
  }
}

export default EducationTitle;
