import styled from "styled-components";
import {NavLink} from 'react-router-dom';

export const Nav = styled.nav`
  background: ${props => props.color};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  
  &.active {
    background: rgba(22, 22, 26, 0.7);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: border-bottom 150ms ease 0s, top 250ms ease 0s, background-color 300ms ease 0s;
    backdrop-filter: blur(5px);
    
    @media screen and (max-width: 991px) {
       background: rgba(22, 22, 26);
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 25px;
  padding-right: 100px;
  
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 10px;
  }
`;

export const NavbarContainer = styled(Container)`
  display:flex;
  justify-content: space-between;
  height: 80px;
  
  ${Container}
`;

export const NavLogo = styled.a`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled.img`
  margin-right: 0.5rem;
  height: 60px;
`;

export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  padding: 0;
  
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding: 0;
    position: absolute;
    top: 60px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #060606;
    
    &.active {
      background: rgba(22, 22, 26);
    }
  }
`;

export const NavItem = styled.li`
  height: 80px;
  cursor: pointer;
  
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;


export const NavbarLinks = styled(NavLink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  
  @media screen and (max-width: 960px){
    text-align: center;
    margin-top: 80px;
    width: 100%;
    display: table;
    
`;







