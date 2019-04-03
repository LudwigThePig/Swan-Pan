import Layout from '../components/Layout'
import React, { Component }  from 'react';

export default () => (
  <Layout>
    <div>
      <form>
        <label>Username</label>
        <input type="text"></input>
        <label>Password</label>
        <input type="text"></input>
        <input type="submit"></input>
      </form>
    </div>
  </Layout>
)