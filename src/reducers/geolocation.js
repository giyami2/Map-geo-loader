export const FETCH_GEO_LOCATION = "FETCH_GEO_LOCATION";
export const SAVE_GEO_LOCATION = "SAVE_GEO_LOCATION";
export const DELETE_GEO_LOCATION = "DELETE_GEO_LOCATION";
export const UPDATE_GEO_LOCATION = "UPDATE_GEO_LOCATION";

const initialState = {
  data: [],
  loading: false
};

export const geolocation = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GEO_LOCATION:
      return {
        ...state,
        data: action.payload,
        loading: true
      };
    default:
      return state;
  }
}

export default geolocation;
