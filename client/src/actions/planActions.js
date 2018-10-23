import axios from 'axios';
import { GET_FOOD_PLANS, PLAN_LOADING, GET_ERRORS, GET_ACTIVITY_PLANS } from './types';

// Get Plans
export const getFoodPlans = () => dispatch => {
  dispatch(setPlanLoading());
  axios
    .get('/api/settings/food')
    .then(res =>
      dispatch({
        type: GET_FOOD_PLANS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_FOOD_PLANS,
        payload: err
      })
    );
};

export const getActivityPlans = () => dispatch => {
  dispatch(setPlanLoading());
  axios
    .get('/api/settings/activity')
    .then(res => dispatch({ type: GET_ACTIVITY_PLANS, payload: res.data }));
};

// Set loading State
export const setPlanLoading = () => {
  return {
    type: PLAN_LOADING
  };
};
