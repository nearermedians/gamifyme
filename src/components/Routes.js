import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';

import Login from './Login';
import User from './User';
import {CheckAuth} from './Util';

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => CheckAuth()
        ? <Component {...props} />
        : <Redirect to={{pathname: '/', state: {from: props.location}, search: '?redirect='+rest.location.pathname,}} />}
    />
  )
}

const Routes = (props) =>(
	<routes>
		<Switch>
			<Route exact path='/' component={Login} />
			<PrivateRoute path='/user' component={User} />
		</Switch>
	</routes>
	)
/*TODO:
	1. Bikin supaya path ke usernya pake uid
*/
export default Routes;