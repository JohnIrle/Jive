import axios from "axios";
import { GET_PLANS, PLAN_LOADING, GET_ERRORS } from "./types";

// Get Plans
export const getPlans = () => dispatch => {
  dispatch(setPlanLoading());
  axios
    .get("/api/settings/food")
    .then(res =>
      dispatch({
        type: GET_PLANS,
        payload: res
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PLANS,
        payload: null
      })
    );
};

// Set loading State
export const setPlanLoading = () => {
  return {
    type: PLAN_LOADING
  };
};
