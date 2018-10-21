import axios from "axios";

import { GET_SETTINGS, SETTINGS_LOADING, GET_ERRORS } from "./types";

// Get current settings
export const getCurrentSettings = () => dispatch => {
  dispatch(setSettingsLoading());
  axios
    .post("/api/settings")
    .then(res =>
      dispatch({
        type: GET_SETTINGS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_SETTINGS,
        payload: {}
      })
    );
};

// Settings Loading
export const setSettingsLoading = () => {
  return {
    type: SETTINGS_LOADING
  };
};
