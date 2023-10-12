import {forwardRef} from "react";
import styled from "styled-components";
import { primary_color } from "../../assets/colors";
import { AndroidCardIcon, AppleCardIcon } from "../../assets";

const TryFreeSection = forwardRef<HTMLDivElement | null>((_, ref) => {
  return (
    <Container ref={ref}>
      <Ellipse />
      <Section>
        <Title2>Try Galaxi App for free! </Title2>
        <Desc>
        Experience the power of Galaxi App for free today! Download now on the App Store or Google Play and unlock a world of data-driven investment strategies at your fingertips. 
        </Desc>
        <LogoWrapper>
          <Anchor
            href="https://play.google.com/store/apps/details?id=com.galaxi.android&hl=en&gl=US"
            target="_blank"
          >
            <LogoImage src={AndroidCardIcon} />
          </Anchor>
          <Anchor href="#" target="_blank">
            <LogoImage src={AppleCardIcon} />
          </Anchor>
        </LogoWrapper>
      </Section>
      <Ellipse2 />
    </Container>
  );
});

export default TryFreeSection;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9faff;
  position: relative;
  padding-bottom: 5em;
`;
const LogoImage = styled.img``;
const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  @media (max-width: 415px) {
    flex-direction: column;
  }
`;

const Anchor = styled.a`
  margin: 0px 10px;
  padding: 0;
  position:relative;
  z-index: 3;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
`;

const Title2 = styled.h1`
  font-family: Montserrat;
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 0em;
  text-align: center;
  color: ${primary_color};
`;

const Desc = styled.p`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  width: 90%;
  @media (max-width: 750px) {
    text-align: center;
  }
`;

const Ellipse = styled.div`
  background-color: #3853a4;
  border-radius: 128px;
  filter: blur(80px);
  height: 256px;
  left: -100px;
  opacity: 0.6;
  position: absolute;
  top: -100px;
  width: 306px;
`;

const Ellipse2 = styled.div`
  background-color: #3853a4;
  border-radius: 128px;
  filter: blur(80px);
  height: 256px;
  right: -100px;
  opacity: 0.6;
  position: absolute;
  bottom: -100px;
  width: 306px;
`;
