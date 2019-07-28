import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    flex: 0 0 auto;
    height: 40px;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    font-family: "Lato";

    width: ${props => {
        return (props.width + 'px');
    }};
    background: ${props => {
        const icon = props.icon;
        switch(icon){
            case "Clear":
                return 'rgba(148, 189, 255, 0.8)';
            case "Rain":
                return 'rgba(115, 115, 115, 0.8)';
            case "Snow":
                return 'rgba(115, 115, 115, 0.8)';
            case "Cloudy":
                return 'rgba(160, 160, 160, 0.8)';
            default:
                return 'rgba(230, 230, 230, 0.8)';
        }
    }};
`

class HourlyWeatherCell extends React.Component {
    _getWidth(count){
        return (Math.round(count * 24))
    }

    render(){
        const width = this._getWidth(this.props.count);
        let content = "";
        if(this.props.count >= 3){
            content = this.props.icon;
        }
        return (
            <Card 
                width={width}
                icon={this.props.icon}
            >{content}
            </Card>
        )
    }
}

export default HourlyWeatherCell