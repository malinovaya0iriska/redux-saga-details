import { useAppSelector } from '../../store';
import { getCharacterDetails } from '../../store/selectors';
import style from './CharacterInfo.module.scss';

export const CharacterInfo = () => {
  const { data, loading, error } = useAppSelector(getCharacterDetails);

  const infoList = Object.entries(data).map(([key, value]) => (
    <div>
      {key}: {value}
    </div>
  ));

  return (
    <div className={style.infoWrapper}>
      {loading ? 'Loading ...' : error || infoList}
    </div>
  );
};
