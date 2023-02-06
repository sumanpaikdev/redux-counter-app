import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes";


// Each action object returned by an "action creator" must have a type attribute

function addItem() {
    return {
        type: ADD_ITEM,
    }
}


function deleteItem() {
    return {
        type: DELETE_ITEM,
    }
}

export {addItem, deleteItem}