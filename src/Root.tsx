import { Routes, Route, Navigate } from 'react-router-dom';
import { App } from './App';
import { NotFoundPage } from './psges/NotFoundPage';
import { PeoplePage } from './psges/PeoplePage';
import { HomePage } from './psges/HomePage';

export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="people" element={<PeoplePage />}>
          <Route path=":slug" element={<PeoplePage />}></Route>
        </Route>
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
