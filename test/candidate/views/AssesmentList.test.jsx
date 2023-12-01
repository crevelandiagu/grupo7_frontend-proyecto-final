import { render } from '@testing-library/react';
import { AssesmentList } from '../../../src/candidate/views/AssesmentList';
import { store } from '../../../src/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('Test to componenet <AssesmentList />', () => {
  test('Should be match with snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <AssesmentList />
        </BrowserRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  })
});