import React, {Component} from 'react';
import {connect} from 'react-redux';

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
    const {present, hinojosaText, policeDepartmentHeading, policeDepartmentText, freelancerText} = this.props.lang.jobs;
    return (
      <div>
        <h4 style={styles.jobHeading}>HINOJOSA S.A.</h4>
        <span style={styles.jobRole}>FULL-STACK DEVELOPER | MAY 10 - DEC 10</span>
        <p style={styles.jobText}>
          {hinojosaText}
        </p>

        <h4 style={styles.jobHeading}>{policeDepartmentHeading}</h4>
        <span style={styles.jobRole}>FULL-STACK DEVELOPER | JUN 12 - AUG 12</span>
        <p style={styles.jobText}>
          {policeDepartmentText}
        </p>

        <h4 style={styles.jobHeading}>FREELANCER</h4>
        <span style={styles.jobRole}>FULL-STACK DEVELOPER | OCT 12 - {present}</span>
        <p style={styles.jobText}>
          {freelancerText}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lang: state.lang
});

export default connect(mapStateToProps)(Jobs);
