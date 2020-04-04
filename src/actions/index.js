import yelp from "../api/yelp";

export const GET_RESTS = "LOAD";
export const GET_RESTS_SUCCESS = "LOAD_SUCCESS";
export const GET_RESTS_FAIL = "LOAD_FAIL";

export const getRests = (searchTerm) => async (dispatch) => {
  try {
    dispatch({ type: GET_RESTS });
    const result = await yelp.get("/search", {
      params: {
        limit: 50,
        term: searchTerm,
        location: "san jose",
      },
    });
    return dispatch({
      type: GET_RESTS_SUCCESS,
      payload: result.data.businesses,
    });
  } catch (err) {
    dispatch({ type: GET_RESTS_FAIL });
  }
};
