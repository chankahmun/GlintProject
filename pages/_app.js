import '../styles/globals.css'
import TagManager from 'react-gtm-module';
import {useEffect} from 'react'
import {GTMID} from  '../setting'
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: GTMID });
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
