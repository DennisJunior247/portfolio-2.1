import {} from "react";
import Head from "next/head";

export default function HeadTag() {
  return (
    <Head>
      <title> Dennis Junior - Software Developer</title>
      <meta name="description" content={`Dennis's portfolio website`} />
      <meta name="keywords" content="Dennis Junior" />
      <meta property="og:title" content={`Dennis Junior`} />
      <meta property="og:description" content={`Dennis's portfolio website`} />
      <meta property="og:url" content={`https://dennisjunior247.vercel.app/`} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={`Dennis Junior`} />
      <meta name="twitter:title" content={`Dennis Junior`} />
      <meta name="twitter:description" content={`Dennis's portfolio website`} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Fira+Code:wght@300;400;500;600;700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
