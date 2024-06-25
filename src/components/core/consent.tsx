'use client';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Link from 'next/link';

function Consent() {
  const [hasConsentCookie, setHasConsentCookie] = useState(true);
  useEffect(() => {
    const localConsentExists = Cookies.get('localConsent') !== undefined;
    setHasConsentCookie(localConsentExists);
  }, []);

  const acceptCookie = () => {
    setHasConsentCookie(true);
    Cookies.set('localConsent', 'true', { expires: 365 });
    // @ts-expect-error
    window.gtag('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
    });
    console.log('accepting cookies');
  };

  const closeP = () => {
    setHasConsentCookie(true);
    console.log('closing');
  };

  const denyCookie = () => {
    setHasConsentCookie(true);
    Cookies.set('localConsent', 'false', { expires: 365 });
    console.log('denying cookie');
  };
  
  if (hasConsentCookie === true) {
    return null;
  }
  return (
    <>
      <div className="alert mx-auto fixed md:inset-x-5 bottom-3 w-full md:w-4/5 py-2 md:py-4 drop-shadow-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>This website uses cookies to ensure you get the best experience on our website. <Link className="link link-primary" href="/policies/cookies">Learn more</Link></span>

        <div>
          {/* <button onClick={(e) => { closeP(); }} > Close </button> */}
          <button className="btn btn-sm mr-10" onClick={(e) => denyCookie()}>Deny All</button>
          <button className="btn btn-sm btn-primary" onClick={(e) => acceptCookie()}>Accept All</button>
        </div>
      </div>
    </>
  );
}

export default Consent;