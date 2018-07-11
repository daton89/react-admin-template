import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import Sidenav from "./components/Sidenav";
import Toolbar from "./components/Toolbar";
import pages from "./pages";

import "./styles.css";

const Wrapper = styled.div`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 200;
  display: flex;
  width: 100%;
  align-items: stretch;
`;

const Content = styled.div`
  margin-top: 64px;
  padding: 10px;
`

function App() {
  return (
    <Wrapper>
      <Sidenav pages={pages} />
      <div id="content-wrapper">
        <Toolbar />
        <Content id="content">
          <button type="button">
            <i class="fas fa-align-left" />
            <span>Toggle Sidebar</span>
          </button>
        </Content>
      </div>
    </Wrapper>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
