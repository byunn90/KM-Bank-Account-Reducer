import { useReducer } from "react";
import "./style.css";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return {
        ...state,
        isActive: true,
      };
    default:
      return state;
  }
}

export default function App() {
  const [{ dispatch }] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: X</p>
      <p>Loan: X</p>

      <p>
        <button onClick={() => dispatch({ type: "start" })}>
          Open account
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={false}>
          Deposit 150
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={false}>
          Withdraw 50
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={false}>
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={false}>
          Pay loan
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={false}>
          Close account
        </button>
      </p>
    </div>
  );
}
