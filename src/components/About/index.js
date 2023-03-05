import React from 'react';
import {AboutContainer, CardsContainer} from "./AboutElements";
import PersonCard from "../PersonCard";
import {Data1, Data2, Data3} from "./Data";

function About(props) {
  return (
    <AboutContainer>
      <CardsContainer>
        <PersonCard src={Data1.src} name={Data1.name} occupation={Data1.occupation} me={Data1.me} />
        <PersonCard src={Data2.src} name={Data2.name} occupation={Data2.occupation} me={Data2.me} />
        <PersonCard src={Data3.src} name={Data3.name} occupation={Data3.occupation} me={Data3.me} />
      </CardsContainer>
    </AboutContainer>
  );
}

export default About;