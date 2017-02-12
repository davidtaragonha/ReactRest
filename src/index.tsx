import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './pages/App';
import Login from './pages/Login';
import Main from './pages/Main';
import Specimens from './pages/Specimens';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={App}>
        <IndexRoute component={Login} />
        <Route path="main" component={Main}>
          <Route path="specimens" component={Specimens} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
