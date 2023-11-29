/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames';

import { getNumbers } from '../../helpers/utils/getNumbers';
import './Pagination.scss';

type Props = {
  totalItems: number,
};

export const Pagination: React.FC<Props> = ({ totalItems }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');
  const perPage = searchParams.get('perPage') || totalItems;

  const numberOfPages = Math.ceil(totalItems / Number(perPage)) || 1;
  const currentPage = Number(page) || 1;

  const pageItems = getNumbers(1, numberOfPages);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === numberOfPages;

  const handlePreviousPage = () => {
    if (!isFirstPage) {
      searchParams.set('page', (currentPage - 1).toString());
      setSearchParams(searchParams);
    }
  };

  const handlePageChange = (selectedPage: number) => {
    searchParams.set('page', selectedPage.toString());
    setSearchParams(searchParams);
  };

  const handleNextPage = () => {
    if (!isLastPage) {
      searchParams.set('page', (currentPage + 1).toString());
      setSearchParams(searchParams);
    }
  };

  return (
    <ul className="Pagination" data-cy="pagination">
      <li className="Pagination__item">
        <button
          type="button"
          data-cy="paginationLeft"
          className={classNames('Pagination__arrow Pagination__arrow--left', {
            'Pagination__arrow--disabled': isFirstPage,
          })}
          disabled={isFirstPage}
          onClick={handlePreviousPage}
        />
      </li>

      {pageItems.map(pageItem => (
        <li key={pageItem} className="Pagination__item">
          <button
            type="button"
            className={classNames('Pagination__link', {
              'Pagination__link--active': pageItem === currentPage,
            })}
            onClick={() => handlePageChange(pageItem)}
          >
            {pageItem}
          </button>
        </li>
      ))}

      <li className="Pagination__item">
        <button
          type="button"
          data-cy="paginationRight"
          className={classNames('Pagination__arrow', {
            'Pagination__arrow--disabled': isLastPage,
          })}
          disabled={isLastPage}
          onClick={handleNextPage}
        />
      </li>
    </ul>
  );
};
