import React, {Component} from 'react';
import {connect} from 'react-redux';
import Divider from 'material-ui/Divider';
import EducationTitle from './education_title';

const styles = {
  education: {
    'display': 'flex',
    'justifyContent': 'space-between',
    'margin': '40px'
  },
  educationHeading: {
    'flex': '.3',
    'fontFamily': '"Roboto Condensed", "Helvetica Neue", Helvetica, Arial, Sans-serif',
    'fontWeight': 'bold',
    'marginBottom': '15px'
  },
  educationTitle: {
    'flex': '1',
    'display': 'flex',
    'flexDirection': 'column'
  }
};

class Education extends Component {
  render() {
    const {education} = this.props.lang.resume;
    return (
      <div style={styles.education} className='work-experience'>
        <h3 style={styles.educationHeading}>{education}</h3>
        <div style={styles.educationTitle}>
          <EducationTitle />
          <Divider />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lang: state.lang
});

export default connect(mapStateToProps)(Education);
