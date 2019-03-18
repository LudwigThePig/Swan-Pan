import Layout from '../lib/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
  <Layout>
    <p>Welcome to SwanPan</p>
    <ul>
      {props.shows.map(({show})=>(
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function(){
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();
  console.log(`We fetched ${data.length} datas!`);

  return { shows: data}
}

export default Index;