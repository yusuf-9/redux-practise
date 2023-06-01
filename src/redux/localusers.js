import axiosUrl from "./axiosUrL";

const initialState = {
  loading: false,
  users: [],
  error: null
};

export const CreateFetchUser = (action) => {
  return async function fetchUser(dispatch){
    dispatch({ type: "INITIATE_REQUEST"});
    
    const response = await axiosUrl.post(action.uri, {})
    .catch((error)=>{
      dispatch({
        type: "SET_ERROR",
        payload: error.message
      })
    })
    
    if(response.data.status){
    dispatch({
      type: "SET_FECTHED_USERS",
      payload: response.data.msg
    })
  } else if(response.data.status === false){
    dispatch({
      type: "SET_ERROR",
      payload: response.data.msg
    })
  }
  }
  
}

const userreducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIATE_REQUEST":
      return {loading : true, users : [], error: null};

    case "SET_FECTHED_USERS":
      return {loading : false, users : [...action.payload], error: null};
    case "SET_ERROR":
      return {loading : false, users : [], error: action.payload};

    default:
      return state;
  }
};

export default userreducer

export const getData = state => state.userreducer;
