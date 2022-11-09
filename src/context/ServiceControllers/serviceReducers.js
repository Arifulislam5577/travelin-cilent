const serviceReducer = (state, action) => {
  switch (action.type) {
    case "SERVICE_FETCH_REQUEST":
      return {
        ...state,
        loading: true,
        error: "",
        services: [],
      };
    case "SERVICE_FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: "",
        services: action.payload,
      };

    case "SERVICE_FETCH_FAILED":
      return {
        ...state,
        loading: false,
        services: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default serviceReducer;
