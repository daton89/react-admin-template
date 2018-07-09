import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Li = styled.li`
  &.active {
    background: #6d7fcc;
  }
`;

const DropdownLabel = styled.a`
  display: block;
  text-decoration: none;
  padding: 10px;
  font-size: 1.1em;
  color: #fff;
  &:hover {
    color: #7386d5;
    background: #fff;
  }
  &::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
`;

const SidenavDropdown = props => {
  const { name, url /* ,icon, roles */, children } = props;
  return (
    <Li>
      <DropdownLabel href="javascript:;">
        <i className="fa fa-dashboard fa-1-3x" />
        {name}
      </DropdownLabel>
      <ul className="">{children}</ul>
    </Li>
  );
};

SidenavDropdown.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  icon: PropTypes.string,
  roles: PropTypes.array
};

export default SidenavDropdown;
