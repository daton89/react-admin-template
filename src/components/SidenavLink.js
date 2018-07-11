import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Li = styled.li`
  cursor: pointer;
  display: block;
  text-decoration: none;
  padding: 10px;
  font-size: 1.1em;
  color: #fff;
  &:hover {
    color: #7386d5;
    background: #fff;
  }
  &.active {
    background: #6d7fcc;
  }
`;

const SidenavLink = props => {
  const { name, url /* ,icon, roles */ } = props;
  return (
    <Li>
      <Link to={url}>{name}</Link>
    </Li>
  );
};

SidenavLink.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  icon: PropTypes.string,
  roles: PropTypes.array
};

export default SidenavLink;
