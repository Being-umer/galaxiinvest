import { styled } from "styled-components";
import { primary_color, secondary_color } from "../../assets/colors";
import { Play, MobileGroup } from "../../assets";
import { HeaderProps } from "../../screens/header";

const HeaderCard: React.FC<HeaderProps> = ({ handleHeaderClick }) => {
  return (
    <Container>
      <ContainerWrapper>
        <Div40>
          <Wrapper>
            <Title>Galaxi is for everyone</Title>
            <Desc>
              The world’s number 1 stocks screener. Get hottest stocks picks in
              the world using AI.
            </Desc> 
            <DarkButtton onClick={() => handleHeaderClick(6)}>
              <ButtonText>Explainer Video</ButtonText>
              <PlayIcon src={Play} />
            </DarkButtton>
          </Wrapper>
        </Div40>
        <Div60>{/* <MainImage src={MobileGroup} />     */}</Div60>
      </ContainerWrapper>
      <Box>
        <BoxEllipse />
      </Box>
      <Box2>
        <BoxEllipse2 />
      </Box2>
    </Container>
  );
};

export default HeaderCard;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 65px;
`;

const ContainerWrapper = styled.div`
  width: 80%;
  height: unset;
  padding: 0px 10%;
  display: flex;
  background-image: url(${MobileGroup});
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-size: 55%;
  @media (max-width: 750px) {
    background-size: 70%;
  }
  @media (max-width: 412px) {
    background-size: 100%;
  }
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  // align-items: center;
  justify-content: center;
`;
const Div60 = styled.div`
  width: 60%;
`;
const Div40 = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20em;
  padding-bottom: 20%;
  @media (max-width: 750px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-family: Montserrat;
  font-size: 4em;
  font-weight: 700;
  line-height: 1.5em;
  letter-spacing: 0em;
  text-align: left;
  color: ${primary_color};
  margin: 1rem 0px;
  @media (max-width: 750px) {
    font-size: 2em;
  }
`;

const Desc = styled.p`
  font-family: Montserrat;
  font-size: 1em;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  margin: 1rem 0px;
  color: black;
`;

const DarkButtton = styled.div`
  box-shadow: 0px 4px 10px 0px #00000040;
  background: ${primary_color};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  // width: 50%;
  width: 180px;
  padding: 12px 10px;
  border-radius: 30px;
  margin: 1rem 0px;
  position: relative;
  z-index: 1;
`;

const ButtonText = styled.div`
  font-family: Montserrat;
  font-size: 1em;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: ${secondary_color};
`;
const PlayIcon = styled.img`
  width: 18px;
  margin-left: 5px;
`;

const Box = styled.div`
  height: 285px;
  width: 285px;
  position: absolute;
  top: 50%;
  right: 90%;
`;

const BoxEllipse = styled.div`
  background-color: #f6eb14;
  border-radius: 142.5px;
  filter: blur(106px);
  height: 285px;

  opacity: 0.6;

  width: 285px;
`;
const Box2 = styled.div`
  height: 406px;
  width: 206px;
  position: absolute;
  top: 85%;
  right: 0;
`;

const BoxEllipse2 = styled.div`
  background-color: #8cc640;
  border-radius: 403px;
  filter: blur(100px);
  height: 406px;
  opacity: 0.6;
  width: 406px;
`;
