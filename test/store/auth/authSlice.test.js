import { authSlice, checking, clearErrorMessages, logout, setProfile, signin, signup } from '../../../src/store/auth/authSlice';
import { authenticated, initialState } from '../../fixtures/authStates';
import { testCandidateCredentials } from '../../fixtures/testUser';

describe('authSlice', () => {
  test('Should return the initial state', () => {
    expect(authSlice.getInitialState()).toEqual(initialState);
  });

  test('It should change state to checking', () => {
    const state = authSlice.reducer(initialState, checking());
    expect(state).toEqual({
      status: 'checking',
      profile: null,
      id: null,
      email: null,
      user: null,
      errorMessage: undefined,
    });
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

  test('It should change the status to authenticade ', () => {
    const state = authSlice.reducer(initialState, signup(testCandidateCredentials));
    expect(state).toEqual({
      status: 'authenticated',
      profile: null,
      id: 1,
      email: 'canidate@test.com',
      errorMessage: undefined,
    });
  });


  test('It should change the state to not-authenticated ', () => {
    const state = authSlice.reducer(authenticated, logout());
    console.log('***', state)
    expect(state).toEqual({
      status: 'not-authenticated',
      profile:null,
      id: null,
      email: null,
      errorMessage: undefined
    });
  });

  test('It should delete errorMessage on state ', () => {
    const state = authSlice.reducer(initialState, clearErrorMessages());
    console.log(state)
    expect(state).toEqual({
      status: 'not-authenticated',
      profile:null,
      id: null,
      email: null,
      errorMessage: undefined
    });
  });

});
