import React, { Component } from 'react'
import styled from 'styled-components';

const TitleBox = styled.div`
  position: absolute;
  top: 0;
  left: 0
`
const TitleWrap = styled.div`
  background: rgba(70,113,122,1);
  width: 150px;
  height: 150px;
  border-radius: 120px;
  position: absolute;
  top: -75px;
  right: -75px;
`
const PageName = styled.p`
  color: #fff;
  transform: translate(75px,50px) rotate(-45deg);
  font-weight: 100;
  font-size: 14px;
`

class PageTitle extends Component {
  render() {
    return (
      <TitleBox>
        <TitleWrap>
          <PageName>{this.props.title}</PageName>
        </TitleWrap>
      </TitleBox>
    )
  }
}

export default PageTitle;