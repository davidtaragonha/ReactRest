import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../pages/App';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Specimens from '../pages/Specimens';
import Groups from '../pages/Groups';

export default (
    <Route path="/" component={App}>
      <IndexRoute component={Login} />
      <Route path="main" component={Main}>
        <Route path="specimens" component={Specimens} />
        <Route path="groups" component={Groups} />
      </Route>
    </Route>
  );
