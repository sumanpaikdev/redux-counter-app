// This file will contain all the reducer logic related to the cart component.

import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes";

const initialState = {
    numOfItems: 0,
}


export default function cartReducer(state = initialState, action) {
    // Switches on the type of action perfomed
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                numOfItems: state.numOfItems + 1,
            };
        
        case DELETE_ITEM:
            return {
                ...state,
                numOfItems: state.numOfItems - 1,
            };
        
        default:
            return state;
    }
}