import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Header = styled.header`
  margin-top: 70px;
  color: white;
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(70, 70, 70, 0.48);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.4);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 150px;
  height: 50px;
  text-align: center;
  border-bottom: 5px solid ${(props) => (props.current ? "red" : "transparent")};
  transition: border-bottom 0.25s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/movie/${id}/videos">video</SLink>
      </Item>
      <Item current={pathname === "/similar"}>
        <SLink to="/movie/${id}/similar">similar</SLink>
      </Item>
      <Item current={pathname === "/review"}>
        <SLink to="/movie/${id}/reviews">review</SLink>
      </Item>
    </List>
  </Header>
));
