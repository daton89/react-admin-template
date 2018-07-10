import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// import "../styles/Sidenav.css";
import SidenavLink from "./SidenavLink";
import SidenavDropdown from "./SidenavDropdown";

const Nav = styled.nav`
  min-height: 100vh;
  min-width: 250px;
  max-width: 250px;
  overflow-y: auto;
  background: #7386d5;
  color: #fff;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  &.active {
    margin-left: -250px;
  }
  @media (max-width: 768px) {
    margin-left: -250px;
  }
`;

const BrandDiv = styled.div`
  background: #6d7fcc;
`;

const UnorderedList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  @media (max-width: 768px) {
    margin-left: -250px;
    &.active {
      margin-left: 0;
    }
  }
`;

const ListHeading = styled.p`
  padding: 10px;
`;

const LogoImage = styled.img`
  width: 128px;
  height: 128px;
`;

const Sidenav = props => {
  const { pages } = props;

  return (
    <Nav id="sidenav-wrapper" className="">
      <BrandDiv>
        <LogoImage src="react-logo.png" alt="logo" />
      </BrandDiv>
      <UnorderedList>
        <ListHeading>React admin layout</ListHeading>
        {pages.map(
          ({ name, url, type, childs }) =>
            type === "link" ? (
              <SidenavLink name={name} url={url} />
            ) : (
              <SidenavDropdown name={name} url={url}>
                {childs.map(child => (
                  <SidenavLink name={child.name} url={child.url} />
                ))}
              </SidenavDropdown>
            )
        )}
      </UnorderedList>
    </Nav>
  );
};

Sidenav.propTypes = {
  pages: PropTypes.array
};

export default Sidenav;
