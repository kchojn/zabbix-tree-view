import {HOST_REQ, HOST_RES} from "./types";

const initialState = {
  hostNodes: [],
  isFetching: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HOST_REQ:
      return {
        ...state, isFetching: true
      };
    case HOST_RES:
      return {
        ...state, ...{
          isFetching: false,
          hostNodes: action.payload
    }
      };
      default: return state;


  }

};

export default reducer;
