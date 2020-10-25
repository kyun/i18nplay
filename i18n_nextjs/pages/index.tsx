import { useTranslation } from '../i18n'


const Homepage = () => {
  const { t } = useTranslation();
  return (
    <h1>{t('h1')}</h1>
  )
}

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})


export default (Homepage)