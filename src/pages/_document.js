import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
        <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-5Z6BB2CS');
              `,
            }}
          />

          <link
            rel="shortcut icon"
            href="favicon.ico"
            id="fav-shortcut"
            type="image/x-icon"
          />
          <link
            rel="icon"
            href="favicon.ico"
            id="fav-icon"
            type="image/x-icon"
          />
          {/*<link*/}
          {/*  rel="apple-touch-icon"*/}
          {/*  sizes="180x180"*/}
          {/*  href="apple-touch-icon.png"*/}
          {/*/>*/}
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicon-16x16.png"
          />
          <link rel="icon" href="favicon.ico" />
          <link rel="manifest" href="manifest.json" />


          <meta
            name="description"
            content="Oslim NextJS Template For Business"
          />
	
          <meta name="google-site-verification" content="5MwwBKBwBzcWQNSQ9qK8oiWHujLIY_4Fko3XeKsNqQk" />
	

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-S0EPPHQY2C"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-S0EPPHQY2C');
              `
            }}
          />

          
        </Head>
        <body>
        <noscript>
      <iframe 
        src="https://www.googletagmanager.com/ns.html?id=GTM-5Z6BB2CS"
        height="0" 
        width="0" 
        style={{ display: 'none', visibility: 'hidden' }}
      >
      </iframe>
    </noscript>

          <Main />
          <NextScript />
          
          
        </body>
      </Html>
    );
  }
}

export default MyDocument;
