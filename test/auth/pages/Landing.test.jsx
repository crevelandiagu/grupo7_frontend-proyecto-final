import { render } from '@testing-library/react';
import { Landing } from '../../../src/auth/pages/Landing';
import { store } from '../../../src/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('Test to componenet <Landing />', () => {
  test('Should be match with snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Landing />
        </BrowserRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  })
});