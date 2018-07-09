import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Li = styled.li`
  &.active {
    background: #6d7fcc;
  }
`;

const Anchor = styled.a`
  display: block;
  text-decoration: none;
  padding: 10px;
  font-size: 1.1em;
  color: #fff;
  &:hover {
    color: #7386d5;
    background: #fff;
  }
`;

const SidenavLink = props => {
  const { name, url /* ,icon, roles */ } = props;
  return (
    <Li>
      <Anchor href={url} className="">
        <i className="fa fa-dashboard fa-1-3x" />
        {name}
      </Anchor>
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
