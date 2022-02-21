import React, {useState} from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import {IconContext} from "react-icons/lib";
import Logo from '../../Assets/img/Logo.png';
import Button from '@material-ui/core/Button';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavbarLinks,
} from './Navbar-Styles'


const Navbar = (props) => {
    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    };

    const ButtonStyle = {
        color: "#fff",
        textTransform: "none"
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <Nav color={props.color} className={navbar ? 'nav active' : 'nav'}>
                    <NavbarContainer>
                        <NavLogo href="#Intro" onClick={closeMobileMenu}>
                            <NavIcon src={Logo}/>
                            Ultra trade
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes/> : <FaBars/>}
                        </MobileIcon>
                        <NavMenu className={navbar ? 'ul active' : 'ul'} onClick={handleClick} click={click}>
                            <NavItem>
                                <NavbarLinks onClick={closeMobileMenu} to="/">
                                    <Button style={ButtonStyle} size="large" variant="text">
                                        Home
                                    </Button>
                                </NavbarLinks>
                            </NavItem>
                            <NavItem>
                                <NavbarLinks onClick={closeMobileMenu} to="/Download-Page">
                                    <Button color="primary" variant="contained" style={{textTransform: "none"}}>
                                        Download App
                                    </Button>
                                </NavbarLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
