import { render } from '@testing-library/react';
import { PerformanceList } from '../../../src/candidate/views/PerformanceList';
import { store } from '../../../src/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('Test to componenet <PerformanceList />', () => {
  test('Should be match with snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <PerformanceList />
        </BrowserRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  })
});