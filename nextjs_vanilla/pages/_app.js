import '../styles/globals.css'
import App from 'next/app';

import { appWithTranslation } from '../i18n';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
MyApp.getInitialProps = async (appContext) => {
  const pageProps = await App.getInitialProps(appContext) 
  return ({ ...pageProps, namespacesRequired: ['strings'] })
};

export default appWithTranslation(MyApp);
