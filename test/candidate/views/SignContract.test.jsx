import { fireEvent, render } from '@testing-library/react';
import { SignContract } from '../../../src/candidate/views/SignContract';
import { store } from '../../../src/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('Test to componenet <SignContract />', () => {
  test('Should be match with snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <SignContract />
        </BrowserRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  })

  test('Call signContract function', () => {

    const signContract = jest.fn();

    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <SignContract signContract={signContract} />
        </BrowserRouter>
      </Provider>
    );

    const form = container.querySelector('form');
    fireEvent.submit(form)

    expect( signContract ).toHaveBeenCalledTimes(0);
  })
});