import React, {Component} from 'react';
import {connect} from 'react-redux';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';

const styles = {
  skills: {
    'display': 'flex',
    'justifyContent': 'space-between',
    'margin': '40px'
  },
  skillsHeading: {
    'flex': '.3',
    'fontFamily': '"Roboto Condensed", "Helvetica Neue", Helvetica, Arial, Sans-serif',
    'fontWeight': 'bold'
  },
  skillsText: {
    'marginBottom': '40px'
  },
  skillsTextContent: {
    'flex': '1',
    'display': 'flex',
    'flexWrap': 'wrap'
  },
  chip: {
    'margin': '4px'
  }
};

const skillsData = [
  'JavaScript/ES6', 'HTML', 'CSS', 'ReactJS/Redux', 'NodeJS', 'ExpressJS', 'MongoDB', 'Webpack', 'Github'
]

class Skills extends Component {
  renderChips(data) {
    return (
      <Chip key={data} style={styles.chip}>
        {data}
      </Chip>
    );
  }

  render() {
    const {skillsHeading} = this.props.lang.skills;
    return (
      <div style={styles.skills} className='skills'>
        <h3 style={styles.skillsHeading}>{skillsHeading}</h3>
        <div style={styles.skillsTextContent}>
          {skillsData.map(this.renderChips)}
          <Divider />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lang: state.lang
});

export default connect(mapStateToProps)(Skills);
