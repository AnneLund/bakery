import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {MainNav} from './MainNav.styled'
import {useState, useEffect} from 'react'
import styled from "styled-components";
import useIsOpenNavStore from './useIsOpenNavStore'
import { useLoginStore } from "../../../Pages/Login/useLoginStore";

const Hamburger = styled.div`
  flex-direction: column;
  cursor: pointer;
  span{
    background-color: white;
    height: 5px;
    width: 25px;
    margin-bottom: 4px;
    border-radius: 5px;
   
    @media screen and (max-width: 768px){
      display: flex;
    }
  }
`

const Menu = styled.nav`
overflow: hidden;
display: flex;
justify-content: space-between;
align-items: center;
gap: 0.5rem;
position: relative;

h2 {
  font-size: 2.5em;
  margin: 0 2em;
  color: white;
}

button {
  border: none;
  background-color: inherit;
  padding: .4rem 1.2rem;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease-in;
  font-size: 1em;
  color: white; 

  &:hover{
    background-color: #60606083;
    transition: 500ms;
  }
}


@media (max-width: 768px){
  flex-direction: column;
  transition: max-height 0.3 ease-in;
  width: 100%;
  z-index: 50000;
  max-height: ${({isOpen}) => isOpen ? 'auto' : '0'}; 

}
`
const MenuLink = styled(Link)`
  padding: .4rem 1.2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in;
  font-size: 1em;
  color: white; 
 
  &:hover{
    background-color: #60606083;
    transition: 500ms;
  }

  @media (max-width: 768px){
    display: block;
    width: 100%;
  }
`

const Header = () => {
  const {isOpen, setIsOpen} = useIsOpenNavStore()
  const [shrinkHeader, setShrinkHeader] = useState(false);
  const { setLoggedIn, loggedIn} = useLoginStore();
  const navigate = useNavigate()
  const [showBackground, setShowBackground] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setShowBackground(false);
    } else {
      setShowBackground(true);
    }
  }, [location]);

  useEffect(() => {
    const handler = () => {
      let shrink = document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ? true : false;
      setShrinkHeader(shrink)
    }

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler)
  }, [])

  
  return (
    <MainNav showBackground={showBackground} shrinkHeader={shrinkHeader}>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
       <span></span>
       <span></span>
       <span></span>
      </Hamburger>
      <Menu isOpen={isOpen}>
      <li>
        <MenuLink onClick={() => setIsOpen(!isOpen)} to="/">Forside</MenuLink>
      </li>
      <li>
        <MenuLink onClick={() => setIsOpen(!isOpen)} to="/productsbycategory">Produkter</MenuLink>
      </li>
      <h2>bageriet</h2>
      <li>
        <MenuLink onClick={() => setIsOpen(!isOpen)} to="/contact">Kontakt</MenuLink>
      </li>
      {loggedIn ? 
    
      <li onClick={() => {
        setLoggedIn(false, "", "", "")
        navigate('/login')
      }}>
      <MenuLink>Log ud</MenuLink>
      </li>   
        : 
        <li> <MenuLink onClick={() => setIsOpen(!isOpen)} to="/login">Log ind</MenuLink> </li>}
      </Menu>
    </MainNav>
  );
};

export default Header;