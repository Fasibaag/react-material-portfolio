import React, {Component} from 'react';
import {connect} from 'react-redux';

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
    const {computerScienceHeading, computerScienceText,
       reactReduxCourse, advancedReactReduxCourse,
       completeReactCourse, reactNativeCourse, coursing} = this.props.lang.education;
    return (
      <div>
        <h4 style={styles.educationHeading}>{computerScienceHeading}</h4>
        <span style={styles.educationRole}>UPV | SET 06 - JUN 10</span>
        <p style={styles.educationText}>
          {computerScienceText}
        </p>

        <h4 style={styles.educationHeading}>MODERN REACT WITH REDUX</h4>
        <span style={styles.educationRole}>UDEMY.COM | APR 2016</span>
        <p style={styles.educationText}>
          {reactReduxCourse}
        </p>

        <h4 style={styles.educationHeading}>ADVANCED REACT AND REDUX</h4>
        <span style={styles.educationRole}>UDEMY.COM | APR 2016</span>
        <p style={styles.educationText}>
          {advancedReactReduxCourse}
        </p>

        <h4 style={styles.educationHeading}>THE COMPLETE REACT WEB APP DEVELOPER COURSE</h4>
        <span style={styles.educationRole}>UDEMY.COM | APR 2016</span>
        <p style={styles.educationText}>
          {completeReactCourse}
        </p>

        <h4 style={styles.educationHeading}>BUILD APPS WITH REACT NATIVE</h4>
        <span style={styles.educationRole}>UDEMY.COM | {coursing}</span>
        <p style={styles.educationText}>
          {reactNativeCourse}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lang: state.lang
});

export default connect(mapStateToProps)(EducationTitle);
