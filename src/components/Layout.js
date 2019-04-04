import React, { Component }  from 'react';
import Header from './Header';
import Meta from './Meta';
import Footer from './Footer'

const layoutStyle = {
  margin: 0,
  padding: 0,
}

const Layout = props => (
  <div style={layoutStyle}>
    <Meta />
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default Layout