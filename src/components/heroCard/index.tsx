import styled from 'styled-components';
import { Card } from '../../screens/howItWorks';

type Props = {
  cardObj: Card;
}

function HeroCard({cardObj}:Props) {
  return (
    <CardContainer>
      <NumberText>{cardObj.key}</NumberText>
      <CardT>
        <Image src={cardObj.img} />
        <Title>{cardObj.title}</Title>
        <Text>{cardObj.desc}</Text>
      </CardT>
<Marker />
    </CardContainer>
      
  );
}
export default HeroCard

const CardContainer = styled.div`
  display:flex;
  flex-direction: column;
  position: relative;
  width: 25%;
  min-width: 280px;
  min-height: 350px;
  margin: 30px 10px
`

const CardT = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border: 1px solid #1D1752;
  box-shadow: 0px 1px 10px 1px #00000026;
  border-radius: 10px;
  padding: 30px;
  background: white;
  // min-width: 280px;
  min-height: 300px;
`

const NumberText = styled.span`
font-family: Montserrat;
font-size: 6em;
font-weight: 400;
line-height: 117px;
letter-spacing: 0em;
text-align: left;
color: #1D1752;
width: fit-content;
position: absolute;
right: 5px;
top: -60px;
// background-color: white;
z-index: 12;

`

const Title = styled.span`
display: inline;
font-family: Montserrat;
font-size: 1.25em;
font-weight: 700;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
border-bottom: 2px solid #8CC640;
width: fit-content;
padding: 5px 0px;
margin: 10px 0px;
text-align:start;
`
const Text = styled.div`
font-family: Montserrat;
font-size: 1em;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
padding-top: 15px;
text-align: center;
`

const Image = styled.img`
width: 126px;
height: 146px;
`

const Marker = styled.img`
position: absolute;
width: 101px;
height: 5px;
background-color: white;
right: 12px;
top: -0.5px;
filter: brightness(1.5);
border-radius: 6rem;

`