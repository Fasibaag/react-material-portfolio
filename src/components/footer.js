import React, {Component} from 'react';
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
    return (
      <Paper className="footer" style={styles.footer}>
        <div style={styles.footerContent} className='footer-content'>
          <h2 style={styles.aboutWebsite}>Contact</h2>
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
          <h2 style={styles.aboutWebsite}>About this Website</h2>
          <p style={styles.aboutWebsiteP} className='about-website-p'>
            This website has been designed and coded by me from the ground up,&nbsp;
            using awesome&nbsp;
            <a href='https://facebook.github.io/react/' target='_blank'>ReactJS</a>/
            <a href='https://github.com/reactjs/redux' target='_blank'>Redux</a> and JavaScript&nbsp;
            <a href='https://babeljs.io/' target='_blank'>Babel/ES6</a> ecosystem, all bundled using&nbsp;
            <a href='https://webpack.github.io/' target='_blank'>Webpack</a> and hosted on&nbsp;
            <a href='https://www.heroku.com/home' target='_blank'>Heroku</a>.
          </p>
        </div>
      </Paper>
    );
  }
}

export default Footer;
