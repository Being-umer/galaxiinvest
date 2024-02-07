import React, { Suspense, lazy } from "react";
import styled, { keyframes } from "styled-components";
import { primary_color } from "../../assets/colors";
import { GalaxiMobiles } from "../../assets";
import Features from "./features";

const LazyVideoContent = lazy(() => import("./videoContent"));

interface ContainerWrapperProps {
  direction?: string;
  position?: string;
}

const WhyGalaxi: React.FC<{
  ref1: React.RefObject<HTMLDivElement>;
  ref2: React.RefObject<HTMLDivElement>;
  ref3: React.RefObject<HTMLDivElement>;
}> = ({ ref1, ref2, ref3 }) => {
  return (
    <Container ref={ref1}>
      <ContainerWrapper>
        <Div50>
          <Title>Why Galaxi?</Title>
          <Desc>
            Galaxi emerges as the ultimate investment companion within the
            dynamic stock market landscape. Our exceptional fusion of advanced
            AI technology and five proven investment strategies empowers
            investors at every level, enabling them to navigate the complex
            waters of finance with confidence. We have a unique knack for
            simplifying intricate financial strategies into easily digestible
            advice, thus democratizing investing and making it accessible to
            everyone.
          </Desc>
          <Desc>
            With the astounding capability to process trillions of calculations
            per second, Galaxi ensures you never miss out on promising
            investment opportunities. We stand as your trusted guide, dedicated
            to unlocking the potential for profitable investments amidst the
            vast ocean of stocks. Dive into Galaxi, where cutting-edge
            technology meets financial expertise, transforming the way you
            approach investment decisions.
          </Desc>
        </Div50>
        <Div50Center>
          <GalaxiImage src={GalaxiMobiles} />
        </Div50Center>
      </ContainerWrapper>
      <ContainerWrapper ref={ref3} direction={"column"}>
        <Title>Explainer Video</Title>
        <VideoWrapper>
          <Ellipse />
          <Suspense
            fallback={
              <LoaderContainer>
                <Loader></Loader>
              </LoaderContainer>
            }
          >
            <LazyVideoContent />
          </Suspense>
          <Ellipse2/>
        </VideoWrapper>
      </ContainerWrapper>
      <ContainerWrapper direction={"column"} position={"relative"}>
        <Features ref={ref2} />
        <Ellipse3 />
      </ContainerWrapper>
    </Container>
  );
};
export default WhyGalaxi;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ContainerWrapper = styled.div<ContainerWrapperProps>`
  width: 80%;
  height: unset;
  padding: 0px 10%;
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "column" ? "column" : "row"};
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: ${(props) => (props.position ? props.position : "unset")};
`;
const Div50 = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5% 0px;
  margin: 0% 20px;
  min-width: 300px;
`;

const Div50Center = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5% 0px;
  margin: 0% 20px;
  min-width: 300px;
`;

const Title = styled.h1`
  font-family: Montserrat;
  font-size: 2em;
  font-weight: 700;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: left;
  color: ${primary_color};
  margin: 1rem 0px;
  @media (max-width: 412px) {
    text-align: center;
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
  color: ${primary_color};
  @media (max-width: 412px) {
    text-align: center;
  }
`;

const GalaxiImage = styled.img`
  width: 70%;
  margin-left: 5px;
`;

const VideoWrapper = styled.div`
  position: relative;
  border-radius: 30px;
  max-height: 600px;
  max-width: 1065px;
  width: 100%;
  margin: 15px auto;
`;

const Ellipse = styled.div`
  position: absolute;
  width: 200px;
  height: 180px;
  left: -70px;
  top: -70px;
  z-index: -1;
  background: #3853a4;
  opacity: 0.6;
  filter: blur(75px);
`;

const Ellipse2 = styled.div`
  position: absolute;
  width: 200px;
  height: 180px;
  right: -70px;
  bottom: -70px;
  z-index: -1;
  background: #3853a4;
  opacity: 0.6;
  filter: blur(75px);
`;

const Ellipse3 = styled.div`
  position: absolute;
  width: 406px;
  height: 406px;
  left: -217px;
  top: 236px;
  background: #8cc640;
  opacity: 0.6;
  filter: blur(100px);
`;

const LoadingAnim = keyframes`
  to {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const Loader = styled.div`
  width: 60px;
  height: 60px;
  border: 8px solid #e8e8e8;
  border-top-color: #3853a4;
  border-radius: 50%;
  animation: ${LoadingAnim} 1s ease infinite;
`;

const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
