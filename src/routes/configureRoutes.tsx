import * as React from 'react';
import { Route, IndexRoute, RouterState, RedirectFunction } from 'react-router';
import App from '../pages/App';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Specimens from '../pages/Specimens';
import Groups from '../pages/Groups';

function requireAuth(nextState: RouterState, replace: RedirectFunction) {
  console.log(nextState);
  if (true) {
    /*
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
    */
  }
}

export default (
    <Route path="/" component={App}>
      <IndexRoute component={Login} />
      <Route path="main" component={Main} onEnter={requireAuth}>
        <Route path="specimens" component={Specimens} />
        <Route path="groups" component={Groups} />
      </Route>
    </Route>
  );
