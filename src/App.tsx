import { useAppDispatch, useAppSelector } from './store';

export const App = () => {
  const dispatch = useAppDispatch();
  const store = useAppSelector((store) => store);
  console.log({ store });

  return <div></div>;
};

export default App;
