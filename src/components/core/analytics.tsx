'use client'

import { useState } from "react"
import Script from "next/script"
import Cookies from 'js-cookie';

// local
import { GTM_ID } from "@/lib/commons/gtm"


export default function Analytics() {
  // https://dev.to/valse/how-to-setup-google-tag-manager-in-a-next-13-app-router-website-248p
  // https://blog.devgenius.io/manage-cookie-consent-in-next-js-13-with-google-tag-manager-a521a80d32e6

  const [localConsent, setLocalConsent] = useState(Cookies.get('localConsent'));

  // console.log(`process.env.NEXT_PUBLIC_VERCEL_ENV: ${process.env.NEXT_PUBLIC_VERCEL_ENV}`)
  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "production") {
    return null
  }

  return (
    <>
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}>
        </iframe>
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            'ad_storage': 'granted',
            'analytics_storage': 'granted'
          });

          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />
      {localConsent === 'true' && (
        <Script
          id="consupd"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            gtag('consent', 'update', {
              'ad_storage': 'granted',
              'analytics_storage': 'granted'
            });
          `,
          }}
        />
      )}
    </>
  )
}