import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  RESTORE_TOKEN,
} from '../actions/action.types';

const initialState = {
  name: null,
  email: null,
  token: null,
  photo: null,
  isLoading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        photo: action.payload.photo,
        token: action.payload.token,
        isLoading: false,
      };
    case USER_LOGGED_OUT:
      return {
        ...initialState,
        isLoading: false,
      };
    case RESTORE_TOKEN:
      return {
        ...initialState,
        isLoading: false,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
