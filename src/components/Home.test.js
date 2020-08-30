import React from "react";
import { render, cleanup } from '@testing-library/react';
import Home from './Home';

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<Home customers={[]} />);
  expect(asFragment()).toMatchSnapshot();
});