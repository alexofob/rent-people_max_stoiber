import {
  CLOSE_SNACKBAR,
  OPEN_SNACKBAR,
  SET_SNACKBAR_MESSAGE }
  from './constants';

import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  isSnackbarOpened: false,
  snackbarMessage: ' ',
});

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLOSE_SNACKBAR:
      return state
        .set('isSnackbarOpened', false);
    case OPEN_SNACKBAR:
      return state
        .set('isSnackbarOpened', true);
    case SET_SNACKBAR_MESSAGE:
      return state
        .set('snackbarMessage', action.message);
    default:
      return state;
  }
};

export default appReducer;
