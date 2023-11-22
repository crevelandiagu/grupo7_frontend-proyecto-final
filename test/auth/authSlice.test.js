import { authSlice, setProfile, signin } from '../../src/store/auth/authSlice';
import { initialState } from '../fixtures/authStates';
import { testCandidateCredentials } from '../fixtures/testUser';

describe('authSlice', () => {
  test('Should return the initial state', () => {
    expect(authSlice.getInitialState()).toEqual(initialState);
  });

  test('It should set the state.profile', () => {
    const state = authSlice.reducer(initialState, setProfile('candidate'));
    expect(state).toEqual({
      status: 'not-authenticated',
      profile: 'candidate',
      id: null,
      email: null,
      errorMessage: null,
    });
  });

  test('It should change the status to authenticade ', () => {
    const state = authSlice.reducer(initialState, signin(testCandidateCredentials));
    expect(state).toEqual({
      status: 'authenticated',
      profile: null,
      id: 1,
      email: 'canidate@test.com',
      errorMessage: undefined,
    });
  });

 
});
