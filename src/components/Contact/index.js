import React, { Component } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Container } from '../Home'
import { BannerText } from '../Work'
import ContactBackground from '../../images/IMG_2392.JPG';


const Banner = styled.div`
  margin: 3em 0;
  background-image: url(${ContactBackground});
  height: 300px;
  background-size: cover;
  background-position: center;
  position: relative;

  &:hover {
    opacity: .7;
  }
`

const ContactBody = styled.ul`
  list-style-type: none;
  font-size: 14px;
  padding: 0;
  max-width: 100px;
  margin: auto;
`


const ContactItem = styled.li`
  margin: .5em 0;
`

const Link = styled.a`
  text-decoration: none;
  color: #537757;
`

class Contact extends Component {
  render() {
    return (
      <Container>
        <Banner>
          <BannerText>contact</BannerText>
        </Banner>

        <ContactBody>
          <Link href="https://www.gmail.com">
            <ContactItem>email</ContactItem>
          </Link>
          <Link href="https://www.linkedin.com" target="_blank">
            <ContactItem>linkedin</ContactItem>
          </Link>
            
        </ContactBody>
      </Container>
    )
  }
}

export default Contact;