import React from 'react';
import './UserCard.scss';
import cn from 'classnames';
import { User } from '../../Types/User';

type Props = {
  user: User,
  userId: number | null,
  setUserId: CallableFunction,
};

export const UserCard: React.FC<Props> = React.memo((props) => {
  const { user, setUserId, userId } = props;

  return (
    <div className={cn('user-card', { 'user-card--active': userId })}>
      <h3 className="user-card__text">{user.name}</h3>
      <a
        href={`mailto:${user.email}`}
        className="user-card__text"
      >
        {user.email}
      </a>
      <a
        href={`tel:${user.phone}`}
        className="user-card__text"
      >
        {user.phone}
      </a>
      <a
        href={`https://${user.website}`}
        className="user-card__text"
      >
        {user.website}
      </a>
      <button
        className={cn(
          'user-card__button',
          { 'user-card__button--active': userId },
        )}
        type="button"
        onClick={() => setUserId(user.id)}
      >
        Show posts
      </button>
    </div>
  );
});
