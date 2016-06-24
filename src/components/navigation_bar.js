import React, {Component} from 'react';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  navBar: {
    'backgroundColor': '#F5F5F5'
  },
  navigationBar: {
    'height': '50px',
    'display': 'flex',
    'justifyContent': 'space-between',
    'alignItems': 'center',
    'maxWidth': '860px',
    'margin': '0 auto',
    'padding': '0 20px',
    'textAlign': 'center'
  },
  title: {
    'color': 'black',
    'cursor': 'pointer',
    'fontSize': '1.6em',
    'width': '169px'
  },
  navigationLinks: {
    'cursor': 'pointer'
  },
  navigationLinks2: {
    'marginLeft': '35px',
    'cursor': 'pointer'
  }
};

class NavigationBar extends Component {
  render() {
    return (
      <Paper
        style={styles.navBar}
        zDepth={1}>
        <nav
          style={styles.navigationBar}
          className='navigation-bar'>
          <Link to='/'><span style={styles.title}>Jordi Talens</span></Link>
          <div>
            <Link to='/resume'><span style={styles.navigationLinks}>RESUME</span></Link>
            <Link to='/projects'><span style={styles.navigationLinks2}>PROJECTS</span></Link>
          </div>
        </nav>
      </Paper>
    );
  }
}

export default NavigationBar;
