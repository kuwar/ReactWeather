var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hasHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');

ReactDOM.render(
	<Router history={hasHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Weather}/>
		</Route>
	</Router>,
	document.getElementById('app')
)
