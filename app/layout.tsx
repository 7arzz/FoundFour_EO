import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Found Four EO | Event Organizer & Wedding Organizer Terbaik Surabaya",
  description: "Found Four EO adalah Event Organizer (EO) premium di Surabaya. Spesialis Wedding Planning, Corporate Events, dan Private Parties. Wujudkan event impian Anda dengan profesional.",
  keywords: ["Event Organizer Surabaya", "Wedding Organizer Surabaya", "EO Surabaya", "Found Four EO", "Jasa EO Surabaya", "Perencana Acara Surabaya"],
  openGraph: {
    title: "Found Four EO | Premium Event Organizer Surabaya",
    description: "Mewujudkan momen istimewa Anda menjadi kenyataan melalui perencanaan yang presisi dan sentuhan mewah.",
    url: "https://foundfour-eo.vercel.app", // Update with real URL later
    siteName: "Found Four EO",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Found Four EO | Premium Event Organizer Surabaya",
    description: "Jasa EO & WO Profesional di Surabaya.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://foundfour-eo.vercel.app",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Found Four EO",
              "image": "https://foundfour-eo.vercel.app/LogoFinal.jpg",
              "@id": "https://foundfour-eo.vercel.app",
              "url": "https://foundfour-eo.vercel.app",
              "telephone": "+6287878385333",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Surabaya",
                "addressLocality": "Surabaya",
                "addressRegion": "Jawa Timur",
                "postalCode": "60241",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -7.2575,
                "longitude": 112.7521
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://www.instagram.com/foundfour_eo"
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
        <div className="watermark">hanya sebagai contoh by 7arzz</div>
      </body>
    </html>
  );
}
