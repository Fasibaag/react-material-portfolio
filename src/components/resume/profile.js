import React, {Component} from 'react';
import Divider from 'material-ui/Divider';

const styles = {
  profile: {
    'display': 'flex',
    'justifyContent': 'space-between',
    'margin': '40px'
  },
  profileHeading: {
    'flex': '.3',
    'fontFamily': '"Roboto Condensed", "Helvetica Neue", Helvetica, Arial, Sans-serif',
    'fontWeight': 'bold'
  },
  profileText: {
    'marginBottom': '40px'
  },
  profileTextContent: {
    'flex': '1',
    'display': 'flex',
    'flexDirection': 'column'
  }
};

class Profile extends Component {
  render() {
    return (
      <div style={styles.profile} className='profile'>
        <h3 style={styles.profileHeading}>PROFILE</h3>
        <div style={styles.profileTextContent}>
          <p style={styles.profileText}>
            Since last 4 years, I've been coding just JavaScript, and always have been
            up to date on its new features, learning both with free resources and paid courses.<br />
            Lately I've been focused on frontend development with ReactJS, although
            I always build my own backend with NodeJS/ExpressJS and MongoDB.
            I like to follow the best practices and the advices of the best JavaScript programmers of the world.
          </p>
          <Divider />
        </div>
      </div>
    );
  }
}

export default Profile;
