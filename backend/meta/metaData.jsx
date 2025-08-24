import React from "react";

const metadata = {
  viewport: "width=device-width, initial-scale=1.0",
  httpEquiv: "IE=edge",
  description:
    "Affiliate Postback Engine is a real-time affiliate tracking system that logs clicks, records server-to-server conversions, and provides a responsive dashboard for monitoring affiliate performance effortlessly.",
  author: "UjjwalS",
  authorUrl: "https://www.ujjwalsaini.dev/",
  keywords:
    "Affiliate Postback Engine, affiliate marketing, click tracking, conversion tracking, postback URL, S2S tracking, dashboard, real-time analytics, Next.js, React.js, Node.js, Express, PostgreSQL, TailwindCSS, Docker, GitHub",
  ogTitle: "Affiliate Postback Engine: Real-Time Conversion Tracking",
  ogDescription:
    "Monitor affiliate clicks and track conversions in real-time with Affiliate Postback Engine, a streamlined dashboard designed for affiliates and marketers seeking efficiency and accuracy.",
  ogImage: "/AffiliatePostbackLogo.png",
  ogUrl: "https://affiliate-postback.vercel.app/",
  ogType: "website",
  ogLocale: "en_US",
  ogSiteName: "Affiliate Postback Engine",
  twitterCard: "summary_large_image",
  twitterTitle: "Affiliate Postback Engine: Real-Time Conversion Tracking",
  twitterDescription:
    "Track affiliate clicks, log conversions securely, and visualize performance with a modern dashboard in Affiliate Postback Engine.",
  twitterImage: "/AffiliatePostbackLogo.png",
  twitterSite: "@AffiliatePostback",
  twitterCreator: "@UjjwalSaini0007",
  canonical: "https://affiliate-postback.vercel.app/",
  robots: "index, follow",
  themeColor: "#000000",
  rating: "General",
  distribution: "Global",
  copyright: "Affiliate Postback Engine ©2025",
  applicationName: "Affiliate Postback Engine",
  appleMobileWebAppTitle: "Affiliate Postback Engine",
  appleMobileWebAppCapable: "yes",
};

// Author - UjjwalS - www.ujjwalsaini.dev
function MetaData({ children }) {
  React.useEffect(() => {
    document.title = metadata.ogTitle;

    function upsertMeta(attrName, attrValue, content) {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    }

    // Basic Meta tags
    upsertMeta("name", "viewport", metadata.viewport);
    upsertMeta("http-equiv", "X-UA-Compatible", metadata.httpEquiv);
    upsertMeta("name", "description", metadata.description);
    upsertMeta("name", "author", metadata.author);
    upsertMeta("name", "keywords", metadata.keywords);
    upsertMeta("name", "robots", metadata.robots);
    upsertMeta("name", "theme-color", metadata.themeColor);
    upsertMeta("name", "rating", metadata.rating);
    upsertMeta("name", "distribution", metadata.distribution);
    upsertMeta("name", "copyright", metadata.copyright);
    upsertMeta("name", "application-name", metadata.applicationName);
    upsertMeta(
      "name",
      "apple-mobile-web-app-title",
      metadata.appleMobileWebAppTitle
    );
    upsertMeta(
      "name",
      "apple-mobile-web-app-capable",
      metadata.appleMobileWebAppCapable
    );

    // Open Graph
    upsertMeta("property", "og:title", metadata.ogTitle);
    upsertMeta("property", "og:description", metadata.ogDescription);
    upsertMeta("property", "og:image", metadata.ogImage);
    upsertMeta("property", "og:url", metadata.ogUrl);
    upsertMeta("property", "og:type", metadata.ogType);
    upsertMeta("property", "og:locale", metadata.ogLocale);
    upsertMeta("property", "og:site_name", metadata.ogSiteName);

    // Twitter Cards
    upsertMeta("name", "twitter:card", metadata.twitterCard);
    upsertMeta("name", "twitter:title", metadata.twitterTitle);
    upsertMeta("name", "twitter:description", metadata.twitterDescription);
    upsertMeta("name", "twitter:image", metadata.twitterImage);
    upsertMeta("name", "twitter:site", metadata.twitterSite);
    upsertMeta("name", "twitter:creator", metadata.twitterCreator);

    // Canonical link
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", metadata.canonical);
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] bg-cover to-muted/80 p-2 py-10 flex flex-col justify-between">
      {children}
    </div>
  );
}

export default MetaData;
