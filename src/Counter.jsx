import { useReducer } from "react"

const initialState = { count: 0 }

function reducer(state, action) {
  switch(action.type) {
    case "inc":
      return { count: state.count + 1 }

    case "dec":
      return { count: state.count - 1 }

      case "reset":
        return initialState;

    default:
      return state
  }
}

function Counter() {

  const [state, dispatch] = useReducer(reducer, initialState)

   const evenOrOdd = state.count % 2 === 0 ? "Even" : "Odd";

  return (
    <>
      <h1>Counter {state.count}</h1>
       <h2>{evenOrOdd}</h2>

      <button onClick={() => dispatch({type:"inc"})}>
        incriment +
      </button>

      <button onClick={() => dispatch({type:"dec"})}>
       decriment  -
      </button>
      <button onClick={()=>dispatch({type:"reset"})}>reset</button>
    </>
  )
}
export default Counter