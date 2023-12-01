import { fireEvent, render } from '@testing-library/react';
import { ProfileEducation } from '../../../src/candidate/views/ProfileEducation';
import { store } from '../../../src/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('Test to componenet <ProfileEducation />', () => {

  const valueSchool = 'Libre univerisity';
  const valueDegree = 'Engineer';
  const valueStartDate = '12-12-2016';
  const valueEndDate = '12-12-2021';
  const valueLocation = 'Bogota';

  test('Should be match with snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ProfileEducation />
        </BrowserRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  })

  test('Call saveEducationInfo function', () => {

    const saveEducationInfo = jest.fn();

    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ProfileEducation saveEducationInfo={saveEducationInfo} />
        </BrowserRouter>
      </Provider>
    );

    const inputSchool = container.querySelector('[name="school"]');
    const inputDegree = container.querySelector('[name="degree"]');
    const inputStartDate = container.querySelector('[name="startDate"]');
    const inputEndDate = container.querySelector('[name="endDate"]');
    const inputLocation = container.querySelector('[name="location"]');
    const inputSkill = container.querySelector('#skills');
    const form = container.querySelector('form');

    fireEvent.change(inputSchool, { target: { value: valueSchool } });
    fireEvent.change(inputDegree, { target: { value: valueDegree } });
    fireEvent.change(inputStartDate, { target: { value: valueStartDate } });
    fireEvent.change(inputEndDate, { target: { value: valueEndDate } });
    fireEvent.change(inputLocation, { target: { value: valueLocation } });
    fireEvent.change(inputSkill, { target: { value: { name: 'Docker' } } })
    fireEvent.submit(form)

    expect( saveEducationInfo ).toHaveBeenCalledTimes(0);
  })

});