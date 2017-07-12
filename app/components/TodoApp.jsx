var React = require('react');

var TodoApp = React.createClass({
  render: function() {
    return (
      <div>
        <div className="row">
          <div className="columns medium-6 large-5 small-centered">
            <h1>React is up and running...</h1>
          </div>
        </div>
      </div>
    )
  }
)};

module.exports = TodoApp;
