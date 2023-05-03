import '@/styles/globals.css';
import Layout from 'Components/UI/Layout';
import {SessionProvider} from 'next-auth/react';
import { CartContextProvider } from 'Contexts/CartContext';
import { RecContextProvider } from 'Contexts/RecContext';
import Router from "next/router";
export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <RecContextProvider>
          <CartContextProvider>
            <Component {...pageProps} />
          </CartContextProvider>
        </RecContextProvider>
      </Layout>
    </SessionProvider>
  );
}
