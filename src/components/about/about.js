import React from 'react';
import AboutIntro from './about_intro';
import Divider from 'material-ui/Divider';
import Whoami from './whoami';
import Skills from './skills';

const styles = {
  'about': {
    'maxWidth': '860px',
    'margin': 'auto auto'
  },
  'divider': {

  }
};

export default () => (
  <div style={styles.about}>
    <AboutIntro />
    <Divider style={styles.divider}/>
    <Whoami />
    <Divider style={styles.divider}/>
    <Skills />
  </div>
);
