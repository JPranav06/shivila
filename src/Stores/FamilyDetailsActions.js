import { STORE_FAMILY_DETAILS } from './familyDetailsActionTypes';

export const storeFamilyDetails = (familyDetails) => {
  return {
    type: STORE_FAMILY_DETAILS,
    payload: familyDetails,
  };
};