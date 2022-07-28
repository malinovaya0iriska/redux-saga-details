import { Link } from 'react-router-dom';
import { Endpoint } from './constants';
import { useAppDispatch, useAppSelector } from './store';

export const App = () => {
  const dispatch = useAppDispatch();

  const store = useAppSelector((store) => store);

  console.log({ store });

  return (
    <div>
      <h1>Sagas</h1>
      <div>
        <Link to={Endpoint.BLOG}>Open Blog</Link>
      </div>
    </div>
  );
};

export default App;
