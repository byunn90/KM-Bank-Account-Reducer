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
        balance: 500,
      };
    case "deposit":
      return {
        ...state,
        isActive: true,
      };

    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    balance,
    loan,
    isActive,
    openAccount,
    deposit,
    withDraw,
    requestLoan,
    payloan,
    closeAccount,
  } = state;
  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <p>
        <button
          onClick={() => {
            dispatch({ type: "openAccount" });
          }}
          disabled={false}
        >
          Open account
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "deposit" })}
          disabled={!isActive}
        >
          Deposit 150
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={!isActive}>
          Withdraw 50
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={!isActive}>
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "CloseAccount" })}
          disabled={!isActive}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={!isActive}>
          Close account
        </button>
      </p>
    </div>
  );
}
