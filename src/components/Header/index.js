import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { FaHome, FaUserCircle, FaDesktop, FaHandPeace } from 'react-icons/fa';
import { Container } from '../Home'

const Menu = styled.ul`
  list-style-type: none;
  width: 100px;
  display: flex;
  justify-content: space-between;
  margin: 1em auto;
  padding: 0;
`

const ListItem = styled.li`
  display: inline-block;

  &:hover {
    opacity: .4;
  }
`


const Header = () => (
  <Container>
    <Menu>
      <ListItem>
        <Link to="/"><FaHome size={15} color='#537757' /></Link>
      </ListItem>
      <ListItem>
        <Link to="/about"><FaUserCircle size={15} color='#537757' /></Link>
      </ListItem>
      <ListItem>
        <Link to="/work"><FaDesktop size={15} color='#537757' /></Link>
      </ListItem>
      <ListItem>
        <Link to="/contact"><FaHandPeace size={15} color='#537757' /></Link>
      </ListItem>
    </Menu>
  </Container>
  
);

export default Header;