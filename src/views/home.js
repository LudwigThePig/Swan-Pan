// export default App;
import React, { Component }  from 'react';
import Layout from '../components/Layout.js';
import {BrowserRouter, Route} from 'react-router-dom';


export default () => (
  <Layout>
    <div id="main">
    <h1>SwanPan</h1>
    <p>The App that helps you create and plan your next adventure!</p>
    </div>
    <style jsx>{`
      h1,
      a {
        font-family: 'Arial';
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      a:hover {
        opacity: 0.6;
      }
      #main{
        height: 90vh;
        color: #3b3a36;
        background: white;
      }
    `}</style>
  </Layout>
)