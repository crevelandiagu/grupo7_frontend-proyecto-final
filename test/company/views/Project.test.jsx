import { render } from '@testing-library/react';
import { Project } from '../../../src/company/views/Project';
import { store } from '../../../src/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('Test to component company <Project />', () => {
  test('Should be match with snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Project />
        </BrowserRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  })
});