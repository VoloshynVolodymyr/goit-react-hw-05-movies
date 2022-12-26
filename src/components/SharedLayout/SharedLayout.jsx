import { Outlet} from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Nav, LinkNav } from './SharedLayout.styled';

export default function SharedLayout() {
    
 

  return (
    <>
      <Header>
        <Nav>
          <LinkNav to="/">
            Home
          </LinkNav>
          <LinkNav to="/movies">
            Movies
          </LinkNav>
        </Nav>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}
