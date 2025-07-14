import React from 'react';
import './App.css';
import {WeatherForecastResource} from "./types/WeatherForcastResource";


interface State {
  forecast: WeatherForecastResource[];
}

export class WeatherForecast extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = { forecast: [] };
    }
    
    async componentDidMount() {
        //const response = await fetch('http://localhost:5027/WeatherForecast');
        const response = await fetch('http://backend-service:80');
        if (response.ok) {
        const data: WeatherForecastResource[] = await response.json();
        this.setState({ forecast: data });
        } else {
        console.error('Failed to fetch weather forecast');
        }
    }
    
    render() {
        return (
        <div className="App">
            <header className="App-header">
            <h1>Weather Forecast :-)</h1>
            <ul>
                {this.state.forecast.map((item, index) => (
                <li key={index}>
                    {item.Date} - {item.TemperatureC}°C - {item.Summary}
                </li>
                ))}
            </ul>
            </header>
        </div>
        );
    }
}

