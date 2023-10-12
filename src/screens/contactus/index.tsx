import { forwardRef } from "react";
import styled from "styled-components";
import { Contactus } from "../../assets";
import { primary_color, secondary_color } from "../../assets/colors";

const ContactUs = forwardRef<HTMLDivElement | null>((_, ref) => {
  return (
    <Container ref={ref}>
      <ContainerWrapper>
        <Image src={Contactus} />
        <Wrapper>
          <Title>Get In Touch</Title>
          <Desc>
          Certainly! To reach us and inquire about our services or for any assistance you may need, please fill out the form below:
          </Desc>
          <Form>
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input type="text" placeholder="Phone" />
            <Textarea placeholder="Write a comment" />
            <DarkButtton href="https://docs.google.com/forms/d/e/1FAIpQLScrfh3sNsGCMbb5f4pzDVBQeL7pA-WdBHWkblTVoiAzmUy8Sg/viewform" target='_blank'>
              <ButtonText>Send Message</ButtonText>
            </DarkButtton>
          </Form>
        </Wrapper>
      </ContainerWrapper>
    </Container>
  );
});

export default ContactUs;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ContainerWrapper = styled.div`
  width: 80%;
  height: unset;
  padding: 0px 10%;
  padding-bottom: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;
const Wrapper = styled.div`
  width: 50%;
  flex-direction: column;
  display: flex;
  // align-items: center;
  justify-content: center;
  min-width: 257px;
  @media (max-width: 720px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 40%;
  //   min-width: 257px;
  @media (max-width: 720px) {
    width: 100%;
  }
`;

const DarkButtton = styled.a`
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
  text-decoration: none;
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

const Title = styled.h1`
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 700;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: left;
  color: ${primary_color};
`;

const Desc = styled.p`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  width: 90%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
`;

const Input = styled.input`
  height: 50px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 90%;
  min-width: 320px;
  margin: 6px 0px;
  padding: 0px 10px;
  box-sizing: border-box;
  color: ${primary_color};
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  border: 2px solid ${primary_color};
  outline: none;
  &::placeholder {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: ${primary_color};
  }
`;

const Textarea = styled.textarea`
  width: 90%;
  max-width: 90%;
  min-width: 320px;
  height: 110px;
  max-height: 200px;
  margin: 6px 0px;
  box-sizing: border-box;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: 2px solid ${primary_color};
  outline: none;
  padding: 10px 10px;
  &::placeholder {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: ${primary_color};
  }
`;
