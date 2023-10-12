import { Galaxi, Twiter, Facebook, Linkdin, Pintrest } from "../../assets";
import styled from "styled-components";
import { primary_color } from "../../assets/colors";

const Footer = () => {
  return (
    <Container>
      <ContainerWrapper>
        <ContentWrapper>
          <Image src={Galaxi} />
          <Desc>
            The world’s number 1 stocks screener. Get hottest stocks picks in
            the world using AI.
          </Desc>
        </ContentWrapper>
        <Copyright>
          <CopyrightText> &#169; All Rights Reserved 2023</CopyrightText>
          <SocialWrapper>
            <Anchor href="https://www.facebook.com/" target="_blank">
              <SocialLogo src={Facebook} />
            </Anchor>
            <Anchor href="https://www.linkedin.com/" target="_blank">
              <SocialLogo src={Linkdin} />
            </Anchor>
            <Anchor href="https://www.Pinterest.com/" target="_blank">
              <SocialLogo src={Pintrest} />
            </Anchor>
            <Anchor href="https://www.Twitter.com/" target="_blank">
              <SocialLogo src={Twiter} />
            </Anchor>
          </SocialWrapper>
        </Copyright>
      </ContainerWrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 130%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  position: relative;
  height: 300px;
  top: -50px;
  right: 15%;
  border-top-left-radius: 50% 40%;
  border-top-right-radius: 50% 40%;
`;

const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  //   justify-content: center;
  align-items: center;
  position: absolute;
`;

const Image = styled.img`
  width: 12%;
  min-width: 210px;
`;
const Desc = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  width: 50%;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
  color: ${primary_color};
`;

const Copyright = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #a6a6a6;
  padding: 0 2%;
  margin-top: 2%;
  @media (max-width: 412px) {
    flex-direction: column-reverse;
  }
`;

const CopyrightText = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  //   justify-content: center;
  align-items: center;
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Anchor = styled.a`
  margin: 13px;
  padding: 0;
`;
const SocialLogo = styled.img``;
