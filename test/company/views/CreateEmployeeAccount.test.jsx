import { render } from '@testing-library/react';
import { CreateEmployeeAccount } from '../../../src/company/views/CreateEmployeeAccount';
import { store } from '../../../src/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('Test to component company <CreateEmployeeAccount />', () => {
  test('Should be match with snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CreateEmployeeAccount />
        </BrowserRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  })
});