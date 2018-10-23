import { GET_SETTINGS, SETTINGS_LOADING } from '../actions/types';

const initialState = {
  setting: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SETTINGS_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_SETTINGS:
      return {
        ...state,
        setting: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
