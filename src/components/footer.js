import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  footer: {
    'height': '200px',
    'backgroundColor': '#F5F5F5',
    'marginTop': '40px'
  },
  'footerContent': {
    'maxWidth': '860px',
    'display': 'flex',
    'flexDirection': 'column',
    'paddingTop': '30px',
    'margin': '0 auto'
  },
  'aboutWebsite': {
    'lineHeight': '1.25',
    'fontFamily': '"Lato",Helvetica,Arial,sans-serif',
    'fontWeight': 'lighter',
    'color': '#757575',
    'fontSize': '1.2rem'
  },
  'aboutWebsiteP': {
    'color': '#2B2B2B',
	  'fontFamily': 'Roboto',
	  'fontSize': '16px',
	  'fontWeight': '300',
	  'lineHeight': '22px'
  },
  'aboutWebsiteA': {
    'color': '#2B2B2B',
	  'fontFamily': 'Roboto',
	  'fontSize': '18px',
	  'fontWeight': '300',
	  'lineHeight': '22px',
    'marginRight': '20px'
  },
  'icon': {
    'width': '1.5rem'
  }
};

class Footer extends Component {
  render() {
    const {contact, aboutWebsite, aboutWebsiteText} = this.props.lang.footer;
    return (
      <Paper className="footer" style={styles.footer}>
        <div style={styles.footerContent} className='footer-content'>
          <h2 style={styles.aboutWebsite}>{contact}</h2>
          <span>
            <a
              href='mailto:talensjr@gmail.com'
              target='_blank'>
              <FontIcon className='fa fa-envelope' style={styles.icon} hoverColor='#979797' />
              <span style={styles.aboutWebsiteA} className='about-website-a'>&nbsp;talensjr@gmail.com</span>
            </a>
            <FontIcon className='fa fa-phone' style={styles.icon} hoverColor='#979797' />
            <span style={styles.aboutWebsiteA} className='about-website-a'>&nbsp;+34 630 577 028</span>
          </span>
          <br />
          <h2 style={styles.aboutWebsite}>{aboutWebsite}</h2>
          <p style={styles.aboutWebsiteP} className='about-website-p'>
            {aboutWebsiteText}
          </p>
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang
  };
};

export default connect(mapStateToProps)(Footer);
