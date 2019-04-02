import React, { Component }  from 'react';

import Header from './Header';
import Meta from './Meta';

const layoutStyle = {
  margin: 0,
  padding: 0,
}

const Layout = props => (
  <div style={layoutStyle}>
    <Meta />
    <Header />
    {props.children}
  </div>
)

export default Layout