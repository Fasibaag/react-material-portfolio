import React, {Component} from 'react';

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
    return (
      <div style={styles.whoami}>
        <div>
          <h3 style={styles.whoamiHeading}>about me</h3>
          <p style={styles.whoamiP}>
            I've been coding as a freelancer for more than 4 years, and I have always been discovering and learning
            the newest and coolest JavaScript tools and frameworks, always trying to be better. I like to code
            as perfect as I can, both in performance and beauty of my code.
          </p>
        </div>
      </div>
    );
  }
}

export default Whoami;
