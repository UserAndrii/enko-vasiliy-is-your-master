import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from '../AppBar';
import { Container } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <AppBar />
      <main>
        <Suspense fallback={'Loading...'}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
