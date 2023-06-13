import { STORE_PERSONAL_DETAILS } from './PersonalActionTypes';

const initialState = {
  formData: null,
};

const personalDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_PERSONAL_DETAILS:
      return {
        ...state,
        formData: action.payload,
      };
    default:
      return state;
  }
};

export default personalDetailsReducer;

