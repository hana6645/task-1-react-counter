import React,{useReducer} from "react";

const initialState ={
  cart:[]
};

function reducer(state,action){
  switch(action.type){

    case "ADD ITEM":
      return{
        cart:[...state.cart,action.item]
      };

    case "REMOVE ITEM":
      return{
        cart:state.cart.filter((_,index)=>index !== action.index)
      };

    case "CLEAR CART":
      return{
        cart:[]
      };

    default:
      return state;
  }
}

function Cart(){

  const [state,dispatch]=useReducer(reducer,initialState);

  return (
    <div>

      <button
        onClick={()=> dispatch({ type:"ADD ITEM", item:"Shoe"})}
      >
        Add Item
      </button>

      <ul>
        {state.cart.map((item,index)=>(
          <li key={index}>
            {item}

            <button
              onClick={()=>dispatch({ type:"REMOVE ITEM", index })}
            >
              Remove
            </button>

          </li>
        ))}
      </ul>

      <button onClick={()=>dispatch({type:"CLEAR CART"})}>
        Clear Cart
      </button>

    </div>
  )
}

export default Cart;