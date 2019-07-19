import React from 'react';
import styled from 'styled-components'

const Tick = styled.div`
    height: 5px;
    width: 23px;
    border-left: 1px solid rgb(45,45,45);
`
const Cell = styled.span`
    display: flex;
    flex-direction: column;
    font-size: 0.6em;
`

class HourlyTempCell extends React.Component {
    render(){
        return (
            <Cell>
                <Tick />
                <span>{this.props.content}</span>
                <span>{this.props.temperature}</span>
            </Cell>
        )
    }
}

export default HourlyTempCell