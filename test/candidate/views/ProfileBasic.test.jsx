import { fireEvent, render } from '@testing-library/react';
import { ProfileBasic } from '../../../src/candidate/views/ProfileBasic';
import { store } from '../../../src/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('Test to componenet <ProfileBasic />', () => {

  const valueName = 'Jack';
  const valueLastname = 'Sparrow';
  const valueId = '12345678';
  const valueLocation = 'Caracas';
  const valuePhone = '4141234567';

  test('Should be match with snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ProfileBasic />
        </BrowserRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  })


  test('Call saveBasicInfo function', () => {

    const saveBasicInfo = jest.fn();

    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ProfileBasic saveBasicInfo={saveBasicInfo} />
        </BrowserRouter>
      </Provider>
    );

    const inputName = container.querySelector('[name="name"]');
    const inputLastname = container.querySelector('[name="lastName"]');
    const inputId = container.querySelector('[name="numberId"]');
    const inputLocation = container.querySelector('[name="location"]');
    const inputPhone = container.querySelector('[name="phone"]');
    const form = container.querySelector('form');

    fireEvent.change(inputName, { target: { value: valueName } });
    fireEvent.change(inputLastname, { target: { value: valueLastname } });
    fireEvent.change(inputId, { target: { value: valueId } });
    fireEvent.change(inputLocation, { target: { value: valueLocation } });
    fireEvent.change(inputPhone, { target: { value: valuePhone } });
    fireEvent.submit(form)

    expect( saveBasicInfo ).toHaveBeenCalledTimes(0);
  })

  test('Dont call saveBasicInfo function', () => {

    const saveBasicInfo = jest.fn();

    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ProfileBasic saveBasicInfo={saveBasicInfo} />
        </BrowserRouter>
      </Provider>
    );

    const inputName = container.querySelector('[name="name"]');
    const inputLastname = container.querySelector('[name="lastName"]');
    const inputId = container.querySelector('[name="numberId"]');
    const inputLocation = container.querySelector('[name="location"]');
    const form = container.querySelector('form');

    fireEvent.change(inputName, { target: { value: valueName } });
    fireEvent.change(inputLastname, { target: { value: valueLastname } });
    fireEvent.change(inputId, { target: { value: valueId } });
    fireEvent.change(inputLocation, { target: { value: valueLocation } });
    fireEvent.submit(form)

    expect(saveBasicInfo).not.toHaveBeenCalled();
  })

});