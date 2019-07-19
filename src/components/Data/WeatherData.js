import React from 'react';
import WeatherView from '../WeatherView'

// Component to find out weather data about location that was passed to it

// props.latitude && props.longitude //

class WeatherData extends React.Component {
    constructor(){
        super();
        this.state = {
            summary: "",
            daily: [{
                temperature: 0,
                icon: "",
            }],
            hourly: [{
                temperature: 0,
                icon: "",
            }],
            date: "0",
            sunTime: [0,0]
        }
    }
    componentDidMount(){
        let location = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/48d4a66fa6056feaac3a6a1775d401e4/"
        location += this.props.latitude + "," + this.props.longitude + "?units=auto"

        fetch(location) // get weather data from DarkSky
        .then(results => {
            return results.json()
        }).then(data => {
            let daily = data.daily.data.map((day) => { // create an object array of weather data for next week incl today
                return {
                    temperature: (day.temperatureHigh + day.temperatureLow) / 2,
                    icon: this._getIcon(day.icon)
                }
            });
            let hourly = data.hourly.data.map((hour) => {
                return {
                    temperature: hour.temperature,
                    icon: hour.icon
                }
            });

            daily[0].temperature = data.currently.temperature; // update today's temp with a more accurate one
            daily[0].icon = this._getIcon(data.currently.icon);

            this.setState({
                daily: daily, 
                hourly: hourly,
                summary: data.hourly.summary, 
                date: data.currently.time,
                sunTime: [data.daily.data[0].sunriseTime,data.daily.data[0].sunsetTime]
            })
        })
    }
    
    _getIcon(icon){ // converts API icon data into our CSS icon
        switch(icon){
            case "clear-day":
                return "wi wi-day-sunny";
            case "rain":
                return "wi wi-rain";
            case "snow":
                return "wi wi-snow";
            case "partly-cloudy-day":
                return "wi wi-day-sunny-overcast";
            case "partly-cloudy-night":
                return "wi wi-night-partly-cloudy";
            default:
                return "wi wi-cloud";
        }
    }

    render() {
        return (
            <WeatherView 
                daily={this.state.daily}
                hourly={this.state.hourly}
                summary={this.state.summary}
                date={this.state.date}
                sunTime={this.state.sunTime}
            />
        )
    }
};

export default WeatherData
