import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import { store } from "../../store/Store";

test("Increment new boxes", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>
  );
  const counter = screen.getByRole("boxCounter");
  expect(counter).toHaveTextContent("0");
  
})