import React, { useMemo, useState } from 'react';
import './UsersList.scss';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { UserCard } from '../UserCard/UserCard';
import {
  GET_USERS_ENDPOINT,
  useGetUsersFromServerQuery,
} from '../../features/api/users';
import { UserPostsList } from '../UserPostsList/UserPostsList';
import { Loader } from '../Loader';

type Props = {
  isSorted: 'asc' | 'desc' | null,
};

export const UsersList: React.FC<Props> = (props) => {
  const { isSorted } = props;

  const [userId, setUserId] = useState<number | null>(null);

  const { data: users, isLoading, isError } = useGetUsersFromServerQuery(
    GET_USERS_ENDPOINT,
  );
  const { pageId } = useParams();
  const [searchParams] = useSearchParams('query');
  const searchQuery: string = searchParams.get('query') || '';
  const navigate = useNavigate();

  const cardIndexes = useMemo(() => {
    return [0, 1, 2, 3].map(item => {
      if (pageId && +pageId > 1) {
        return item + (4 * (+pageId - 1));
      }

      return item;
    });
  }, [pageId]);

  const filteredUsers = useMemo(() => {
    if (!isSorted && pageId && +pageId !== 1) {
      navigate('/page/1');
    }

    const preparedUsers = users?.filter(user => {
      return user.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    if (isSorted === 'asc') {
      return preparedUsers?.sort((userA, userB) => {
        return userA.name.localeCompare(userB.name);
      });
    }

    if (isSorted === 'desc') {
      return preparedUsers?.sort((userA, userB) => {
        return userB.name.localeCompare(userA.name);
      });
    }

    return preparedUsers;
  }, [users, searchQuery, isSorted]);

  return (
    <div className="wrapper">
      <section className="users-list">
        {isLoading && <Loader />}
        {isError && (
          <p className="users-list__error">Something went wrong. Try again!</p>
        )}
        {filteredUsers && !isLoading && (
          <>
            <div className="users-list__wrapper">
              {filteredUsers[cardIndexes[0]] && (
                <UserCard
                  user={filteredUsers[cardIndexes[0]]}
                  userId={userId}
                  setUserId={setUserId}
                />
              )}
              {filteredUsers[cardIndexes[1]] && (
                <UserCard
                  user={filteredUsers[cardIndexes[1]]}
                  userId={userId}
                  setUserId={setUserId}
                />
              )}
            </div>
            <div className="users-list__wrapper">
              {filteredUsers[cardIndexes[2]] && (
                <UserCard
                  user={filteredUsers[cardIndexes[2]]}
                  userId={userId}
                  setUserId={setUserId}
                />
              )}
              {filteredUsers[cardIndexes[3]] && (
                <UserCard
                  user={filteredUsers[cardIndexes[3]]}
                  userId={userId}
                  setUserId={setUserId}
                />
              )}
            </div>
          </>
        )}
      </section>
      <UserPostsList
        userId={userId}
        closeList={setUserId}
      />
    </div>
  );
};
