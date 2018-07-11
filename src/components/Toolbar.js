import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Nav = styled.nav`
  font-size: 18px;
  border: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 250px;
  right: 0;
  z-index: 1030;
  margin-bottom: 23px;
  min-height: 64px;
  max-height: 64px;
  height: 64px;
  color: white;
  transition: all 0.5s ease;
  &.blue {
    background-color: #2196f3;
  }
  @media (min-width: 768px) {
    left: 250px;
  }
`;

const UnorderedList = styled.ul`
  list-style: none;

  padding: 0 10px;
  display: flex;
  align-items: center;
`;

const ListItem = styled.li`
  flex: 1;
  cursor: pointer;
`;

const Toolbar = props => {
  const { currentPage, username } = props;
  return (
    <Nav className="blue">
      <UnorderedList role="navigation">
        <ListItem>
          <img src="icons/bars.png" alt="bars" />
        </ListItem>
        <ListItem>
          <span>{currentPage || window.location.pathname}</span>
        </ListItem>
        <li style={{ flex: 5 }} />
        <ListItem className="show-admin">
          <img src="icons/users.png" alt="bars" />
          <span>1</span>
        </ListItem>
        <ListItem>
          <strong>{username}</strong>
        </ListItem>
        <ListItem>
          <a href="/api/v1/auth/logout">
            <i className="fa fa-sign-out" /> Logout
          </a>
        </ListItem>
      </UnorderedList>
    </Nav>
  );
};

Toolbar.propTypes = {
  currentPage: PropTypes.string,
  username: PropTypes.string
};

export default Toolbar;
