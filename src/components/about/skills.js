import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Bar} from 'react-chartjs';

const barOptions = {
  scales: {
      yAxes: [{
          ticks: {
              beginAtZero:true
          }
      }]
  }
}

const styles = {
  'skills': {
    'margin': '40px'
  },
  'skillsHeading': {
    'fontSize': '4rem',
    'lineHeight': '1.2em',
    'fontFamily': '"neosans regular", "Helvetica Neue", Helvetica, Arial, Sans-serif',
    'letterSpacing': '-0.07em'
  }
};

class Skills extends Component {
  render() {
    const {skillsHeading, skills} = this.props.lang.about;
    const barData = {
      labels: ['HTML', 'CSS', 'JavaScript/ES6', 'ReactJS/Redux', 'NodeJS', 'MongoDB'],
      datasets: [
        {
            label: skillsHeading,
            backgroundColor: "rgba(24,255,255,0.2)",
            borderColor: "rgba(0,184,212,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(24,255,255,0.4)",
            hoverBorderColor: "rgba(0,184,212,1)",
            data: [100, 65, 95, 85, 80, 65]
        }
      ]
    };
    return (
      <div style={styles.skills}>
        <h3 style={styles.skillsHeading}>{skills}</h3>
        <Bar data={barData} height='200' options={barOptions} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang
  };
};

export default connect(mapStateToProps)(Skills);
