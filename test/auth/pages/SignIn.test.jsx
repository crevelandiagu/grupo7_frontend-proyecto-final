import { render } from '@testing-library/react';
import { SignIn } from '../../../src/auth/pages/SignIn';
import { store } from '../../../src/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


describe('Test to componenet <SignIn />', () => {
  test('Should be match with snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
        <SignIn />
        </BrowserRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  })
});