import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Nav = styled.nav`
  font-size: 18px;
  border: none;
  background-color: #2196f3;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  left: 250px;
  top: 0;
  position: fixed;
  right: 0;
  z-index: 1030;
  margin-bottom: 23px;
  transition: all 0.5s ease;
  @media (min-width: 768px) {
    left: 250px;
  }
`;

const UnorderedList = styled.ul`
  list-style: none;
  min-height: 64px;
  height: 46px;
  padding: 0 10px;
  display: flex;
  align-items: center;
`;

const ListItem = styled.li`
  flex: 1;
`;

const Toolbar = props => {
  const { currentPage, username } = props;
  return (
    <Nav>
      <UnorderedList role="navigation">
        <ListItem>
          <img src="icons/bars.png" alt="bars" />
          <button type="button" id="sidebarCollapse" class="btn btn-info">
            <i class="fas fa-align-left" />
            <span>Toggle Sidebar</span>
          </button>
        </ListItem>
        <ListItem>
          <strong>{currentPage}</strong>
        </ListItem>
        <ListItem className="active <%= user.isAdmin || user.tipo === 'Amministratore' ? '' : 'hide' %>">
          <i className="fa fa-users" />
          <span className="badge" id="on-line-users">
            1
          </span>
        </ListItem>
        <ListItem>
          <i className="fa fa-user fa-1-3x" />
          <strong>{username}</strong>
        </ListItem>
        <ListItem>
          <a href="/api/v1/auth/logout">
            <i className="fa fa-sign-out" /> Esci
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
