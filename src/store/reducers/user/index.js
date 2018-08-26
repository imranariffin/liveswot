import * as types from '../../actions/actionTypes';


export const initialState = {
  username: '',
  email: '',
  firstName: '',
  lastName: '',
  userId: '',
  isLoading: false,
  errors: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP:
    case types.LOGIN: {
      return {
        ...initialState,
        isLoading: true,
        errors: [],
      };
    }
    case types.SIGNUP_SUCCESS:
    case types.LOGIN_SUCCESS: {
      const user = action.data.user;
      return {
        username: user.username,
        email: user.email,
        userId: user.userId,
        isLoading: false,
        errors: [],
      };
    }
    case types.SIGNUP_ERROR:
    case types.LOGIN_ERROR: {
      return {
        ...initialState,
        errors: [ ...action.errors ],
        isLoading: false,
      };
    }
    case types.CLEAR_ERROR:
      if (action.errorType !== 'user') {
        return state;
      }
      return {
        ...state,
        errors: [],
      };
    default:
      return state;
  }
};

export default user;