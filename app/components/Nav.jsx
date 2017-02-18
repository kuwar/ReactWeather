var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Nav Components</h1>
        <Link to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Get Weather</Link>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: "bold"}}>About</Link>
        <Link to="/example" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Example</Link>
      </div>
    );
  }
});

module.exports = Nav;
