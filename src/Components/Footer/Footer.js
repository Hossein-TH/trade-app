import React from 'react';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter} from "react-icons/all";
import Hidden from '@material-ui/core/Hidden';
import {
    FooterContainer,
    FooterLink,
    FooterLinksContainer,
    FooterLinkItems,
    FooterLinksWrapper,
    FooterLinkTitle,
    SocialIcons,
    SocialIconLink,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    CustomShape,
    ShapeFill,
    Svg
} from "./Footer-Styles";


const Footer = (props) => {
    return (
        <FooterContainer>
            <Hidden xlUp xsDown>
                <CustomShape>
                    <Svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                         preserveAspectRatio="none">
                        <ShapeFill color={props.color}
                                   d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z">
                        </ShapeFill>
                    </Svg>
                </CustomShape>
            </Hidden>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink>www.company.info.com</FooterLink>
                        <FooterLink>companyname@gmail.com</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Product</FooterLinkTitle>
                        <FooterLink>Mobile App Screen</FooterLink>
                        <FooterLink>Social Proof</FooterLink>
                        <FooterLink>Blog</FooterLink>
                        <FooterLink>About Us</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Solutions</FooterLinkTitle>
                        <FooterLink>Get rid of difficulty</FooterLink>
                        <FooterLink>A tool for web</FooterLink>
                        <FooterLink>An Country demesne</FooterLink>
                        <FooterLink>Bachelor</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Company</FooterLinkTitle>
                        <FooterLink>Screenshots</FooterLink>
                        <FooterLink>You delighted two</FooterLink>
                        <FooterLink>up is opinion message manners</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo>
                        ultra trade
                    </SocialLogo>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='YouTube'>
                            <FaYoutube/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                            <FaTwitter/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );
};

export default Footer;

