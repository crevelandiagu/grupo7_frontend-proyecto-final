import { fireEvent, render } from '@testing-library/react';
import { ProfileExperience } from '../../../src/candidate/views/ProfileExperience';
import { store } from '../../../src/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('Test to componenet <ProfileExperience />', () => {

  const valuePosition = 'Developer';
  const valueCompany = 'Adl Soluciones';
  const valueStartDate = '2021-10-20';
  const valueEndDate = '2023-10-20';
  const valueLocation = 'Medellin';

  test('Should be match with snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ProfileExperience />
        </BrowserRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  })

  test('Call saveExperienceInfo function', () => {

    const saveExperienceInfo = jest.fn();

    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ProfileExperience saveExperienceInfo={saveExperienceInfo} />
        </BrowserRouter>
      </Provider>
    );

    const inputPosition = container.querySelector('[name="position"]');
    const inputCompany = container.querySelector('[name="company"]');
    const inputStartDate = container.querySelector('[name="startDate"]');
    const inputEndDate = container.querySelector('[name="endDate"]');
    const inputLocation = container.querySelector('[name="location"]');
    const inputSkill = container.querySelector('#skills');
    const form = container.querySelector('form');

    fireEvent.change(inputPosition, { target: { value: valuePosition } });
    fireEvent.change(inputCompany, { target: { value: valueCompany } });
    fireEvent.change(inputStartDate, { target: { value: valueStartDate } });
    fireEvent.change(inputEndDate, { target: { value: valueEndDate } });
    fireEvent.change(inputLocation, { target: { value: valueLocation } });
    fireEvent.change(inputSkill, { target: { value: { name: 'Docker' } } })

    fireEvent.submit(form)

    expect(saveExperienceInfo).toHaveBeenCalledTimes(0);
  })

});