export const SET_HOROSCOPE_DETAILS = 'SET_HOROSCOPE_DETAILS';


export const setHoroscopeDetails = (formData) => {
  return {
    type: SET_HOROSCOPE_DETAILS,
    payload: formData,
  };
};
