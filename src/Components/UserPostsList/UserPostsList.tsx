import React from 'react';
import './UserPostsList.scss';
import classNames from 'classnames';
import { useGetPostsByUserIdQuery } from '../../features/api/posts';
import { UserPost } from '../UserPost/UserPost';
import { Loader } from '../Loader';

type Props = {
  userId: number | null,
  closeList: CallableFunction,
};

export const UserPostsList:React.FC<Props> = React.memo((props) => {
  const { userId, closeList } = props;
  const { data: posts, isFetching, isError } = useGetPostsByUserIdQuery(userId);

  return (
    <section className={classNames(
      'user-posts-list',
      { 'user-posts-list--active': userId },
    )}
    >
      <button
        type="button"
        className="user-posts-list__btn-close"
        onClick={() => closeList(null)}
      >
        X
      </button>
      {isFetching && <Loader />}
      {isError && (
        <p className="users-list__error">Something went wrong. Try again!</p>
      )}
      {!isFetching && posts && posts.map(post => (
        <UserPost
          key={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
    </section>
  );
});
