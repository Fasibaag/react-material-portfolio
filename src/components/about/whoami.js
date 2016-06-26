import React, {Component} from 'react';
import {connect} from 'react-redux';

const styles = {
  whoami: {
    'margin': '40px',
    'display': 'flex',
    'justifyContent': 'center'
  },
  'whoamiHeading': {
    'fontSize': '4rem',
    'lineHeight': '1.2em',
    'fontFamily': '"neosans regular", "Helvetica Neue", Helvetica, Arial, Sans-serif',
    'letterSpacing': '-0.07em'
  },
  'whoamiP': {
    'color': '#2B2B2B',
	  'fontFamily': 'Roboto',
	  'fontSize': '20px',
	  'fontWeight': '300',
	  'lineHeight': '28px'
  }
}

class Whoami extends Component {
  render() {
    const {whoamiHeading, whoami} = this.props.lang.about;
    return (
      <div style={styles.whoami}>
        <div>
          <h3 style={styles.whoamiHeading}>{whoamiHeading}</h3>
          <p style={styles.whoamiP}>
            {whoami}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang
  };
};

export default connect(mapStateToProps)(Whoami);
