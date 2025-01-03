import Head from "next/head";
import React from "react";
import App from "../App";

const index = () => {
  return (
    <>
      <Head>
        <title>PADDA Studio</title>
        <meta property="og:title" content="PADDA Studio" />
        <meta
          property="og:description"
          content="This is my hybrid Expo web app."
        />
        <meta
          property="og:image"
          content="https://paddastudio.com/images/waLauncher.png"
        />
        <meta property="og:url" content="https://paddastudio.com" />
      </Head>

      <App />
    </>
  );
};

export default index;
