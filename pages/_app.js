import '@/styles/globals.css'
import Script from "next/script"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-T17856LBRY"/>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-T17856LBRY', {
        page_path: window.location.pathname,
        });
        `,
        }}
      />
      
        <Component {...pageProps} />
    </>
  )
}
