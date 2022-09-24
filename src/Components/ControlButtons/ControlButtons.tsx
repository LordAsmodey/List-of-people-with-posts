import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GET_USERS_ENDPOINT,
  useGetUsersFromServerQuery,
} from '../../features/api/users';
import './ControlButtons.scss';

type Props = {
  setIsSorted: CallableFunction,
};

export const ControlButtons: React.FC<Props> = (props) => {
  const { setIsSorted } = props;
  const [page, setPage] = useState(1);

  const { data: users } = useGetUsersFromServerQuery(
    GET_USERS_ENDPOINT,
  );

  const pagesCount = useMemo(() => (
    users?.length ? Math.ceil(users.length / 4) : 0
  ), []);

  const setPageHandler = (typeBtn: string) => {
    if (typeBtn === 'back') {
      setPage((prevState) => {
        if (prevState === 1) {
          return prevState;
        }

        return prevState - 1;
      });
    }

    if (typeBtn === 'forward') {
      setPage((prevState) => {
        if (prevState === pagesCount) {
          return prevState;
        }

        return prevState + 1;
      });
    }
  };

  return (
    <div className="control-buttons">
      <Link
        className="control-buttons__link"
        to={`page/${page - 1 || 1}`}
        onClick={() => setPageHandler('back')}
      >
        <span className="control-buttons__item"> &lt; </span>
        Previous
      </Link>

      <button
        type="button"
        className="control-buttons__sort-btn"
        onClick={() => {
          setIsSorted('asc');
        }}
      >
        Sort ASC
      </button>

      <button
        type="button"
        className="control-buttons__sort-btn"
        onClick={() => {
          setIsSorted('desc');
        }}
      >
        Sort DESC
      </button>

      <Link
        className="control-buttons__link"
        to={`page/${page + 1 > pagesCount ? 3 : page + 1}`}
        onClick={() => setPageHandler('forward')}
      >
        Next
        <span className="control-buttons__item"> &gt; </span>
      </Link>
    </div>
  );
};
