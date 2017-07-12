var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// APP CUSTOM STYLESHEETS
//require('style!css!sass!AppStyles');

ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app')
);
