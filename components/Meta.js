import Head from 'next/head'
export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
    *{
      margin: 0;
    }
      body { 
        font-family: Arial,Helvetica Neue,Helvetica,sans-serif;
        text-align: center;
        background:#fff;
        color: #3b3a36;
      }
    `}</style>
  </div>
)