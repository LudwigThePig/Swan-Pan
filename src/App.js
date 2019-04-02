// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
import React, { Component }  from 'react';
import Layout from './components/Layout.js'

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
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
      #main{
        height: 90vh;
        color: white;
        background-image: url('./static/jumbo.jpg');
        background-position: center top; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
      }
    `}</style>
  </Layout>
)