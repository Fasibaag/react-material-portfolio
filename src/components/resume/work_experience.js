import React, {Component} from 'react';
import Jobs from './jobs';
import Divider from 'material-ui/Divider';

const styles = {
  workExperience: {
    'display': 'flex',
    'justifyContent': 'space-between',
    'margin': '40px'
  },
  workExperienceHeading: {
    'flex': '.3',
    'fontFamily': '"Roboto Condensed", "Helvetica Neue", Helvetica, Arial, Sans-serif',
    'fontWeight': 'bold',
    'marginBottom': '15px'
  },
  job: {
    'flex': '1',
    'display': 'flex',
    'flexDirection': 'column'
  }
};

class WorkExperience extends Component {
  render() {
    return (
      <div style={styles.workExperience} className='work-experience'>
        <h3 style={styles.workExperienceHeading}>WORK EXPERIENCE</h3>
        <div style={styles.job}>
          <Jobs />
          <Divider />
        </div>
      </div>
    );
  }
}

export default WorkExperience;
