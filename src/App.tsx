import React from 'react';
import './App.scss';
import {
  Route,
  Routes,
} from 'react-router-dom';
import { UsersList } from './Components/UsersList/UsersList';
import { Pagination } from './Components/Pagination/Pagination';
import { Header } from './Components/Header/Header';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="page">
          <Route index element={<UsersList />} />
          <Route path=":pageId" element={<UsersList />} />
        </Route>
        <Route path="*" element={<h1>Page not found!</h1>} />
      </Routes>

      <Pagination />
    </div>
  );
};
