import React, { useRef } from "react";
import Header from "./header";
import HowItsWork from "./howItWorks";
import WhyGalaxi from "./whyGalaxi";
import AvailableSection from "./availableSection";
import ContactUs from "./contactus";
import TryFreeSection from "./tryFree";
import Footer from "./footer";
import FAQS from "./faqs";

const Screens: React.FC = () => {
  const howItsWorkRef = useRef<HTMLDivElement | null>(null);
  const whyGalaxiRef = useRef<HTMLDivElement | null>(null);
  const availableSectionRef = useRef<HTMLDivElement | null>(null);
  const contactUsRef = useRef<HTMLDivElement | null>(null);
  const tryFreeSectionRef = useRef<HTMLDivElement | null>(null);
  const explainerRef = useRef<HTMLDivElement | null>(null);
  const FAQSRef = useRef<HTMLDivElement | null>(null);

  const howItsWorkRefClick = () => {
    howItsWorkRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const whyGalaxiRefClick = () => {
    whyGalaxiRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const availableSectionRefClick = () => {
    availableSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const contactUsRefClick = () => {
    contactUsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const tryFreeSectionRefClick = () => {
    tryFreeSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const explainerRefClick = () => {
    explainerRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const FAQSRefClick = () => {
    FAQSRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  function handleHeaderClick(caseNumber: number) {
    switch (caseNumber) {
      case 1:
        howItsWorkRefClick();
        break;
      case 2:
        whyGalaxiRefClick();
        break;
      case 3:
        availableSectionRefClick();
        break;
      case 4:
        contactUsRefClick();
        break;
      case 5:
        tryFreeSectionRefClick();
        break;
      case 6:
        explainerRefClick();
        break;
      case 7:
        FAQSRefClick();
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Header handleHeaderClick={handleHeaderClick} />
      <HowItsWork ref={howItsWorkRef} />
      <WhyGalaxi
        ref1={whyGalaxiRef}
        ref2={availableSectionRef}
        ref3={explainerRef}
      />
      <AvailableSection ref={tryFreeSectionRef} />
      <FAQS ref={FAQSRef} />
      <ContactUs ref={contactUsRef} />
      <TryFreeSection ref={tryFreeSectionRef} />
      <Footer />
    </>
  );
};

export default Screens;
