// familyDetailsReducer.js

import { STORE_FAMILY_DETAILS } from './familyDetailsActionTypes';

const initialState = {
  marriedsisters: 0,
  unmarriedsisters: 0,
  marriedbrothers: 0,
  unmarriedbrothers: 0,
  fatherAlive: 'Not Provided',
  fatherName: 'Not Provided',
  fatherOccupation: 'Not Provided',
  motherAlive: 'Not Provided',
  motherName: 'Not Provided',
  motherOccupation: 'Not Provided',
  parentsLivingTogether: 'Not Provided',
  intercastMarriage: 'Not Provided',
  mamasName: 'Not Provided',
  nativePlace: 'Not Provided',
  familyWealth: 'Not Provided',
  currentLocation: 'Not Provided',
  relativesSurname: 'Not Provided',
};
  

const familyDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
      case STORE_FAMILY_DETAILS:
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  };
  

export default familyDetailsReducer;
