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

import Icon1 from "../../assets/img/human1.svg";
import Icon2 from "../../assets/img/human2.svg";
import Icon3 from "../../assets/img/human3.svg";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <H1>Наши Цели</H1>
      <Wrapper>
        <Card>
          <Icon src={Icon1} />
          <H2>
            Подсказать людям быстрое и безопасное место

          </H2>
          {/* <P>
            We help you reduce your fees and increase your overall revenue! 😉
          </P> */}
        </Card>

        <Card>
          <Icon src={Icon2} />
          <H2>Помочь людям при выборе и покупке дома</H2>
          {/* <P>Access our platform anywhere in the world! 🌎</P> */}
        </Card>

        <Card>
          <Icon src={Icon3} />
          <H2>Воспитать осознанное и новое  поколение  </H2>
          {/* <P>Unlock our exclusive debit/credit card with 10% of cashback! 🤑</P> */}
        </Card>
      </Wrapper>
    </ServicesContainer>
  );
};

export default Services;
