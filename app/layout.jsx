import "./globals.css";

export const metadata = {
  title: "Matthew Willey — Airtable Style Resume",
  description: "Airtable-inspired resume website for Matthew Willey.",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({ children }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Matthew Willey",
    jobTitle: "Tech + Marketing Strategist",
    url: "https://example.com",
    sameAs: [],
  };

  return (
    <html lang="en">
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
        {children}
      </body>
    </html>
  );
}
