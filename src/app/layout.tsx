import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://danielpanea.com'),
  title: "Daniel Panea | Sovereign AI Engineering",
  description: "Building AI that you actually own. Secure. Scientific. Sovereign. I help European enterprises migrate from black-box APIs to deterministic, private AI systems.",
  keywords: [
    "AI Engineer",
    "Sovereign AI",
    "Private AI",
    "Open Source AI",
    "GDPR AI",
    "EU AI Act",
    "AI Consultant Germany",
    "AI Architecture",
    "LLM Deployment",
    "On-Premise AI",
  ],
  authors: [{ name: "Daniel Panea" }],
  creator: "Daniel Panea",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danielpanea.com",
    siteName: "Daniel Panea - AI Architect",
    title: "Daniel Panea | Sovereign AI Engineering",
    description: "Building AI that you actually own. Secure. Scientific. Sovereign.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Daniel Panea - Sovereign AI Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Panea | Sovereign AI Engineering",
    description: "Building AI that you actually own. Secure. Scientific. Sovereign.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Daniel Panea",
              jobTitle: "AI Architect",
              description: "Sovereign AI Engineering for European Enterprises",
              url: "https://danielpanea.com",
              sameAs: [
                "https://www.linkedin.com/in/daniel-panea-lichtig",
              ],
              knowsAbout: [
                "Artificial Intelligence",
                "Machine Learning",
                "Large Language Models",
                "AI Architecture",
                "Data Privacy",
                "GDPR Compliance",
              ],
            }),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
