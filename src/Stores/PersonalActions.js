import { STORE_PERSONAL_DETAILS } from '../Stores/PersonalActionTypes';

export const storePersonalDetails = (formData) => {
  return {
    type: STORE_PERSONAL_DETAILS,
    payload: formData,
  };
};

