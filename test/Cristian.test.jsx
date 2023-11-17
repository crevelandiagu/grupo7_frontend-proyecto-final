import { render } from "@testing-library/react"
import { JobsApp } from "../src/JobsApp.jsx";


describe('Cristian test', () => {
  test('Renders main page correctly', () => {
    expect(true).toBeTruthy();
  })
});


// Tests
test('Renders main page correctly', () => {
  render(<JobsApp />);
  expect(true).toBeTruthy();
});