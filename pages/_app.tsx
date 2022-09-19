import '../styles/globals.scss';
import Layout from '../src/components/Layout';
import { store } from '../src/store/store'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
              </Layout>
        
    </Provider>
   )
}

export default MyApp
