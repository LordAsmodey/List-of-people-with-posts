import React from 'react';
import './UserPost.scss';

type Props = {
  title: string,
  body: string,
};

export const UserPost: React.FC<Props> = React.memo((props) => {
  const { title, body } = props;

  return (
    <div className="user-post">
      <h3 className="user-post__title">{title}</h3>
      <p className="user-post__text">{body}</p>
      <div className="user-post__line"></div>
    </div>
  );
});
