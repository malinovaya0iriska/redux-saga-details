import { FC } from 'react';
import { AMOUNT_FOR_PAGE } from '../../constants';
import style from './Pagination.module.scss';
import { PaginationProps } from './types';

export const Pagination: FC<PaginationProps> = ({ page, total, onChange }) => {
  const totalPages = Math.ceil(total / AMOUNT_FOR_PAGE);

  return (
    <div className={style.container}>
      {Array.from({ length: totalPages }, (_, index): number => index + 1).map(
        (pageIndex: number) => {
          const isActive = pageIndex === page;
          const handleChangePage = (): void => {
            if (pageIndex !== page) {
              onChange(pageIndex);
            }
          };

          return isActive ? (
            <b key={pageIndex} onClick={handleChangePage}>
              {pageIndex}
            </b>
          ) : (
            <span key={pageIndex} onClick={handleChangePage}>
              {pageIndex}
            </span>
          );
        },
      )}
    </div>
  );
};
