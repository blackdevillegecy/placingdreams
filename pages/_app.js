import '../styles/globals.css'
import Head from 'next/head'

export function reportWebVitals(metric) {
  console.log(metric);
}

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Placing Dreams</title>
        <meta
          name="placing dreams"
          content=""
          key="desc"
        />
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
