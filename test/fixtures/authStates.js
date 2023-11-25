export const initialState = {
  status: 'not-authenticated',
  profile: null,
  id: null,
  email: null,
  errorMessage: null,
};

export const setProfile = {
  status: 'not-authenticated',
  profile: 'candidate',
  id: null,
  email: null,
  errorMessage: null,
};

export const authenticated = {
  status: 'authenticated',
  profile: null,
  id: 1,
  email: 'test@test.com',
  errorMessage: null,
};

export const notAuthenticated = {
  status: 'not-authenticated',
  profile: null,
  id: null,
  email: null,
  errorMessage: undefined,
};
