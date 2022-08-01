import * as actionCreators from '../../store/actionCreators';
import { useAppDispatch } from './../../store/index';

export const Blog = () => {
  const dispatch = useAppDispatch();

  const handleLoadData = (): void => {
    dispatch(actionCreators.getPeople({ search: '', page: 1 }));
  };

  return (
    <div>
      Blog
      <button onClick={handleLoadData}>Load some data</button>
    </div>
  );
};
