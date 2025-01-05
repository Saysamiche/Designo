import Layout from "@/components/Layout";
import "@/styles/globals.css";
// import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  // const { pathName } = useRouter();

  // const hideFooterPart = pathName === "/contact";
  // hideFooterPart={hideFooterPart}
  
  return (
    <Layout >
      <Component {...pageProps} />
    </Layout>
  );
}
