import React, { useMemo } from 'react';
import './UsersList.scss';
import { useParams, useSearchParams } from 'react-router-dom';
import { UserCard } from '../UserCard/UserCard';
import { GET_USERS_ENDPOINT, useGetUsersFromServerQuery } from '../../features/api/users';

export const UsersList: React.FC = () => {
  const { data: users, isLoading } = useGetUsersFromServerQuery(
    GET_USERS_ENDPOINT,
  );
  const { pageId } = useParams();
  const [searchParams] = useSearchParams('query');
  const searchQuery: string = searchParams.get('query') || '';

  const cardIndexes = [0, 1, 2, 3].map(item => {
    if (pageId && +pageId > 1) {
      return item + (4 * (+pageId - 1));
    }

    return item;
  });
  const filteredUsers = useMemo(() => {
    return users?.filter(user => user.name.includes(searchQuery));
  }, [users, searchQuery]);

  return (
    <section className="people-list">
      {filteredUsers && (
        <>
          <div className="people-list__wrapper">
            {!isLoading && filteredUsers[cardIndexes[0]] && (
              <UserCard user={filteredUsers[cardIndexes[0]]} />
            )}
            {!isLoading && filteredUsers[cardIndexes[1]] && (
              <UserCard user={filteredUsers[cardIndexes[1]]} />
            )}
          </div>
          <div className="people-list__wrapper">
            {!isLoading && filteredUsers[cardIndexes[2]] && (
              <UserCard user={filteredUsers[cardIndexes[2]]} />
            )}
            {!isLoading && filteredUsers[cardIndexes[3]] && (
              <UserCard user={filteredUsers[cardIndexes[3]]} />
            )}
          </div>
        </>
      )}
    </section>
  );
};
