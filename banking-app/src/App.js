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
        balance: state.balance + 150,
      };
    case "withdraw":
      return {
        ...state,
        isActive: true,
        balance: state.balance - 50,
      };
    case "requestLoan":
      return state.loan > 0
        ? state
        : {
            ...state,
            loan: 5000,
            balance: state.balance + 5000,
          };
    case "payLoan":
      return state.balance < state.loan
        ? state
        : {
            ...state,
            loan: 0,
            balance: state.balance - state.loan,
          };
    case "closeAcount":
      return state.loan === 0
        ? state
        : {
            isActive: false,
            balance: 0,
            loan: 0,
          };
    default:
      return state;
  }
}

export default function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );

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
        <button
          onClick={() => dispatch({ type: "withdraw" })}
          disabled={!isActive}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "requestLoan" })}
          disabled={!isActive}
        >
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "payLoan" })}
          disabled={!isActive}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "closeAcount" })}
          disabled={!isActive}
        >
          Close account
        </button>
      </p>
    </div>
  );
}
