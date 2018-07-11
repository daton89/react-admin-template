import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Sidenav from "./components/Sidenav";
import Toolbar from "./components/Toolbar";
import pages from "./pages";
import RegisterFormContainer from "./containers/RegisterForm";

import "./styles.css";

const Wrapper = styled.div`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 200;
  display: flex;
  width: 100%;
  align-items: stretch;
`;

const ContentWrapper = styled.div`
  width: 100%;
`;

const Content = styled.div`
  margin-top: 64px;
  padding: 10px;
  width: 100%;
`;
const reducers = {
  form: formReducer
};

const reducer = combineReducers(reducers);

let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
    <Router>
      <Wrapper>
        <Sidenav pages={pages} />
        <ContentWrapper id="content-wrapper">
          <Toolbar />
          <Content id="content">
            <Route exact path="/" render={() => <h1>Home</h1>} />
            <Route path="/about" render={() => <h1>About</h1>} />
            <Route path="/contact" render={() => <h1>Contact</h1>} />
            <Route path="/signup" render={() => <RegisterFormContainer />} />
            <button type="button">
              <i class="fas fa-align-left" />
              <span>Toggle Sidebar</span>
            </button>
          </Content>
        </ContentWrapper>
      </Wrapper>
    </Router>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
