import { GET_RESTS_FAIL, GET_RESTS_SUCCESS, GET_RESTS } from "../actions/index";

const initialState = {
  rests: [],
  loading: false,
  error: "",
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTS:
      return { ...state, loading: true };

    case GET_RESTS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        rests: [...state.rests, ...action.payload],
      };

    case GET_RESTS_FAIL:
      return {
        ...state,
        loading: false,
        rests: [...state.rests],
        error: "Error",
      };

    default:
      return state;
  }
};

export default resultReducer;
