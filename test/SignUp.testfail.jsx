import { render } from '@testing-library/react';
import { SignUp } from '../src/auth/pages/SignUp';

describe('Test to componenet <Landing />', () => {
  test('Should be match with snapshot', () => {
    const { container } = render(<SignUp />);
    expect(container).toMatchSnapshot();
  })
});