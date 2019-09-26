import React from "react";
import styled from "styled-components";

import Theme from "../styles/Theme";

import Facebook from "../assets/icons/FacebookIcon";
import Twitter from "../assets/icons/TwitterIcon";
import Linkedin from "../assets/icons/LinkedinIcon";
import Instagram from "../assets/icons/InstagramIcon";
import Youtube from "../assets/icons/YoutubeIcon";

const StyledFooterContainer = styled.div`
  margin: ${Theme.padding2};
`;
const StyledSoMeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 45%;
  margin-top: ${Theme.padding2};
`;
const IconSize = '18px';

const Footer = props => (
  <StyledFooterContainer>
    <p>K-play är Kulturakadmins samlade plattform för kompetenshöjande podcasts och videos.</p>
    <StyledSoMeContainer>
      <Linkedin width={IconSize} height={IconSize} fill={`${Theme.colorLight}`} />
      <Youtube width={IconSize} height={IconSize} fill={`${Theme.colorLight}`}/>
      <Instagram width={IconSize} height={IconSize} fill={`${Theme.colorLight}`}/>
      <Facebook width={IconSize} height={IconSize} fill={`${Theme.colorLight}`}/>
      <Twitter width={IconSize} height={IconSize} fill={`${Theme.colorLight}`}/>
    </StyledSoMeContainer>
  </StyledFooterContainer>
);

export default Footer;
