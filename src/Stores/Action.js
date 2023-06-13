// Actions.js
import { SET_HOROSCOPE_DETAILS } from "./ActionTypes";

export const setHoroscopeDetails = (data) => {
  return {
    type: SET_HOROSCOPE_DETAILS,
    payload: data,
  };
};
