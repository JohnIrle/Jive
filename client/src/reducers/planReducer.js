import { GET_PLANS, PLAN_LOADING } from "../actions/types";

const initalState = {
  result: {},
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
    case GET_PLANS:
      return {
        ...state,
        result: action.payload,
        triggered: true,
        loading: false
      };
    default:
      return state;
  }
}
