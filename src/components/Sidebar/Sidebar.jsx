import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  Wrapper,
  Menu,
  SideLinks,
  BtnWrap,
  SideRoute
} from "./sideStyles";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <Wrapper>
        <Menu>
        <SideLinks
            to="services"
            onClick={toggle}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
          >
            О Нас
          </SideLinks>
          <SideLinks
            to="login"
            className="login"
            onClick={toggle}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
          >
            Карта
          </SideLinks>
          <SideLinks
            to="what"
            onClick={toggle}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
          >
            Инфо
          </SideLinks>
          <SideLinks
            to="how"
            // className="signUp"
            onClick={toggle}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
          >
            Советы
          </SideLinks>
        </Menu>

         {/* <BtnWrap>
          <SideRoute to="/login">Log In</SideRoute>
        </BtnWrap> */}
      </Wrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
