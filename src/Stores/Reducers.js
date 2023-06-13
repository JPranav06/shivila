// Reducer.js
import { SET_HOROSCOPE_DETAILS } from './ActionTypes';

const initialState = {
  horoscopeDetails: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOROSCOPE_DETAILS:
      return {
        ...state,
        horoscopeDetails: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;



