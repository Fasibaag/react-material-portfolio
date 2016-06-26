import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import {setEnglishLang, setSpanishLang} from './actions';

import App from './components/app';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Projects from './components/projects/projects';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);
if (navigator.language.indexOf('es') > -1) {
  store.dispatch(setSpanishLang());
} else {
  store.dispatch(setEnglishLang());
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={About} />
        <Route path='/resume' component={Resume} />
        <Route path='/projects' component={Projects} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('#root'));
