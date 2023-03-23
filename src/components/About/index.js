import React from "react";
import { AboutContainer, AboutHeading, CardsContainer } from "./AboutElements";
import PersonCard from "../PersonCard";
import { Data1, Data2, Data3 } from "./Data";

function About(props) {
  return (
    <AboutContainer id="about">
      <AboutHeading>Команда проекта</AboutHeading>
      <CardsContainer>
        <PersonCard
          src={Data1.src}
          name={Data1.name}
          occupation={Data1.occupation}
        />
        <PersonCard
          src={Data2.src}
          name={Data2.name}
          occupation={Data2.occupation}
        />
        <PersonCard
          src={Data3.src}
          name={Data3.name}
          occupation={Data3.occupation}
        />
      </CardsContainer>
    </AboutContainer>
  );
}

export default About;