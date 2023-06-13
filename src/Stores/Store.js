import { configureStore } from '@reduxjs/toolkit';
import familyDetailsReducer from './familyDetailsReducer';
import personalDetailsReducer from './PersonalDetailsReducer';
import horroscopedetailsReducer from '../Stores/Reducers/horroscopedetails';

const store = configureStore({
  reducer: {
    familyDetails: familyDetailsReducer,
    personalDetails: personalDetailsReducer,
    horroscopedetails: horroscopedetailsReducer,
  },
});

export default store;

