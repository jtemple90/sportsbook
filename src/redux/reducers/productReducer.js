import { ActionsTypes } from "../contants/action-types";

const initialState = {
  products: [{
    id: 1,
    title: 'shirt',
    category: 'shirts'
  }]
}

export const productReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionsTypes.SET_PRODUCTS:
      return state
  
    default:
      break;
  }
}