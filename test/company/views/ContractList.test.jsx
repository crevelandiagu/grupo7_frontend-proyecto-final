
import { render } from '@testing-library/react';
import { ContractList } from '../../../src/company/views/ContractList';
import { store } from '../../../src/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('Test to component company <ContractList />', () => {
  test('Should be match with snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ContractList />
        </BrowserRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  })
});