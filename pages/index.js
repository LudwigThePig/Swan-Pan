import Layout from '../components/Layout.js'
import Link from 'next/link'



export default () => (
  <Layout>
    <h1>SwanPan</h1>
    <p>The App that helps you create and plan your next adventure!</p>
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
    `}</style>
  </Layout>
)