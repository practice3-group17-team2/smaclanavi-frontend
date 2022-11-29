import '../styles/globals.css';
import { FC } from 'react';
import type { AppProps } from 'next/app';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Component>{pageProps}</Component>
);

// eslint-disable-next-line import/no-default-export
export default App;
