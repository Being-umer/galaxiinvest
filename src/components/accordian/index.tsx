import React, { useState } from "react";
import styled from "styled-components";
import { primary_color } from "../../assets/colors";
import { IListFaqs } from "../../screens/faqs";

const plus = `data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z' clip-rule='evenodd'/%3e%3c/svg%3e`;
const minus = `data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z' clip-rule='evenodd'/%3e%3c/svg%3e`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Col = styled.div`
  flex: 1;
`;

const Text = styled.div`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;

const TabsContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
`;

const Icon = styled.img`
  width: 16px;
`;

const Image = styled.img`
  width: 100%;
`;

const Tab = styled.div`
  width: 100%;
  color: white;
  overflow: hidden;
  margin: 1px 0px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

const TabLabel = styled.label`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  background: ${primary_color};
  font-weight: bold;
  cursor: pointer;
  position: relative;

  &:hover {
    background: #1e2b3a;
  }

  &:after {
    content: "\276F";
    width: 1em;
    height: 1em;
    text-align: center;
    transition: all 0.35s;
    position: absolute;
    right: 1em;
    top: 50%;
    transform: translateY(-50%);
  }
`;

interface TabContentProps {
  isOpen: boolean;
}

const Text2 = styled.p`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  width: 90%;
//   padding: 5px 0px;
`;

const TabContent = styled.div<TabContentProps>`
  max-height: 0;
  padding: 0 1em;
  color: ${primary_color};
  background: white;
  transition: all 0.35s;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  ${({ isOpen }) =>
    isOpen &&
    `
    max-height: 100vh;
    padding: 1em;
  `}
`;

const TabInput = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;
`;

interface AccordianProps {
  tabsData?: IListFaqs[];
}

const Accordian: React.FC<AccordianProps> = ({ tabsData }) => {
  const [openTabs, setOpenTabs] = useState<string[]>([]);
  const toggleTab = (tabId: string) => {
    setOpenTabs((prevOpenTabs) => {
      if (prevOpenTabs.includes(tabId)) {
        return prevOpenTabs.filter((id) => id !== tabId);
      } else {
        return [...prevOpenTabs, tabId];
      }
    });
  };

  return (
    <Row>
      <Col>
        <TabsContainer>
          {tabsData?.map((tab, i) => {
            const id = `check${i}`;
            return (
              <Tab key={id}>
                <TabInput
                  type="checkbox"
                  id={id}
                  checked={openTabs.includes(id)}
                  onChange={() => toggleTab(id)}
                />
                <TabLabel htmlFor={id}>
                  <Text>{tab.title}</Text>
                  <Icon src={openTabs.includes(id) ? minus : plus} />
                </TabLabel>
                <TabContent isOpen={openTabs.includes(id)}>
                  <Text2>{tab.desc}</Text2>
                  <Image src={tab.img} />
                </TabContent>
              </Tab>
            );
          })}
        </TabsContainer>
      </Col>
    </Row>
  );
};

export default Accordian;
