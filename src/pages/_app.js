import '@/styles/globals.css';
import Layout from 'Components/UI/Layout';
import {SessionProvider} from 'next-auth/react';
import { cartContextProvider } from 'Contexts/CartContext';
export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <cartContextProvider>
          <Component {...pageProps} />
        </cartContextProvider>
      </Layout>
    </SessionProvider>
  );
}
