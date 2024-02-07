import { forwardRef, useEffect, useState } from "react";
import styled from "styled-components";
import { primary_color } from "../../assets/colors";
import Accordian from "../../components/accordian";

export interface Card {
  key: string;
  title: string;
  desc: string;
  img: string;
}

export interface IListFaqs {
  title: string;
  desc: string;
  enabled: boolean;
  img?: string;
}

export interface IFaqs {
  intro: string;
  list: Array<IListFaqs>;
}

const FAQS = forwardRef<HTMLDivElement | null>((_, ref) => {
  const [tabsData, setTabsData] = useState<IFaqs | undefined>();

  const fetchtabData = async () => {
    const res = await fetch("https://api.galaxiinvest.com/faqs");
    const data = await res.json();
    setTabsData(data.faqs);
  };

  useEffect(() => {
    fetchtabData();
  }, []);

  return (
    <Container ref={ref}>
      <Title>FAQS</Title>
      <Desc>{tabsData?.intro}</Desc>
      <CardWrapper>
        <Accordian tabsData={tabsData?.list} />
      </CardWrapper>
    </Container>
  );
});

export default FAQS;

const Title = styled.h1`
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 700;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: left;
  color: ${primary_color};
`;
const Container = styled.div`
  width: inherit;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 4rem 0px;
`;
const Desc = styled.p`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  width: 80%;
  text-align: center;
`;

const CardWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 3% 0px;
  flex-wrap: wrap;
  position: relative;
  min-width: 280px;
`;
