import React from 'react';
import styled from 'styled-components'
import {GoMarkGithub} from 'react-icons/go'

// Footer

const Container = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 35px;
    justify-content: space-around;
    align-items: center;
`

const Button = styled.a`
    color: black;
    text-decoration: none;
    transition: 0.3s;
    border-radius: 7px;
    align-items: center;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        background: rgba(255,255,255, 0.1);
    }
`

class Footer extends React.Component {
    render(){
        return (
            <Container>
                <Button href="https://darksky.net/poweredby/">Powered by DarkSky</Button>
                <span>
                    <Button href="https://www.google.com">
                        <GoMarkGithub/> Github
                    </Button>
                </span>
            </Container>
        )
    }
}

export default Footer