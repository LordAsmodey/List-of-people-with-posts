import React, { useState } from 'react';
import './App.scss';
import {
  Route,
  Routes,
} from 'react-router-dom';
import { UsersList } from './Components/UsersList/UsersList';
import { ControlButtons } from './Components/ControlButtons/ControlButtons';
import { Header } from './Components/Header/Header';

export const App: React.FC = () => {
  const [isSorted, setIsSorted] = useState<'asc' | 'desc' | null>(null);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<UsersList isSorted={isSorted} />} />
        <Route path="page">
          <Route index element={<UsersList isSorted={isSorted} />} />
          <Route path=":pageId" element={<UsersList isSorted={isSorted} />} />
        </Route>
        <Route path="*" element={<h1>Page not found!</h1>} />
      </Routes>

      <ControlButtons setIsSorted={setIsSorted} />
    </div>
  );
};
