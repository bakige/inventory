import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import { ApplicationState } from "./store";
import { Store } from "redux";
import { History } from "history";
import { ConnectedRouter } from "connected-react-router";
import Routes from "./routes";
interface MainProps {
  store: Store<ApplicationState>;
  history: History;
}

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
  </Provider>
  );
}

export default App;
