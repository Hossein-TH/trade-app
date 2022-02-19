import styled from "styled-components";


export const FooterContainer = styled.div`
  background-color: #242741;
  padding: 7rem 0 2rem 0;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  
  
  @media screen and (max-width: 820px) {
   flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 180px;
  box-sizing: border-box;
  color: #fff;
  
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
    height: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  
  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
  
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled.a`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;


export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  
   &:hover {
    transform: scale(1.7);
    transition: all 0.3s ease-out;
  }
`;

export const CustomShape = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   overflow: hidden;
   ine-height: 0;
`;

export const Svg = styled.svg`
   position: relative;
   display: block;
   width: calc(130% + 1.3px);
   height: 80px;
`;

export const ShapeFill = styled.path`
   fill: ${props => props.color};
`;
