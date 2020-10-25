import App from 'next/app'
import { appWithTranslation } from '../i18n'

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext), namespacesRequired: ['common']  })

export default appWithTranslation(MyApp)
