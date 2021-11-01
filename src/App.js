import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncAddCashAction, asyncGetCashAction } from './store/cashReducer';
import {
  addCustomerAction,
  fetchCustomersAction,
  removeCustomerAction,
} from './store/customerReducer';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  useEffect(() => {
    dispatch(fetchCustomersAction());
  }, []);

  const addCash = () => {
    dispatch(asyncAddCashAction());
  };

  const getCash = () => {
    dispatch(asyncGetCashAction());
  };

  const addCustomer = (name) => {
    dispatch(addCustomerAction({ name, id: Date.now() }));
  };

  const removeCustomer = (customerId) => {
    dispatch(removeCustomerAction(customerId));
  };

  return (
    <div className="App">
      <div style={{ display: 'flex' }}>
        <div>{cash}</div>
        <button onClick={addCash}>
          Пополнить счет
        </button>
        <button onClick={getCash}>
          Снять со счета
        </button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
      </div>
      {customers.length ? (
        <div>
          {customers.map(({ name, id }) => (
            <div onClick={() => removeCustomer(id)} key={id}>
              {name}
            </div>
          ))}
        </div>
      ) : (
        <h3>Клиентов не найдено!</h3>
      )}
    </div>
  );
}

export default App;
