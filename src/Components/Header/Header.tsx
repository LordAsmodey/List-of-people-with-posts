import React from 'react';
import './Header.scss';
import { createSearchParams, useSearchParams } from 'react-router-dom';

export const Header: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams('query');
  const searchQuery: string = searchParams.get('query') || '';

  return (
    <header className="header">
      <h1 className="header__title">Users post</h1>
      <div className="header__search-block">
        <input
          className="header__search-input"
          type="search"
          placeholder="Search"
          value={searchQuery}
          onChange={(event) => setSearchParams(
            createSearchParams({ query: event.target.value }),
          )}
        />
      </div>
    </header>
  );
};
