import {
  companySlice,
  showView,
} from '../../../src/store/company/companySlice';
import { initialState, setView } from '../../fixtures/companyStates';

describe('companySlice', () => {
  test('Should return the initial state', () => {
    expect(companySlice.getInitialState()).toEqual(initialState);
  });

  test('It should change state to view', () => {
    const state = companySlice.reducer(
      setView,
      showView({ view: 'interview' })
    );
    expect(state).toEqual({
      status: null,
      view: 'interview',
      idCandidate: null,
      errorMessage: undefined,
    });
  });
});
