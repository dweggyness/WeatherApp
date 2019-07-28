import React from 'react';
import styled, {createGlobalStyle} from 'styled-components'
import MainBody from './MainBody'
import Footer from './Footer'
import DayTimeline from './DayTimeline'

// Draws out the weather data on the view
/* this.props.daily = [{
    temperature:
    icon:
    },{},...]

    hourly={this.state.hourly}
    summary={this.state.summary}
    date={this.state.date}
    sunTime={this.state.sunTime}
*/

const GlobalStyle = createGlobalStyle` 
    html, body {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    color: rgb(35,35,35);
    overflow-x: hidden;
    font-family: "Lato";
    background: ${props => props.day 
        ? "rgb(0,220,255)"
        : "rgb(25,34,93);"};
    background: ${props => props.day
        ? "linear-gradient(0deg, rgba(0,220,255,1) 0%, rgba(0,134,255,1) 100%)"
        : "linear-gradient(0deg, rgba(25,34,93,1) 0%, rgba(0,27,51,1) 100%);"};
}
`

const MainContainer = styled.div`
    background-color: rgba(230,230,230, 0.4);
    width: 95%;
    max-width: 600px;
    margin: 2% auto;
    text-align: center;
    border-radius: 35px;
    display: flex;
    flex-direction: column;
`

const InnerContainer = styled.div`
    display: flex;
    text-align: center;
    margin: 4% 0;
    flex-direction: column
    font-size: 3em;
`

const Text = styled.span`
    font-size: 0.5em;
    margin: 0% 5% 1.5% 5%;
`

const Icon = styled.span`
    font-size: 1.5em;
`

class WeatherView extends React.Component {
    constructor(){
        super()
        this.weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    }
    _getDays(day){ // returns a sequenced array of weekdays for the next week
        let dayArray = []; // eg if today is Tuesday, then dayArray = [Tuesday,Wednesday,...,Tuesday]
        for(let i=0;i<8;i++){
            if (day === 7){
                day = 0;
            }
            dayArray.push(this.weekdays[day])
            day += 1;
        }
        return dayArray;
    }
    render() {
        const days = this._getDays((new Date(this.props.date * 1000)).getDay())
        const changeBackground = (this.props.sunTime[1] > this.props.date > this.props.sunTime[0])
                                ? true // check if current time is before sunset and after sunrise time
                                : false; // if its TRUE, then don't change background

        return (
            <MainContainer>
                <GlobalStyle day={changeBackground} />
                <InnerContainer>
                    <Text> {days[0]} </Text>
                    <Icon className={this.props.daily[0].icon}></Icon>
                    {Math.round(this.props.daily[0].temperature)}°C
                    <Text style={{fontSize: "0.4em"}}>{this.props.summary}</Text>
                </InnerContainer>
                <DayTimeline
                    hourly={this.props.hourly}
                    date={this.props.date}
                />
                <MainBody
                    daily={this.props.daily} 
                    days={days}
                />
                <Footer />
            </MainContainer>
        )
    }
};

export default WeatherView
