import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './pages/App';
import Login from './pages/Login';
import Main from './pages/Main';

ReactDOM.render(
  <Router history={browserHistory} >
    <Route path="/" component={App}>
      <IndexRoute component={Login} />
      <Route path="/main" component={Main} />
    </Route>
  </Router>,
  document.getElementById('root') as HTMLElement
);
