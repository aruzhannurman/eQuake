import React from "react";

import {
  ServicesContainer,
  H1,
  Wrapper,
  Card,
  Icon,
  H2,
  P
} from "./serviStyles";

import Icon1 from "../../assets/img/svg-1.svg";
import Icon2 from "../../assets/img/svg-5.svg";
import Icon3 from "../../assets/img/svg-4.svg";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <H1>Наши Цели</H1>
      <Wrapper>
        <Card>
          <Icon src={Icon1} />
          <H2>
            Научить людей как 

          </H2>
          <P>
            ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы 😉
          </P>
        </Card>

        <Card>
          <Icon src={Icon2} />
          <H2>Vаааааааааааааааааа</H2>
          <P>вввввввввввввввввввввввввввввввааааааааааааааааааааааааааа 🌎</P>
        </Card>

        <Card>
          <Icon src={Icon3} />
          <H2>ааааааааааааааааааа</H2>
          <P>Uппппппппппппппппппппппппппппппппппппппппппппппппппппппппп🤑</P>
        </Card>
      </Wrapper>
    </ServicesContainer>
  );
};

export default Services;
