import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import HomePage from 'pages/HomePage';

export const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
