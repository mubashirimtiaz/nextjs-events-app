import Head from "next/head";
import Layout from "../components/layout/Layout.component";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container max-w-xl mx-auto text-gray-700">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
