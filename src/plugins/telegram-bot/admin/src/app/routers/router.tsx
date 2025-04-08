import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../../pages';

export const Routers = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>
);
