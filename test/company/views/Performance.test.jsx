import { fireEvent, render } from '@testing-library/react';
import { Performance } from '../../../src/company/views/Performance';
import { store } from '../../../src/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('Test to component company <Performance />', () => {
  test('Should be match with snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Performance />
        </BrowserRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  })

  test('Call sendScore function', () => {

    const sendScore = jest.fn();

    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Performance sendScore={sendScore} idPerformance="1" />
        </BrowserRouter>
      </Provider>
    );

    const inputScore = container.querySelector('[name="score"]');
    fireEvent.change(inputScore, { target: { value: 65 } });
    const btnScore = container.querySelector('Button');
    fireEvent.click(btnScore);
  })

});