import App from "../src/App";
import { render } from "@testing-library/react";


describe('App', () => {
  test('should render', () => {
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })
});