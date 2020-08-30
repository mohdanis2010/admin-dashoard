import React from "react";
import { render, cleanup } from '@testing-library/react';
import PaginationFilter from './PaginationFilter';

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<PaginationFilter customers={[]}  />);
  expect(asFragment()).toMatchSnapshot();
});



