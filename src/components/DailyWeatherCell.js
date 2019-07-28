import React from 'react';
import styled, { keyframes } from 'styled-components'
import '../styles/weather-icons.min.css'

const fadeIn = keyframes`
    0% { 
        opacity: 0;
        transform: translateY(250px);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
`
const Cell = styled.li`
    display: flex;
    animation: ${fadeIn} 1.75s ease-out;
    list-style: none;
    padding: 0;
    margin: 5px auto;
    height: 40px;
    width: 90%;
    background-color: rgba(230,230,230, 0.4);
    border-radius: 7px;
    align-items: center;
    font-size: 1.25em;
    font-family: "Open Sans";
`

const Day = styled.span`
    margin-left: 3%;
    width: 42%;
`

const Icon = styled.i`
    font-size: 1.5em;
    width: 41%;
    align-items: center;
    justify-contents: center;
`

class DailyWeatherCell extends React.Component {
    render(){
        return (
            <Cell>
                <Day>{this.props.day}</Day>
                <Icon className={this.props.icon}></Icon>
                <span>{Math.round(this.props.temperature)}°C</span>
            </Cell>
        )
    }
}

export default DailyWeatherCell