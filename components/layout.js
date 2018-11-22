import React from 'react';
import Link from 'next/link';
import Head from './head';
import Nav from './nav';
import css from 'styled-jsx/css';

const styles = css`
  .content {
    background-color: #03a9f4;
    height: 100vh;
  }
`;

const Layout = ({ title, children }) => (
  <div>
    <Head title={title} />
    <Nav />
    <div className="content">
      {children}
    </div>
    <style jsx>{styles}</style>
  </div>
)

export default Layout
