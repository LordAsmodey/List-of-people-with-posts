import React from 'react';
import './UserCard.scss';
import { User } from '../../Types/User';

type Props = {
  user: User,
};

export const UserCard: React.FC<Props> = (props) => {
  const { user } = props;

  return (
    <div className="user-card">
      <h3 className="user-card__text">{user.name}</h3>
      <a href={`mailto:${user.email}`} className="user-card__text">{user.email}</a>
      <a href={`tel:${user.phone}`} className="user-card__text">{user.phone}</a>
      <a href={`https://${user.website}`} className="user-card__text">{user.website}</a>
      <button
        className="user-card__button"
        type="button"
      >
        Show posts
      </button>
    </div>
  );
};
