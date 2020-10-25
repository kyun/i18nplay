import App from 'next/app'
import { appWithTranslation } from '../i18n'

const MyApp = ({ Component, pageProps }:any) => <Component {...pageProps} />

MyApp.getInitialProps = async (appContext:any) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp)