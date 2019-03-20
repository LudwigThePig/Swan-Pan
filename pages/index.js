import Layout from '../components/Layout.js'
import Link from 'next/link'



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