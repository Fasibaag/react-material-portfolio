import React from 'react';
import AboutIntro from './about_intro';
import Divider from 'material-ui/Divider';
import Whoami from './whoami';
import Skills from './skills';

const styles = {
  'about': {
    'maxWidth': '860px',
    'margin': 'auto auto'
  }
};

export default () => (
  <div style={styles.about}>
    <AboutIntro />
    <Divider/>
    <Whoami />
    <Divider/>
    <Skills />
  </div>
);
