import React from 'react';
import styled from 'styled-components'
import '../styles/weather-icons.min.css'
import DailyWeatherCell from './DailyWeatherCell'

// The main body of the view -- animated
/* this.props {
    daily= {temperature: xxx, icon: xxx}
    day= [Monday,Tuesday,...]
}
*/

const Container = styled.ul`
    background-color: rgba(255,255,255, 0);
    height: 450px;
    text-align: left;
    padding: 0;
`

class MainBody extends React.Component {
    renderCells(){ // skip first index as it is already rendered
        if(this.props.daily[0].icon === ""){ // check if there is response from API yet
            return (
                <div>Waiting</div>
            )
        } 

        let cells = [];
        for(let i=1; i<8; i++){
            cells.push(
                <DailyWeatherCell key={i}
                    day= {this.props.days[i]}
                    temperature= {this.props.daily[i].temperature}
                    icon= {this.props.daily[i].icon}
                />
            )
        }
        return cells
    }

    render() {
        return (
            <Container>
                {this.renderCells()}
            </Container>
        )
    }
};

export default MainBody
