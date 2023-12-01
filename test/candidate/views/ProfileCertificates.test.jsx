import { fireEvent, render } from '@testing-library/react';
import { ProfileCertificates } from '../../../src/candidate/views/ProfileCertificates';
import { store } from '../../../src/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('Test to componenet <ProfileCertificates />', () => {

  const valueCertification = 'Solution Architect';
  const valueIssuingOrganization = 'aws';
  const valueStartDate = '12-12-2021';
  const valueEndDate = 'Caracas';

  test('Should be match with snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ProfileCertificates />
        </BrowserRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  })

  test('Call saveCerticatesInfo function', () => {

    const saveCerticatesInfo = jest.fn();

    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ProfileCertificates saveCerticatesInfo={saveCerticatesInfo} />
        </BrowserRouter>
      </Provider>
    );

    const inputName = container.querySelector('[name="certification"]');
    const inputLastname = container.querySelector('[name="issuingOrganization"]');
    const inputId = container.querySelector('[name="startDate"]');
    const inputLocation = container.querySelector('[name="endDate"]');
    const form = container.querySelector('form');

    fireEvent.change(inputName, { target: { value: valueCertification } });
    fireEvent.change(inputLastname, { target: { value: valueIssuingOrganization } });
    fireEvent.change(inputId, { target: { value: valueStartDate } });
    fireEvent.change(inputLocation, { target: { value: valueEndDate } });
    fireEvent.submit(form)

    expect( saveCerticatesInfo ).toHaveBeenCalledTimes(0);
  })
});