import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory, useBasename } from 'history'
import Container from './containers/Container';
import Home from './containers/Home';


const history = useBasename(createHistory)({
  basename: '/'
})

// <Route name='signin' path='/signin' component={UserPage} />

render(
	<Router>
        <Route name='index' path='/' component={Container}>
        	<IndexRoute component={Home}/>
        </Route>
    </Router>
    ,
    document.getElementById('sd-main-app-container')
);
