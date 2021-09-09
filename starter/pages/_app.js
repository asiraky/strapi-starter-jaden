import App from 'next/app';

import '../assets/css/global.css';

import { fetchAPI } from '../lib/api';
import { GlobalContext } from '../components/GlobalContext';

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;
  return (
    <GlobalContext.Provider value={global}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
};

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  const [global] = await Promise.all([
    fetchAPI('/global'),
  ]);
  return { ...appProps, pageProps: { global } };
};

export default MyApp;
