import {forwardRef} from 'react'
import styled from 'styled-components'
import { primary_color } from '../../assets/colors'
import { signupIcon,subscriptionIcon, ExploreIcon } from '../../assets'
import HeroCard from '../../components/heroCard'

export interface Card {
    key: string,
    title: string,
    desc: string,
    img: string,
}

const cardObj:Array<Card> = [
    {
    key: '01',
    title: "Sign Up :",
    desc: "Start your Galaxi journey by creating your account – it's quick and easy.",
    img: signupIcon,
  },
  {
    key: '02',
    title: "Subscription :",
    desc: "Select the subscription plan that aligns with your investment objectives, and unleash the power of our AI-driven strategies.",
    img: subscriptionIcon,
  },
  {
    key: '03',
    title: "Explore :",
    desc: "Dive into data-driven investing for real-time insights, expert guidance, and ample resources to make informed investment choices.",
    img: ExploreIcon,
  }
]  
  const HowItsWork = forwardRef<HTMLDivElement | null>((_, ref) => {
  return (
    <Container ref={ref}>
        <ContainerWrapper>
            <Title>How it Works?</Title>
            <Desc>Unlock the potential of Galaxi with these simple steps:</Desc>
            <CardWrapper>
                {cardObj.map((item,i)=>(<HeroCard key={i} cardObj={item} />))}

            </CardWrapper>

        </ContainerWrapper>
    
    </Container>
  )
})

export default HowItsWork

const Container = styled.div`
    width: 100%;
    background: #F9FAFF;

`
const ContainerWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // padding: 0px 20px;
`

const Title = styled.h1`
font-family: Montserrat;
font-size: 32px;
font-weight: 700;
line-height: 39px;
letter-spacing: 0em;
text-align: left;
color: ${primary_color}
`

const Desc = styled.p`
font-family: Montserrat;
font-size: 16px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
width: 90%;
text-align: center;
`

const CardWrapper = styled.div`
width: 75%;
display: flex;
justify-content: space-evenly;
align-items: center;
padding: 3% 0px;
flex-wrap:wrap;
`