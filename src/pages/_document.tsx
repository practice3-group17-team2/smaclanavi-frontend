import { Html, Head, Main, NextScript } from 'next/document';
import { NextPage } from 'next/types';

const Document: NextPage = () => (
  <Html>
    <Head>
      <link rel="icon" href="/sample_title.svg" />
      {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
      <title>smaclanavi</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP&family=Sawarabi+Mincho&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

// eslint-disable-next-line import/no-default-export
export default Document;
