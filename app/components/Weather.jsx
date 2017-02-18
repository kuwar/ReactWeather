var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var About = React.createClass({
  getInitialState: function () {
    return ({
      location: "Miame",
      temp: 88
    });
  },
  handleSearch: function (location) {
    this.setState({
      location: location,
      temp: 23
    });
  },
  render: function () {
    var {temp, location} = this.state;
    return (
      <div>
        <h1>Weather Components</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage temp={temp} location={location}/>
      </div>
    );
  }
});

module.exports = About;
