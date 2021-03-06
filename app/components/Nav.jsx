var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function (evt) {
    evt.preventDefault();

    var location = this.refs.location.value;
    var encodedLocation = encodeURIComponent(location);

    if (location && location.length > 0) {
      this.refs.location.value = "";
      // Redirect to home page
      window.location.hash = "#/?location="+encodedLocation;
    }
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: "bold"}}>About</Link>
            </li>
            <li>
              <Link to="/example" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Example</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="text" ref="location" placeholder="Search weather by city"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
