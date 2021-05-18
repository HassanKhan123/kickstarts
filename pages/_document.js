import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link
            async
            rel='stylesheet'
            href='//cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css'
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script
            async
            src='//cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.js'
          ></script>
        </body>
      </html>
    );
  }
}
