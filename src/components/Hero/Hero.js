import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portofolio
      </SectionTitle>
      <SectionText>
        The purpose of javascript mastery is to help aspiring and establish
        developers
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
