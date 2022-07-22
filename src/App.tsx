import { useAppDispatch, useAppSelector } from './store';

export const App = () => {
  const dispatch = useAppDispatch();
  const store = useAppSelector((store) => store);
  console.log({ store });

  return (
    <div>
      Redux-Saga
      <button onClick={() => dispatch({ type: 'LOAD_DATA' })}>Click</button>
    </div>
  );
};

export default App;
