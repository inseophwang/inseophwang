import React, { Component } from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { FaArrowDown, FaGithub } from 'react-icons/fa';
import { Container } from '../Home'

import WorkBackground from '../../images/IMG_2390.JPG';


const Banner = styled.div`
  background-image: url(${WorkBackground});
  height: 300px;
  background-size: cover;
  background-position: center;
  position: relative;
  margin: 3em 0;

  &:hover {
    opacity: .7;
  }
`
export const BannerText = styled.h1`
  color: rgba(255,255,255,1);
  text-shadow: 2px 2px 3px rgba(0,0,0,0.1);
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  letter-spacing: .2em;
`

const BodyContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  width: 75%;
`

const Row = styled.div`
  margin: 0 0 3em;
  
  @media (min-width: 767px) {
    display: flex;
  }
`

const TitleGroup = styled.div`
  margin: 0 0 1.5em;
  @media (min-width: 767px) {
    width: 33.333%;
    margin: 0;
  }
`
const ListGroup = styled.div`
  width: 66.667%;
  
  &.mobile { 
    display: block; 
    @media (min-width: 767px) {
      display: none;
    }
  }
  &.desktop {
    display: none;
    @media (min-width: 767px) {
      display: flex;
    }
  }

  @media (min-width: 767px) {
    display: flex;
  }

`

const MobileGroup = styled.div`
  margin: 0 0 1.5em;
`
const MobileName = styled.p`
  margin: 0 0 .3em;
`
const MobileSpan = styled.span`
  display: block;
  opacity: 0.5;
  font-size: .8em;
`

const Column = styled.div`
  @media (min-width: 767px) {
    width: 50%;
  }
`

const ColH1Title = styled.h1`
  font-weight: 300;
  font-size: 24px;
  letter-spacing: 2px;
  color: #537757;
`

const BoldTitle = styled.p`
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;

  
  @media (min-width: 767px) {
    
  }
`

const ColItemWrapper = styled.div`
  display: none;

  &.showItem {
    display: block;
  }

  @media (min-width: 767px) {
    display: block;
  }
`

const ColItem = styled.p`
  font-size: 14px;
`

const TypeBold = styled.p`
  font-weight: 600;
`

const EduDesc = styled.p`
  font-weight: 300;
  font-size: 14px;
`

const GithubDiv = styled.div`
  position: relative;
  top: 25%;

  &:hover {
    opacity: .4;
  }
`


class Work extends Component {
  constructor(props) {
    super(props);
    this.showKnowList = this.showKnowList.bind(this)
    this.showUseList = this.showUseList.bind(this)

    this.state = {
      knowList: false,
      useList: false
    }
  }
  showKnowList() {
    this.setState({
      knowList: !this.state.knowList
    });
  }

  showUseList() {
    this.setState({
      useList: !this.state.useList
    });
  }
  render() {
    return(
      <Container>
        <Banner>
          <BannerText>work</BannerText>
        </Banner>

        <BodyContainer>
          <Row>
            <TitleGroup>
              <ColH1Title>Technologies</ColH1Title>
            </TitleGroup>
            
            <ListGroup>
              <Column>
                <BoldTitle onClick={() => this.showKnowList()}>I know <FaArrowDown size={12} color='#537757' /></BoldTitle>
                <ColItemWrapper className={this.state.knowList ? 'showItem' : ''}>
                  <ColItem>JavaScript</ColItem>
                  <ColItem>CSS</ColItem>
                  <ColItem>HTML</ColItem>
                  <ColItem>Amazon Web Services</ColItem>
                </ColItemWrapper>
              </Column>

              <Column>
                <BoldTitle onClick={() => this.showUseList()}>I use <FaArrowDown size={12} color='#537757' /></BoldTitle>
                <ColItemWrapper className={this.state.useList ? 'showItem' : ''}>
                  <ColItem>Node.js</ColItem>
                  <ColItem>Express.js</ColItem>
                  <ColItem>React.js</ColItem>
                </ColItemWrapper>
              </Column>
            </ListGroup>
          </Row>

          <Row>
            <TitleGroup>
              <ColH1Title>Education</ColH1Title>
            </TitleGroup>

            <ListGroup className="mobile">
              <MobileGroup>
                <MobileName>Code Immersives</MobileName>
                <MobileSpan>2019-2020 (full-stack web development)</MobileSpan>
              </MobileGroup>
              <MobileGroup>
                <MobileName>Bergen Community College</MobileName>
                <MobileSpan>2011-2013</MobileSpan>
              </MobileGroup>
              
            </ListGroup>
            
            <ListGroup className="desktop">
              <Column>
                <ColItem>Code Immersives</ColItem>
                <ColItem>Bergen Community College</ColItem>
              </Column>

              <Column>
                <ColItem>2019-2020 (full-stack web development)</ColItem>
                <ColItem>2011-2013</ColItem>
              </Column>
            </ListGroup>
          </Row>

          <Row>
            <TitleGroup>
              <ColH1Title>Code</ColH1Title>
            </TitleGroup>

            <ListGroup>
              <GithubDiv>
                <a href="https://github.com/inseophwang" target="_blank">
                  <FaGithub size={30} color='#000' />
                </a>
              </GithubDiv>
            </ListGroup>
          </Row>


          
        </BodyContainer>
      </Container>
    )
  }
}

export default Work;