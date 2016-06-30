import React, {Component} from 'react';
import {connect} from 'react-redux';
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
    const {profileHeading, profileText} = this.props.lang.resume;
    return (
      <div style={styles.profile} className='profile'>
        <h3 style={styles.profileHeading}>{profileHeading}</h3>
        <div style={styles.profileTextContent}>
          <p style={styles.profileText}>
            {profileText}
          </p>
          <Divider />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lang: state.lang
});

export default connect(mapStateToProps)(Profile);
