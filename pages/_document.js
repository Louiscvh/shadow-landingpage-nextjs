import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon-32x32.png"></link>
          <meta
            name="description"
            content="Transforme tous tes écrans en PC gamer grâce au cloud gaming. Sélectionne ton setup gaming pour streamer tes jeux vidéo"
          />
          <meta
            property="og:title"
            content="Add a Shopping Cart to Any Website in Minutes - Snipcart"
          />
          <meta
            property="og:description"
            content="Add a shopping cart to your site in minutes. Works with any site builder, CMS, and framework. 20 000+ merchants trust our e-commerce solution for their website. Join them!"
          />
          <meta property="og:url" content="https://shadow.tech/fr/" />
          <meta property="og:type" content="website" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
