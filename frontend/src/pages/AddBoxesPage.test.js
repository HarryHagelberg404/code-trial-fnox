import React from "react"
import { render, screen } from '@testing-library/react';
import AddBoxesPage from "./AddBoxesPage";
import { Provider } from "react-redux";
import { store } from '../store/Store';
import Navbar from "../components/navigation/Navbar";
import App from "../App";

test('on initial render the pay button is disabled', () => {
  render(
      <App/>
    );

  screen.debug();
})