import React, {Component} from 'react';
import {connect} from 'react-redux';
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
    const {workExperienceHeading} = this.props.lang.resume;
    return (
      <div style={styles.workExperience} className='work-experience'>
        <h3 style={styles.workExperienceHeading}>{workExperienceHeading}</h3>
        <div style={styles.job}>
          <Jobs />
          <Divider />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lang: state.lang
});

export default connect(mapStateToProps)(WorkExperience);
