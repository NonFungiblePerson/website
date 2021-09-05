import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { ReactNode } from 'react';

import { ChakraTheme } from '../utils/ChakraTheme';

// ssr禁止
function SafeHydrate({ children }: { children: ReactNode }) {
  return (
    <div suppressHydrationWarning>{typeof window === 'undefined' ? null : children}</div>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SafeHydrate>
      <ChakraProvider theme={ChakraTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SafeHydrate>
  );
}

export default MyApp;
