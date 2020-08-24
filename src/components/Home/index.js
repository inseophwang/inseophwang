import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Animated } from "react-animated-css";


export const Container = styled.div`
`

const Name = styled.h1`
  color: rgba(70, 113, 122, 1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const LastName = styled.span`
  color: rgba(70, 113, 122, .75)
`


class Home extends Component {
  render() {
    return(
      <Container>
        <Link to="/about">
          <Name>
            <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
                inseop
                <LastName>hwang</LastName>.
            </Animated>
          </Name>
        </Link>
      </Container>
    )
  }
}

export default Home;