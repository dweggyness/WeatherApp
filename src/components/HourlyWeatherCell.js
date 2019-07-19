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
            case "clear-day":
                return 'rgba(148, 189, 255, 0.8)';
            case "rain":
                return 'rgba(115, 115, 115, 0.8)';
            case "snow":
                return 'rgba(115, 115, 115, 0.8)';
            case "partly-cloudy-day":
                return 'rgba(160, 160, 160, 0.8)';
            case "partly-cloudy-night":
                return 'rgba(160, 160, 160, 0.8)';
            default:
                return 'rgba(230,230,230, 0.8)';
        }
    }};
`

class HourlyWeatherCell extends React.Component {
    _getWidth(count){
        return (Math.round(count * 24))
    }

    _getContent(icon){
        switch(icon){
            case "clear-day":
                return 'Clear';
            case "rain":
                return 'Rain';
            case "snow":
                return 'Snow';
            case "partly-cloudy-day":
                return 'Cloudy';
            case "partly-cloudy-night":
                return 'Cloudy';
            default:
                return 'Mostly Cloudy';
        }
    };

    render(){
        const width = this._getWidth(this.props.count);
        let content = "";
        if(this.props.count >= 3){
            content = this._getContent(this.props.icon)
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