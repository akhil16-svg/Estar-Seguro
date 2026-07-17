import {
  FiArrowUpRight,
  FiBox,
  FiCheck,
  FiChevronRight,
  FiLayers,
  FiMail,
  FiMapPin,
  FiMaximize,
  FiRepeat,
  FiTool,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const logoPath = `${basePath}/brand/estar-seguro-logo.webp`;

const capabilities = [
  {
    icon: FiMaximize,
    number: "01",
    title: "Reverse Engineering",
    text: "Existing parts are studied for geometry, material, function, and manufacturability to support recreation or thoughtful improvement.",
  },
  {
    icon: FiBox,
    number: "02",
    title: "3D Printing",
    text: "Prototype and concept-validation support helps teams assess form and fit before committing to production tooling.",
  },
  {
    icon: FiTool,
    number: "03",
    title: "Custom Part Manufacturing",
    text: "Components are developed from your drawing, sample, specification, and application requirements.",
  },
  {
    icon: FiLayers,
    number: "04",
    title: "Batch Production",
    text: "Controlled small and medium production batches for planned engineering and procurement requirements.",
  },
  {
    icon: FiRepeat,
    number: "05",
    title: "Mass Production",
    text: "Repeat manufacturing support for established parts and higher-volume supply programmes.",
  },
];

const domains = [
  {
    index: "01",
    title: "Plastic Components",
    kicker: "Injection moulding",
    range: "80–250 tons",
    text: "Injection-moulded engineering components and custom plastic parts developed around your application.",
    image: `${basePath}/products/es1.webp`,
    alt: "Representative white polymer components",
    tag: "Plastic",
  },
  {
    index: "02",
    title: "Rubber Components",
    kicker: "Compression moulding",
    range: "Up to 200 tons",
    text: "Compression-moulded bushes, grommets, gaskets, and other application-specific rubber components.",
    image: `${basePath}/products/es7.webp`,
    alt: "Representative black rubber grommets",
    tag: "Rubber",
  },
  {
    index: "03",
    title: "Vacuum Forming",
    kicker: "Custom thermoforming",
    range: "Application-led",
    text: "Industrial and packaging trays, equipment covers, automotive interiors, and custom thermoformed parts.",
    image: `${basePath}/products/es4.webp`,
    alt: "Representative clear vacuum formed trays",
    tag: "Thermoforming",
  },
  {
    index: "04",
    title: "Foam Components",
    kicker: "Roll-form material",
    range: "1 / 1.5 / 2 mm",
    text: "Foam supplied in multiple widths and roll lengths, including 500 mm × 500 m and 250 mm × 50 m examples.",
    image: `${basePath}/products/es2.webp`,
    alt: "Representative white foam roll",
    tag: "Foam",
  },
  {
    index: "05",
    title: "Sheet Metal Components",
    kicker: "Press parts",
    range: "5–80 tons",
    text: "Custom sheet-metal press parts manufactured for repeatable engineering and production requirements.",
    image: `${basePath}/products/es10.webp`,
    alt: "Representative small sheet metal press parts",
    tag: "Sheet metal",
  },
];

const industries = [
  "Automotive",
  "Electrical & Electronics",
  "Medical Devices",
  "Consumer Goods",
  "Agriculture",
  "Construction Equipment",
];

const whatsappMessage = encodeURIComponent(
  "Hello Estar Seguro, I would like to enquire about your engineering component manufacturing capabilities.",
);
const whatsappUrl = `https://wa.me/919371226224?text=${whatsappMessage}`;

export default function SitePreview() {
  return (
    <main className="site-shell">
      <div className="website-canvas">
        <header className="site-header">
          <a href="#top" className="brand" aria-label="Estar Seguro home">
            <img
              src={logoPath}
              alt="Estar Seguro Polymer Pvt. Ltd."
              width="380"
              height="151"
            />
          </a>
          <nav aria-label="Primary navigation">
            <a href="#capabilities">Capabilities</a>
            <a href="#domains">Domains</a>
            <a href="#industries">Industries</a>
            <a href="#about">About</a>
          </nav>
          <a href="#contact" className="header-cta">
            Contact us <FiArrowUpRight aria-hidden="true" />
          </a>
        </header>

        <section className="hero section-pad" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Engineering manufacturing partner · Pune</p>
            <h1>
              Built around your <em>engineering</em> requirement.
            </h1>
            <p className="hero-intro">
              Manufacturing and sourcing solutions across plastic, rubber, vacuum formed,
              foam, and sheet metal components—from initial sample to repeat production.
            </p>
            <div className="hero-actions">
              <a href="#domains" className="primary-button">
                Explore our capabilities <FiChevronRight aria-hidden="true" />
              </a>
              <a href="#contact" className="text-link">Discuss your requirement</a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Representative engineering components">
            <div className="visual-card visual-main">
              <img src={`${basePath}/products/es10.webp`} alt="Representative precision sheet metal press parts" width="1016" height="1000" />
              <div className="image-caption"><span>Representative work</span><strong>Sheet metal press parts</strong></div>
            </div>
            <div className="visual-card visual-small">
              <img src={`${basePath}/products/es7.webp`} alt="Representative rubber moulded components" width="1031" height="1000" />
            </div>
            <div className="experience-badge"><strong>23+</strong><span>Years of industry<br />experience</span></div>
          </div>

          <div className="hero-facts" aria-label="Company overview">
            <div><strong>05</strong><span>Manufacturing domains</span></div>
            <div><strong>05</strong><span>End-to-end capabilities</span></div>
            <div><strong>Pune</strong><span>Serving engineering teams across India</span></div>
          </div>
        </section>

        <section className="intro-band">
          <p>Your part. The right process. A dependable path to production.</p>
          <span>Reverse engineering</span><i />
          <span>Prototype support</span><i />
          <span>Repeat production</span>
        </section>

        <section className="content-section section-pad" id="capabilities">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow"><span /> How we support your project</p>
              <h2>One partner across the production journey.</h2>
            </div>
            <p>Our cross-domain capabilities help procurement and engineering teams move from an existing part or new concept to dependable production.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map(({ icon: Icon, ...item }) => (
              <article className="capability-card" key={item.number}>
                <div className="card-top"><Icon aria-hidden="true" /><span>{item.number}</span></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="domains-section section-pad" id="domains">
          <div className="section-heading">
            <p className="eyebrow"><span /> Manufacturing domains</p>
            <h2>Capabilities in material form.</h2>
            <p className="heading-note">Representative parts and production ranges. Every enquiry begins with your drawing, sample, or application.</p>
          </div>
          <div className="domain-list">
            {domains.map((domain) => (
              <article className="domain-card" key={domain.index}>
                <div className="domain-image">
                  <img src={domain.image} alt={domain.alt} width="700" height="600" loading="lazy" />
                  <span>{domain.tag}</span>
                </div>
                <div className="domain-copy">
                  <div className="domain-meta"><span>{domain.index}</span><small>{domain.kicker}</small></div>
                  <h3>{domain.title}</h3>
                  <strong className="range">{domain.range}</strong>
                  <p>{domain.text}</p>
                  <a href="#contact" aria-label={`Enquire about ${domain.title}`}>Send an enquiry <FiArrowUpRight aria-hidden="true" /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="quality-section section-pad" id="about">
          <div className="quality-visual">
            <div className="quality-image">
              <img src={`${basePath}/products/es6.webp`} alt="Representative rubber compression moulded bushes" width="500" height="400" loading="lazy" />
            </div>
            <div className="quality-label"><span>Quality focus</span><strong>Accuracy in every requirement</strong></div>
          </div>
          <div className="quality-copy">
            <p className="eyebrow"><span /> About & quality</p>
            <h2>Experience that connects requirements to reliable supply.</h2>
            <p>For more than two decades, Estar Seguro has supported customers through manufacturing partnerships, sourcing experience, and a practical understanding of engineering component requirements.</p>
            <ul>
              <li><FiCheck aria-hidden="true" /><span><strong>Dimensional accuracy</strong>Components assessed against the customer’s approved requirement.</span></li>
              <li><FiCheck aria-hidden="true" /><span><strong>Material compliance</strong>Material selection aligned with the agreed application and specification.</span></li>
              <li><FiCheck aria-hidden="true" /><span><strong>Coordinated supply</strong>A single point of contact across multiple component categories.</span></li>
            </ul>
          </div>
        </section>

        <section className="industries-section section-pad" id="industries">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow"><span /> Industries we serve</p>
              <h2>Engineered for varied applications.</h2>
            </div>
            <p>Flexible component capability for teams working across demanding industrial and commercial environments.</p>
          </div>
          <div className="industry-grid">
            {industries.map((industry, index) => (
              <div key={industry}><span>0{index + 1}</span><strong>{industry}</strong><FiArrowUpRight aria-hidden="true" /></div>
            ))}
          </div>
        </section>

        <section className="vision-section section-pad">
          <div><span>Our vision</span><p>To be a trusted and preferred engineering component supply partner, known for responsive service and dependable manufacturing solutions.</p></div>
          <div><span>Our mission</span><p>To build long-term partnerships through practical engineering support, consistent quality, and cost-conscious solutions.</p></div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div>
            <p className="eyebrow"><span /> Start a conversation</p>
            <h2>Have a drawing, sample, or requirement?</h2>
          </div>
          <p>Tell us what you are working on. We will help you identify a suitable path from part understanding to production.</p>
          <div className="contact-actions">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="whatsapp-link">
              <FaWhatsapp aria-hidden="true" /> Chat on WhatsApp
            </a>
            <a href="mailto:yogesh.p@estarseguro.in" className="email-link">
              <FiMail aria-hidden="true" /> Email your enquiry
            </a>
          </div>
        </section>

        <footer className="site-footer">
          <div className="footer-main">
            <div className="footer-brand">
              <img src={logoPath} alt="Estar Seguro Polymer Pvt. Ltd." width="320" height="127" loading="lazy" />
              <p>Engineering component manufacturing and sourcing solutions from Pune, India.</p>
            </div>
            <div className="footer-links">
              <span>Explore</span>
              <a href="#capabilities">Capabilities</a>
              <a href="#domains">Manufacturing domains</a>
              <a href="#industries">Industries</a>
              <a href="#about">About & quality</a>
            </div>
            <address>
              <span>Contact</span>
              <a href="mailto:yogesh.p@estarseguro.in">yogesh.p@estarseguro.in</a>
              <a href="tel:+919371226224">+91 93712 26224</a>
              <a href="https://maps.google.com/?q=615+Kasba+Peth+Pune+Maharashtra+411011" target="_blank" rel="noreferrer"><FiMapPin aria-hidden="true" />615 Kasba Peth, Pune,<br />Maharashtra – 411011</a>
            </address>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="footer-whatsapp">
            <FaWhatsapp aria-hidden="true" />
            <span><small>Interested in our capabilities?</small><strong>Chat with us on WhatsApp</strong></span>
            <FiArrowUpRight aria-hidden="true" />
          </a>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} Estar Seguro Polymer Pvt. Ltd.</span><span>Company presence website · No online sales</span></div>
        </footer>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="floating-whatsapp"
          aria-label="Chat with Estar Seguro on WhatsApp"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp aria-hidden="true" />
        </a>
      </div>
    </main>
  );
}
