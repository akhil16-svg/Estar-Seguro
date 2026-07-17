import type { Metadata } from "next";
import SitePreview from "./SitePreview";

export const metadata: Metadata = {
  title: "Estar Seguro Polymer | Engineering Component Manufacturing",
  description:
    "Pune-based manufacturing and sourcing partner for plastic, rubber, vacuum formed, foam, and sheet metal components.",
  alternates: { canonical: "https://akhil16-svg.github.io/Estar-Seguro/" },
};

const organisationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Estar Seguro Polymer Pvt. Ltd.",
  url: "https://akhil16-svg.github.io/Estar-Seguro/",
  email: "yogesh.p@estarseguro.in",
  telephone: "+91 93712 26224",
  address: {
    "@type": "PostalAddress",
    streetAddress: "615 Kasba Peth",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411011",
    addressCountry: "IN",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationData) }}
      />
      <SitePreview />
    </>
  );
}
