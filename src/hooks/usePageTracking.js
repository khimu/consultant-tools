import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_TRACKING_ID = 'G-KCMF250YM4';

export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    // Inject gtag.js if it's not already loaded
    if (!window.gtag) {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      script.async = true;
      document.head.appendChild(script);

      const inlineScript = document.createElement('script');
      inlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}');
      `;
      document.head.appendChild(inlineScript);
    }
  }, []);

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
}
