var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var About = React.createClass({
  handleSearch: function (location) {
    alert(location);
  },
  render: function () {
    return (
      <div>
        <h1>Weather Components</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage/>
      </div>
    );
  }
});

module.exports = About;
