import { GET_FOOD_PLANS, GET_ACTIVITY_PLANS, PLAN_LOADING } from '../actions/types';

const initalState = {
  food: [],
  activities: {},
  triggered: false,
  loading: false
};

export default function(state = initalState, action) {
  switch (action.type) {
    case PLAN_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_FOOD_PLANS:
      return {
        ...state,
        food: action.payload,
        loading: false
      };
    case GET_ACTIVITY_PLANS:
      return {
        ...state,
        activities: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
