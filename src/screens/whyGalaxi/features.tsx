import { forwardRef } from "react";
import styled from "styled-components";
import { primary_color } from "../../assets/colors";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Autoplay } from "swiper/modules";
import image1 from "../../assets/svgs/1.png";
import image2 from "../../assets/svgs/2.png";
import image3 from "../../assets/svgs/3.png";
import image4 from "../../assets/svgs/4.png";
import image5 from "../../assets/svgs/5.png";
import image6 from "../../assets/svgs/6.png";
import image7 from "../../assets/svgs/7.png";

export interface Card {
  key: string;
  title: string;
  desc: string;
  img: string;
}

const imageArray = [image1, image2, image3, image4, image5, image6, image7];

const Features = forwardRef<HTMLDivElement | null>((_, ref2) => {
  return (
    <Container ref={ref2} >
      <Title>Features</Title>
      <Desc>
        
Galaxi App offers a user-friendly interface and real-time data for informed investing. With five proven strategies, including quality, value, momentum, and growth, it simplifies complex financial decisions. Join us to unlock much more in the world of data-driven investing and maximize your financial potential.
      </Desc>
      <CardWrapper>
        <Swiper
          loop={true}
          autoplay={{
            delay: 1000,
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 40,
            depth: 150,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="swiper_container"
        >
          {imageArray.map((item, i) => (
            <SwiperSlide key={i}>
              <Slide src={item} alt="slide_image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </CardWrapper>
    </Container>
  );
});

export default Features;

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
`;
const Desc = styled.p`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  width: 90%;
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

const Slide = styled.img`
  width: 100%;
`;
