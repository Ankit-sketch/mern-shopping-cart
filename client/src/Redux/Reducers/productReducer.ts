import { ActionTypes } from "../Constants/actionTypes";

const initialState = {
    product : []
}
    
export const productReducer = (state = initialState, {type, payload}:any) => {
  switch(type){
      case ActionTypes.SET_PRODUCT : return {...state, product:payload};
      default : return state;
  }
}