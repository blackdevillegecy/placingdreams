import '../styles/globals.css'
import Head from 'next/head'
import { Html } from 'next/document';

export function reportWebVitals(metric) {
  console.log(metric);
}

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Html lang='en'>
      <Head>
        <title>Placing Dreams</title>
        <meta
          name="placing dreams"
          content=""
          key="desc"
        />
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      </Html>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
