var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var About = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Weather Components</h1>
        <WeatherForm/>
        <WeatherMessage/>
      </div>
    );
  }
});

module.exports = About;
