import { render } from '@testing-library/react';
import { SignIn } from '../src/auth/pages/SignIn';

describe('Test to componenet <Landing />', () => {
  test('Should be match with snapshot', () => {
    const { container } = render(<SignIn />);
    expect(container).toMatchSnapshot();
  })
});