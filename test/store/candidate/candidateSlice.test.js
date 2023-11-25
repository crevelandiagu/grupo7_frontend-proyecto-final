import { candidateSlice, showView } from '../../../src/store/candidate/candidateSlice';
import { initialState, setView } from '../../fixtures/candidateStates';

describe('candidateSlice', () => {
  test('Should return the initial state', () => {
    expect(candidateSlice.getInitialState()).toEqual(initialState);
  });

  test('It should change state to view', () => {
    const state = candidateSlice.reducer(setView, showView({view:'assesment'}));
    expect(state).toEqual({
      status: null,
      view: 'assesment',
      candidates: [],
      errorMessage: undefined,
    });
  });

});
