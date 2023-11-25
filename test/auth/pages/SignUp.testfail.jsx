import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../src/store';
import { SignUp } from '../../../src/auth/pages/SignUp';
import { MemoryRouter } from 'react-router';

describe('Test to componenet <Landing />', () => {
  test('Should be match with snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
        <SignUp />
        </MemoryRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  })
});