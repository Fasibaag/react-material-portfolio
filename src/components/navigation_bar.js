import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {setEnglishLang, setSpanishLang} from '../actions';
import Paper from 'material-ui/Paper';

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
    'textTransform': 'uppercase',
    'cursor': 'pointer'
  },
  navigationLinks2: {
    'textTransform': 'uppercase',
    'marginLeft': '35px',
    'cursor': 'pointer'
  },
  navigationLinks3: {
    'textTransform': 'uppercase',
    'marginLeft': '15px',
    'cursor': 'pointer'
  }
};

class NavigationBar extends Component {
  render() {
    const {resume, projects} = this.props.lang.navigationBar;
    return (
      <Paper
        style={styles.navBar}
        zDepth={1}>
        <nav
          style={styles.navigationBar}
          className='navigation-bar'>
          <Link to='/'><span style={styles.title}>Jordi Talens</span></Link>
          <div>
            <Link to='/resume'><span style={styles.navigationLinks}>{resume}</span></Link>
            <Link to='/projects'><span style={styles.navigationLinks2}>{projects}</span></Link>
            <span style={styles.navigationLinks2} onClick={this.props.setEnglishLang}><img src='../../assets/img/eng_lang.png' /></span>
            <span style={styles.navigationLinks3} onClick={this.props.setSpanishLang}><img src='../../assets/img/spa_lang.gif' /></span>
          </div>
        </nav>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang
  };
};

export default connect(mapStateToProps, {setEnglishLang, setSpanishLang})(NavigationBar);
