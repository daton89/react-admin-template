import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import Sidenav from "./components/Sidenav";
import Toolbar from "./components/Toolbar";
import pages from "./pages";
import RegisterFormContainer from './containers/RegisterForm'

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
`;
const reducers = {
  form: formReducer
};

const reducer = combineReducers(reducers);

let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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
          <RegisterFormContainer />
        </Content>
      </div>
    </Wrapper>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
