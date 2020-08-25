import React, { Component } from 'react';
import styled from 'styled-components';
import { Animated } from "react-animated-css";
import { Container } from '../Home'
import AboutBackground from '../../images/bnw.png';



const Background = styled.div`
background-image: url(${AboutBackground});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
  opacity: .3;
`

const Main = styled.div`
  background: rgba(83,119,87,.15);
  border-radius: 4px;
  max-width: 550px;
  font-size: 14px;
  position: absolute;
  padding: 1.5em;
  bottom: 1.5em;
  margin: 0 1.5em;

  @media (min-width: 767px) {
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    margin: 0;
    height: fit-content;
  }
`

const Copy = styled.p`
  margin: 0;
`

const Link = styled.a`
  text-decoration: none;
  color: #537757;
`


class About extends Component {
  render() {
    return(
      <Container>
        <Background></Background>
        <Main>
          <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <Copy>Hi. My name is In Seop - </Copy>
            <Copy>I am a full-stack web developer currently in Omaha, Nebraska .</Copy>
            <Copy>I am looking to transition from the military to a career in tech.</Copy>
            <Copy>In my freetime I like to garden, spend time with my wife, and travel to new places</Copy>
            <br/>
            <Copy>Cheers, </Copy>
          </Animated>


        </Main>
      </Container>
    )
  }
}

export default About;