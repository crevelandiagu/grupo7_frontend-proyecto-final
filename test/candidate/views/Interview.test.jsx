import { render } from '@testing-library/react';
import { Interview } from '../../../src/candidate/views/Interview';
import { store } from '../../../src/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('Test to componenet <Interview />', () => {
  test('Should be match with snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Interview />
        </BrowserRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  })
});