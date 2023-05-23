import React from "react";
import styled from "styled-components";
import { Button } from "../components/static/Button";
import log1 from "../assets/google_icon_9867fc9be6.svg";
import log2 from "../assets/apple_icon_32ccc572ff.svg";
import disp1 from "../assets/header_Img_a2a9220bd6.png";
import disp2 from "../assets/rect_ccb22b6667.png";
import disp3 from "../assets/card1_565f256c81.png";
import disp4 from "../assets/card2_7a8c09a44c.png";
import sec from "../assets/security_369a26d96e.png";
import men1 from "../assets/piggy_df88262015.png";
import men2 from "../assets/safelock_4e737ba7d3.png";
import men3 from "../assets/target_6c049f3410.png";
import men4 from "../assets/flex_d090f8bce2.png";
import img1 from "../assets/invest_c3fcc60df0.png";
import img2 from "../assets/PHOTO_2022_08_02_17_33_57_af95edcdcb.jpg";
import br1 from "../assets/brand1_b2a9805fff.png"
import br2 from "../assets/brand2_3fcc7de2d6.png"
import br3 from "../assets/brand3_972c03908c.png"

import { AiOutlineArrowRight } from "react-icons/ai";

const HomeScreen = () => {
  const items = [
    {
      title: "Automated Savings",
      subtitle:
        "Build a dedicated savings faster on your terms automatically or manually",
      image: men1,
      menu: "PiggyBank",
      color: "rgb(60,87,169)",
      bgcolor: "rgb(227,240,253)",
    },
    {
      title: "Fixed Savings",
      subtitle:
        "Lock money away for a fixed duration with no access to it until maturity. It's like having a custom fixed deposit.",
      image: men2,
      menu: "Safelock",
      color: "rgb(137,197,255)",
      bgcolor: "rgb(227,245,255)",
    },
    {
      title: "Goal-oriented Savings",
      subtitle:
        "Reach all your savings goals faster. Save towards multiple goals on your own or with a group",
      image: men3,
      menu: "Target Savings",
      color: "rgb(91,171,100)",
      bgcolor: "rgb(228,254,240)",
    },
    {
      title: "Flexible Savings",
      subtitle:
        "Save, transfer, withdraw, manage and organize your money for free at any time.",
      image: men4,
      menu: "Flex Naira",
      color: "rgb(230,46,142)",
      bgcolor: "rgb(250,231,245)",
    },
  ];

  return (
    <div>
      <Container>
        <Main>
          <Content>
            <BigText>The Better Way to Save & Invest.</BigText>
            <Desc>
              PiggyVest helps over 4 million customers achieve their financial
              goals by helping them save and invest with ease.
            </Desc>
            <Bholder>
              <Button
                color="white"
                bg="rgb(12,24,37)"
                desc="Create free account"
              />
            </Bholder>
            <Items>
              <Item>
                <SmLogo src={log2} />
                <Descr> Get on Iphone</Descr>
              </Item>
              <Item>
                <SmLogo src={log1} />
                <Descr> Get on Android </Descr>
              </Item>
            </Items>
          </Content>
          <Images>
            <BgImage src={disp2} />
            <DispImage src={disp1}></DispImage>
            <ICON1 src={disp3}></ICON1>
            <ICON2 src={disp4}></ICON2>
          </Images>
        </Main>
      </Container>
      <Security>
        <Main>
          <Contents>
            <SecImage src={sec}></SecImage>
            <Texts>
              <BigTexts size={"40px"}>Your security is our priority</BigTexts>
              <SmaText>
                PiggyVest uses the highest level of Internet Security and it is
                secured by 256 bits SSL security encryption to ensure that your
                information is comepletely protected from fraud.
              </SmaText>
              <LinkText>Learn more {">"}</LinkText>
            </Texts>
          </Contents>
        </Main>
      </Security>
      <Savings>
        <Main>
          <Contentss>
            <Sideb>
              <BigTexts size={"40px"}> 4 ways to build your savings</BigTexts>
              <SmaText>
                {" "}
                Earn 5%-15% when you save with any of these PiggyVest plans.
              </SmaText>
              <Bholder>
                <Button color="white" bg="rgb(12,24,37)" desc="Start Saving" />
              </Bholder>
            </Sideb>
            <MainC>
              {items.map((el) => {
                return (
                  <Card>
                    <div>
                      <IconLogo src={el.image} />
                      <BigTexts size={"22px"}>{el.title}</BigTexts>
                      <SmaText> {el.subtitle}</SmaText>
                    </div>
                    <CircleB>
                      <Circle bg={el.bgcolor}>
                        <ArrowIcon c={el.color} />
                      </Circle>
                      <PText>{el.menu}</PText>
                    </CircleB>
                  </Card>
                );
              })}
            </MainC>
          </Contentss>
        </Main>
      </Savings>
      <Hope>
        <Main>
          <Contents>
            <InvImage src={img1}></InvImage>
            <Texts>
              <BannerText>
                <BText> Up To 25% Returns </BText>
              </BannerText>
              <BigTexts size={"50px"}>Access Investment Opportunities</BigTexts>
              <SmaText>
                Invest securely and confidently on the go. Grow your money
                confidently by investing in pre-vetted investment opportunities.
              </SmaText>
              <LinkTexts>Learn more about investments {">"}</LinkTexts>
            </Texts>
          </Contents>
        </Main>
      </Hope>
      <HighestSaver>
        <Box>
          <Mains>
            <LText> Meet the saver of the month!</LText>
            <SContent>
              {" "}
              Every month, we shine a spotlight on one saver, asking them
              questions about their savings culture and how the product is
              specifically helping them shape how they spend and save for future
              responsibilities.
            </SContent>
            <CircleB>
              <Circle bg="white">
                <ArrowIcon c="rgb(51,97,216)" />
              </Circle>
              <PsText>Meet the Soile's</PsText>
            </CircleB>
          </Mains>
        </Box>
        <SponsorImage src={img2} />
      </HighestSaver>
      <Featured>
        <Maint>
          <LTexts> As featured in</LTexts>
          <Imagess>
            <Logo src={br3}/>
            <Logo src={br2}/>
            <Logo src={br1}/>
          </Imagess>
        </Maint>
      </Featured>
    </div>
  );
};

export default HomeScreen;

const Logo = styled.img`
height: 30px;
margin-right: 40px;
`;
const Maint = styled.div`
    width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Imagess = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Featured = styled.div`
  height: 250px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Mains = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 60%;
  height: 100%;
  color: white;
`;
const LTexts = styled.div`
  font-family: U8;
  font-size: 35px;
  font-weight: 700;
  display: flex;
`;
const LText = styled.div`
  font-family: U8;
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const PsText = styled.div`
  color: white;
  margin-left: 10px;
  font-weight: 500;
  transition: all 500ms;
  :hover {
    margin-left: 25px;
    cursor: pointer;
  }
`;
const SContent = styled.div`
  margin-bottom: 40px;
`;
const SponsorImage = styled.img`
  height: 500px;
`;
const Box = styled.div`
  padding-left: 40px;
  height: 500px;
  width: 100%;
  background-color: rgb(51, 97, 216);
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
`;

const BText = styled.div`
  padding: 10px 20px;
  color: rgb(137, 23, 229);
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 20px;
  border-radius: 30px;
  background-color: rgb(247, 240, 255);
`;

const BannerText = styled.div`
  display: flex;
`;

const InvImage = styled.img``;

const PText = styled.div`
  font-size: 18px;
  margin-left: 10px;
`;

const CircleB = styled.div`
  display: flex;
  align-items: center;
`;

const ArrowIcon = styled(AiOutlineArrowRight)<{ c: string }>`
  color: ${({ c }) => c};
`;
const Circle = styled.div<{ bg: string }>`
  height: 35px;
  width: 35px;
  background-color: ${({ bg }) => bg};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  padding: 20px;
  border-radius: 20px;
  height: 350px;
  width: 320px;
  background-color: #fcf7f7;

  margin: 20px;
`;
const MainC = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
`;
const Sideb = styled.div`
  margin-top: 100px;
  width: 25%;
`;
const LinkText = styled.div`
  align-items: start;
  color: #3361d8;
  font-size: 18px;
  position: relative;

  width: 19%;

  ::after {
    content: "";
    height: 5px;
    position: absolute;
    width: 100%;
    background-color: rgb(224, 239, 255);
    bottom: 0;
    left: 0;
    opacity: 0;
    transform: scale(0);
    transition: all 400ms;
  }
  :hover {
    ::after {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
const LinkTexts = styled.div`
  align-items: start;
  color: rgb(137, 23, 229);
  font-size: 18px;
  position: relative;

  /* width: 19%; */

  ::after {
    content: "";
    height: 5px;
    position: absolute;
    width: 100%;
    background-color: rgb(224, 239, 255);
    bottom: 0;
    left: 0;
    opacity: 0;
    transform: scale(0);
    transition: all 400ms;
  }
  :hover {
    ::after {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
const SmaText = styled.div`
  margin: 20px 0px;
  font-size: 17px;
  font-weight: 100;
  line-height: 1.4;
`;
const BigTexts = styled.div<{ size: string }>`
  font-family: U8;
  font-size: ${({ size }) => size};
  font-weight: 700;
  /* line-height: 1.8; */
  margin-bottom: 22px;
`;
const Texts = styled.div`
  width: 50%;
  margin-left: 50px;
`;
const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Contentss = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

const SecImage = styled.img`
  height: 120px;
`;
const IconLogo = styled.img`
  height: 50px;
  margin-bottom: 30px;
`;

const ICON1 = styled.img`
  height: 120px;
  position: absolute;
  top: 170px;
  left: -130px;
`;

const ICON2 = styled.img`
  height: 120px;
  position: absolute;
  bottom: 40px;
  right: 10px;
`;
const BgImage = styled.img`
  position: relative;
`;
const DispImage = styled.img`
  position: absolute;
  top: 40px;
  left: -40px;
`;
const Bholder = styled.div`
  display: flex;
`;
const Content = styled.div`
  width: 45%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  justify-content: space-evenly;
  margin-right: 100px;
`;
const BigText = styled.div`
  font-family: U8;
  font-size: 70px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: -20px;
`;
const Desc = styled.div`
  margin: 30px 0;
  font-size: 18px;
`;
const Descr = styled.div``;
const Images = styled.div`
  width: 35%;
  position: relative;
  display: flex;
`;
const Item = styled.div`
  height: 50px;
  width: 180px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  margin-right: 20px;
  border-radius: 10px;
  transition: all 500ms;
  :hover {
    margin-top: -20px;
    cursor: pointer;
  }
`;
const Items = styled.div`
  padding: 20px 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const SmLogo = styled.img`
  margin-right: 20px;
`;
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 88%;
`;
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(12, 24, 37);
`;
const Security = styled.div`
  min-height: 450px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(12, 24, 37);
`;
const Hope = styled.div`
  margin-top: 100px;
  min-height: 650px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(12, 24, 37);
`;
const Savings = styled.div`
  min-height: 900px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(12, 24, 37);
`;
const HighestSaver = styled.div`
  min-height: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(12, 24, 37);
`;
