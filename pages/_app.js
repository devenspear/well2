import '../styles/globals.css';
import { useEffect } from 'react';
import { initMobileOptimizations } from '../utils/mobileUtils';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initMobileOptimizations();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp; 