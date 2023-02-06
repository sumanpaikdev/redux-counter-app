import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { addItem, deleteItem } from "../actions/cartAction";


// When an action is dispatched, all the reducers in an application become active. We only have one reducer in the application.

function Cart() {
    // useSelector gives us access to the store; we can also read the store by calling it
    const state = useSelector((state) => state);

    // useDispatch helps us dispatch actions/ action creators (return actions) that we've defined in our reducer function

    const dispatch = useDispatch();

    return(
        <div className="cart">
            <h2>Number of items in Cart: {state.numOfItems}</h2>
            <button
                onClick={() => {
                    dispatch(addItem())
              } }    
                className="green">Add Item to Cart
            </button>
            <button
                disabled={state.numOfItems > 0 ? false : true}
                onClick={() => {
                    dispatch(deleteItem())
                }}    
                className="red"
            >
                Remove Item from Cart
            </button>
        </div>
    );
};

export default Cart;