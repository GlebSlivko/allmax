import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ListPage from './components/list/ListPage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={ListPage} />
	</Route>
);