import { CLOSE_SNACKBAR, OPEN_SNACKBAR, SET_SNACKBAR_MESSAGE }
  from './constants';

export const closeSnackbar = () => ({
  type: CLOSE_SNACKBAR,
});

export const openSnackbar = () => ({
  type: OPEN_SNACKBAR,
});

export const setSnackbarMessage = (message) => ({
  type: SET_SNACKBAR_MESSAGE,
  message,
});
