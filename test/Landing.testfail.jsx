import { render } from '@testing-library/react';
import { Landing } from '../src/auth/pages/Landing';

describe('Test to componenet <Landing />', () => {
  test('Should be match with snapshot', () => {
    const { container } = render(<Landing />);
    expect(container).toMatchSnapshot();
  })
});