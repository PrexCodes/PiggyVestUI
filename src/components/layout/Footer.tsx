import React from "react";
import styled from "styled-components";

import img1 from "../../assets/logo.svg";
import img2 from "../../assets/compliance-f24fa70ce98ff6f4dcdfddeefc2bdd5a.png";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <Container>
        <Main>
          <Boxes>
            <LogoHolder>
              <Logo src={img1}></Logo>
              <br />
              <br />

              <Logo src={img2}></Logo>
            </LogoHolder>
          </Boxes>
          <Box>
            <Heading>Products</Heading>
            <Ntext>Piggybank</Ntext>
            <Ntext>Invest</Ntext>
            <Ntext>Safelock</Ntext>
            <Ntext>Target Savings</Ntext>
            <Ntext>Flex Naira</Ntext>
          </Box>
          <Box>
            <Heading>Company</Heading>
            <Ntext>About</Ntext>
            <Ntext>FAQs</Ntext>
            <Ntext>Blog</Ntext>
          </Box>
          <Box>
            <Heading>Legal</Heading>
            <Ntext>Terms</Ntext>
            <Ntext>Privacy</Ntext>
            <Ntext>Security</Ntext>
          </Box>

          <Boxe>
            <LogoH>
              <Icon1 />
              <Icon2 />
              <Icon3 />
            </LogoH>
            <Ntext>
              Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos,
              Nigeria.
            </Ntext>
            <Ntext>contact@piggyvest.com</Ntext>
            <Ntext>+234 700 933 933 933</Ntext>
          </Boxe>
        </Main>
      </Container>
      <Mains>
      <TextPart>
        <Ntext>
          Piggyvest formerly piggybank.ng is the leading online savings &
          investing platform in Nigeria. For over 6 years, our customers have
          saved and invested billions of Naira that they would normally be
          tempted to spend.
        </Ntext>
        <Ntexts> 2016 - 2022 PiggyTech Global Limited - RC 1405222</Ntexts>

      </TextPart>
      </Mains>
    </div>
  );
};

const Mains = styled.div`
width: 100%;
justify-content: center;
align-items: center;
display: flex;
`;
const Text = styled.div`
font-size: 20px;
`;
const TextPart = styled.div`
width: 75%;

text-align: center;
`;

const Icon1 = styled(AiFillFacebook)`
  font-size: 30px;
  transition: all 500ms;
  :hover {
    margin-bottom: 10px;
  }
`;
const Icon2 = styled(AiFillTwitterSquare)`
  font-size: 30px;
  transition: all 500ms;
  :hover {
    margin-bottom: 10px;
  }
`;
const Icon3 = styled(AiFillInstagram)`
  font-size: 30px;
  transition: all 500ms;
  :hover {
    margin-bottom: 10px;
  }
`;

const LogoH = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 40px;
  cursor: pointer;
`;

const Boxe = styled.div`
  width: 240px;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Boxes = styled.div`
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Heading = styled.div`
  font-family: U8;
  font-size: 14px;
  font-weight: 700;
`;
const Ntext = styled.div`
  margin: 15px 0px;
  :hover {
    
    cursor: pointer;
  }
`;
const Ntexts = styled.div`
color: rgb(51, 97, 216);
font-size: 13px;
  margin: 15px 0px;
  transition: all 500ms;
  :hover {
    margin-top: 20px;
    cursor: pointer;
  }
`;

const Logo = styled.img`
  max-height: 110px;
`;
const LogoHolder = styled.div``;

const Container = styled.div`
  margin-top: 100px;
  height: 200px;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 13px;
  font-weight: 450;
  color: rgb(12, 25, 39);
`;
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
`;
const Box = styled.div`
  /* background-color: black; */
  height: 300px;
  width: 150px;
`;

export default Footer;
