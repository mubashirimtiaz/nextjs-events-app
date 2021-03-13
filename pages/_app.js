import Layout from "../components/layout/Layout.component";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="container max-w-xl mx-auto text-gray-700">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
