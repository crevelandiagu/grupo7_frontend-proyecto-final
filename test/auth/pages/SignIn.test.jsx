import { render } from '@testing-library/react';
import { SignIn } from '../../../src/auth/pages/SignIn';
import { Provider } from 'react-redux';
import { store } from '../../../src/store';
import { MemoryRouter } from 'react-router';

describe('Test to componenet <SignIn />', () => {
  test('Should be match with snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
        <SignIn />
        </MemoryRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  })
});