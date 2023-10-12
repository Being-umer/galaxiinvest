import { forwardRef } from "react";
import styled from "styled-components";
import {
  green_color,
  primary_color,
  secondary_color,
} from "../../assets/colors";
import { AndroidIcon, AppleIcon, HomeMobile } from "../../assets";

const AvailableSection = forwardRef<HTMLDivElement | null>((_, ref) => {
  return (
    <Container ref={ref}>
      <ContainerWrapper>
        <Section>
          <Title>Available on</Title>
          <Title2>App Store, Play Store </Title2>
          <Desc>
          You can easily access Galaxi on the App Store and Play Store, making it convenient for users on both iOS and Android platforms to harness the power of our AI-driven investment strategies. Download the app today to start your journey towards informed and successful investing.
          </Desc>
          <LogoWrapper>
            <Anchor
              href="https://play.google.com/store/apps/details?id=com.galaxi.android&hl=en&gl=US"
              target="_blank"
            >
              <LogoImage src={AndroidIcon} />
            </Anchor>
            <Anchor href="#" target="_blank">
              <LogoImage src={AppleIcon} />
            </Anchor>
          </LogoWrapper>
        </Section>
        <Image src={HomeMobile} />
      </ContainerWrapper>
    </Container>
  );
});

export default AvailableSection;

const Container = styled.div`
  width: 100%;
  background: ${primary_color};
  position: relative;
  padding: 0px 10%;
`;
const ContainerWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 26em;
  margin: 6rem 0px;
`;
const Image = styled.img`
  position: relative;
  @media (max-width: 750px) {
    display: none;
  }
`;
const LogoImage = styled.img``;
const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Anchor = styled.a`
  margin: 0;
  padding: 0;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  @media (max-width: 750px) {
    align-items: center;
  }
`;

const Title = styled.h1`
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 700;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: right;
  margin: 5px 0px;
  color: ${green_color};
  @media (max-width: 750px) {
    text-align: center;
  }
`;
const Title2 = styled.h1`
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 500;
  line-height: 39px;
  letter-spacing: 0em;
  margin: 5px 0px;
  text-align: right;
  color: ${secondary_color};
  @media (max-width: 750px) {
    text-align: center;
  }
`;

const Desc = styled.p`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: right;
  width: 90%;
  color: ${secondary_color};
  @media (max-width: 750px) {
    text-align: center;
  }
`;
