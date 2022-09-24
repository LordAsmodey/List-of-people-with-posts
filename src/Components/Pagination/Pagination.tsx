import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GET_USERS_ENDPOINT, useGetUsersFromServerQuery } from '../../features/api/users';
import './Pagination.scss';

export const Pagination: React.FC = () => {
  const [page, setPage] = useState(1);

  const { data: users } = useGetUsersFromServerQuery(
    GET_USERS_ENDPOINT,
  );

  const pagesCount = users?.length ? Math.ceil(users.length / 4) : 0;

  return (
    <div className="pagination">
      <Link
        className="pagination__link"
        to={`page/${page - 1 || 1}`}
        onClick={() => {
          setPage((prevState) => {
            if (prevState === 1) {
              return prevState;
            }

            return prevState - 1;
          });
        }}
      >
        <span className="pagination__item"> &lt; </span>
        Previous
      </Link>

      <Link
        className="pagination__link"
        to={`page/${page + 1 > pagesCount ? 3 : page + 1}`}
        onClick={() => {
          setPage((prevState) => {
            if (prevState === pagesCount) {
              return prevState;
            }

            return prevState + 1;
          });
        }}
      >
        Next
        <span className="pagination__item"> &gt; </span>
      </Link>
    </div>
  );
};
