import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  'aboutIntro': {
    'display': 'flex',
    'flexWrap': 'wrap',
    'maxWidth': '860px',
    'margin': '40px auto'
  },
  'shortDescription': {
    'color': '#2B2B2B',
	  'fontFamily': 'Roboto',
	  'fontSize': '30px',
	  'fontWeight': '300',
	  'lineHeight': '38px'
  },
  'shortSecondDescription': {
    'color': '#666666',
	  'fontFamily': 'Roboto',
	  'fontSize': '20px',
	  'fontWeight': '300',
	  'lineHeight': '28px'
  },
  'descriptions': {
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center',
    'flex': '1'
  },
  'avatarSocial': {
    'display': 'flex',
    'flexDirection': 'column',
    'marginRight': '60px'
  },
  'social': {
    'display': 'flex',
    'justifyContent': 'space-between',
    'width': '150px',
    'margin': '15px auto'
  },
  avatar: {
    'width': '250px',
    'height': '250px',
    'backgroundImage': 'url("../assets/img/rsz_jordi2.jpg")',
    'backgroundSize': 'cover',
    'backgroundPosition': '4px -25px'
  }
};

class AboutIntro extends Component {
  render() {
    return (
      <div style={styles.aboutIntro} className='about-intro'>
        <div style={styles.avatarSocial} className='avatar-social'>
          <Paper circle={true} style={styles.avatar}/>
          <div style={styles.social}>
            <a href='https://www.facebook.com/jjtalens' target='_blank'><FontIcon className='fa fa-facebook-official' color='#365899' hoverColor='#ADBAD5' /></a>
            <a href='https://twitter.com/talensjr' target='_blank'><FontIcon className='fa fa-twitter' color='#1da1f2' hoverColor='#A2D9FA' /></a>
            <a href='https://github.com/talensjr' target='_blank'><FontIcon className='fa fa-github' hoverColor='#979797' /></a>
            <a href='https://es.linkedin.com/in/jorditalens' target='_blank'><FontIcon className='fa fa-linkedin-square' color='#069' hoverColor='#97C1D5' /></a>
          </div>
        </div>
        <div style={styles.descriptions}>
          <p style={styles.shortDescription}>I'm a FullStack JavaScript developer, specialized on ReactJS, from Valencia, Spain</p>
          <p style={styles.shortSecondDescription}>I also know how to structure things with HTML, make them a bit nicer using CSS, share code with GitHub, and compile and bundle my projects with Webpack</p>
        </div>
      </div>
    );
  }
}

export default AboutIntro;
