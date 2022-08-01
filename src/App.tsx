import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import style from './App.module.scss';
import { Pagination } from './components/Pagination';
import { AppRoute, ONE } from './constants';
import { useAppDispatch, useAppSelector } from './store';
import * as actionCreators from './store/actionCreators';
import { getPeople } from './store/selectors';
import { ICharacter } from './types';

export const App = () => {
  const dispatch = useAppDispatch();

  const { page, search, data, loading, error } = useAppSelector(getPeople);

  const changePage = (newPage: number) => {
    dispatch(actionCreators.getPeople({ search, page: newPage }));
  };

  const handleOnChangeSearchValue = (
    e: ChangeEvent<HTMLInputElement>,
  ): void => {
    const { value } = e.target;
    dispatch(actionCreators.getPeople({ search: value, page: ONE }));
  };

  return (
    <div>
      <h1>Star Wars Characters</h1>

      <form className={style.formContainer}>
        <input
          className={style.inputField}
          type="text"
          value={search}
          placeholder="Search people..."
          onChange={handleOnChangeSearchValue}
        />
      </form>

      {loading ? (
        <div className={style.contentContainer}>Loading in process... </div>
      ) : (
        error || (
          <table border={1} width="100%">
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {data?.results?.map(({ name, url }: ICharacter) => {
                const id = url.replaceAll(/\D/g, '');
                return (
                  <tr key={name}>
                    <td>
                      <Link to={`${AppRoute.PEOPLE}/${id}`}>{name}</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )
      )}
      <Pagination page={page} total={data.count} onChange={changePage} />
    </div>
  );
};

export default App;
