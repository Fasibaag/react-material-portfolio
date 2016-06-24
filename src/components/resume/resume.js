import React, {Component} from 'react';
import Profile from './profile';
import WorkExperience from './work_experience';
import Education from './education';
import Skills from './skills';

const styles = {
  resume: {
    'maxWidth': '800px',
    'margin': '40px auto'
  },
  resumeHeading: {
    'fontFamily': '"Roboto Condensed", "Helvetica Neue", Helvetica, Arial, Sans-serif',
    'fontWeight': 'bold'
  },
  resumeHeadingContent: {
    'display': 'flex',
    'alignItems': 'center',
    'flexDirection': 'column'
  },
  contactData: {
    'fontFamily': '"ff-tisa-web-pro", Palatino, " Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif',
    'letterSpacing': '2px',
    'fontSize': '0.625rem'
  }
};

class Resume extends Component {
  render() {
    return (
      <div style={styles.resume}>
        <div style={styles.resumeHeadingContent}>
          <h1 style={styles.resumeHeading}>JORDI TALENS</h1>
          <span style={styles.contactData}>
            TALENSJR@GMAIL.COM | +34 630 577 028
          </span>
          <span style={styles.contactData}>
            VALENCIA, SPAIN
          </span>
        </div>
        <Profile />
        <WorkExperience />
        <Education />
        <Skills />
      </div>
    );
  }
}

export default Resume;
