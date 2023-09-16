import { Outlet } from 'react-router';
import { render } from '@testing-library/react';
import React from 'react';
import NavBar from './NavBar';
// eslint-disable-next-line import/no-self-import
import Layout from './Layout';

test('renders the Layout component', () => {
  render(<Layout />);

  // Assert that the text "Layout" is present in the rendered component.
  // eslint-disable-next-line no-undef
  expect(LayoutElement).toBeInTheDocument();
    <>
      <NavBar />
      <Outlet />
    </>;
});

export default Layout;
