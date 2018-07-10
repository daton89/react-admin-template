import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ListItem = styled.li`
  &.active {
    background: #6d7fcc;
  }
`;

const DropdownLabel = styled.div`
  display: block;
  position: relative;
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
    width: 0;
    height: 0;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
  }
`;

class SidenavDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  toggleDropdown() {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    const { name /*, url, icon, roles */, children } = this.props;
    const { open } = this.state;

    const UnorderedList = styled.ul`
      list-style: none;
      display: ${open ? "block" : "none"};
    `;

    return (
      <ListItem onClick={this.toggleDropdown.bind(this)}>
        <DropdownLabel>
          <i className="fa fa-dashboard fa-1-3x" />
          {name}
        </DropdownLabel>
        <UnorderedList style={open ? { display: "block" } : {}}>
          {children}
        </UnorderedList>
      </ListItem>
    );
  }
}

SidenavDropdown.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  icon: PropTypes.string,
  roles: PropTypes.array
};

export default SidenavDropdown;
