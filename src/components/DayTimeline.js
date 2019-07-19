import React from 'react';
import styled from 'styled-components'
import HourlyWeatherCell from './HourlyWeatherCell'
import HourlyTempCell from './HourlyTempCell'

/*
    this.props.hourly = {
        temperature: xxx,
        icon: xxx, (darkSky format)
    }
*/
const Wrapper = styled.div`
    margin: 0 12px;
    display: flex;
    flex-wrap: wrap;
    overflow-x: auto;
    overflow-y: hidden;
    &:scrolling-wrapper {
        -webkit-overflow-scrolling: touch;
      }
`

const HorFlex = styled.div`
    display: flex;
`

class DayTimeline extends React.Component {
    renderCells(){
        if(this.props.hourly[0].icon === ""){ // check if there is response from API yet
            return (
                <div></div>
            )
        }; 

        let cells = []; // function to form an array of cells where consecutive ones are merged
        let temp = [];
        let count = 0;
        for(let i=0; i<=24; i++){
            let icon = this.props.hourly[i].icon // nab current icon
            temp.push(icon); // add in the current forecast into temp
            count++;

            if(i === 0){ // first item
                continue;
            }

            if(icon !== temp[i - 1]) { // different hourly forecast, push old one in and reset counter
                cells.push(
                    <HourlyWeatherCell key={i}
                        icon= {temp[i - 1]}
                        count= {count - 1}
                    />
                );
                count = 0;
            }

            if(i === 24 && count > 0){ // last item but still haven't pushed in
                cells.push(
                    <HourlyWeatherCell key={i}
                        icon= {icon}
                        count= {count}
                    />
                );
            }
        }
        return cells
    }

    renderTemp(curHour){
        if(this.props.hourly[0].temperature === 0){ // check if there is response from API yet
            return (
                <div></div>
            )
        }; 

        let temps = [];
        for(let i=0; i<24; i++){
            let temp = Math.round(this.props.hourly[i].temperature) + '°C'
            let time = ""
            if(curHour > 24){
                curHour -= 24;
            }
            if(curHour > 12){
                time = (curHour - 12) + 'pm'
            } else {
                time = curHour + 'am'
            }
            curHour++;

            if(i === 0){ // first time tick is 'Now'
                temps.push(
                    <HourlyTempCell key={i}
                        content= "Now"
                        temperature= {temp}
                    />
                )
                continue;
            }

            if(i % 2 === 0){ // even time tick, show temp & time
                temps.push(
                    <HourlyTempCell key={i}
                        content= {time}
                        temperature= {temp}
                    />
                )
            } else {
                temps.push(
                    <HourlyTempCell key={i} 
                        content= ""
                        temperature= ""
                    />
                )
            };
        }
        return temps
    }


    render(){
        const curHour = (new Date(this.props.date * 1000)).getHours()
        return (
            <Wrapper>
                <HorFlex>{this.renderCells()}</HorFlex>
                <HorFlex>{this.renderTemp(curHour)}</HorFlex>
            </Wrapper>
        )
    }
};

export default DayTimeline