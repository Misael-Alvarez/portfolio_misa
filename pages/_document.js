import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Misael Alvarez</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta name="author" content="Misael Alvarez" />
          <meta name="keywords" content="Misael Alvarez, Data Scientist, Data Science, Data Analysis, Data Visualization, Data Cleaning, Data Wrangling, Machine Learning, Deep Learning, Computer Vision, Python, C/C++, SQL, R, Julia, React, Next.js, Bootstrap" />
          <meta name="description" content="Misael Alvarez Portfolio Website" />
          {/* Nprogress css */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
          />
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