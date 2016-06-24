import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationBar from './navigation_bar';
import Footer from './footer';

const styles = {
  main: {
    'minHeight': '63vh'
  }
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <NavigationBar />
          <div style={styles.main}>
            {this.props.children}
          </div>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
