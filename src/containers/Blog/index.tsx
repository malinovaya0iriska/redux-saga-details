import { useAppDispatch, useAppSelector } from './../../store/index';

export const Blog = () => {
  const dispatch = useAppDispatch();
  const blogData = useAppSelector((state) => state.root.blog);

  const handleLoadData = (): void => {
    dispatch({ type: 'LOAD_DATA' });
  };
  console.log('Blog', blogData);

  return (
    <div>
      Blog
      <button onClick={handleLoadData}>Load some data</button>
    </div>
  );
};
