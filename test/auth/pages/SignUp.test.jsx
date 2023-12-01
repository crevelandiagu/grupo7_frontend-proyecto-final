import { render } from '@testing-library/react';
import { SignUp } from '../../../src/auth/pages/SignUp';
import { store } from '../../../src/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


describe('Test to componenet <SignUp />', () => {
  test('Should be match with snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
        <SignUp />
        </BrowserRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  })
});