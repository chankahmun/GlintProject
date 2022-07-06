import '../styles/globals.css'
import TagManager from 'react-gtm-module';
import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-PML3K2G' });
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
