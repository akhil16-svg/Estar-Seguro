import {
  FiArrowUpRight,
  FiBox,
  FiCheck,
  FiLayers,
  FiMail,
  FiMapPin,
  FiMaximize,
  FiMenu,
  FiRepeat,
  FiTool,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const logoPath = `${basePath}/brand/estar-seguro-logo-bright.png`;

const capabilities = [
  { icon: FiMaximize, title: "Reverse Engineering", note: "From an existing sample" },
  { icon: FiBox, title: "3D Printing", note: "For prototype validation" },
  { icon: FiTool, title: "Custom Manufacturing", note: "From drawings or specifications" },
  { icon: FiLayers, title: "Batch Production", note: "Small and medium runs" },
  { icon: FiRepeat, title: "Mass Production", note: "Repeat volume supply" },
];

const domains = [
  {
    title: "Plastic Components",
    process: "Injection moulding",
    range: "80–250 tons",
    image: `${basePath}/products/es1.webp`,
    alt: "Representative injection moulded polymer components",
  },
  {
    title: "Rubber Components",
    process: "Compression moulding",
    range: "Up to 200 tons",
    image: `${basePath}/products/es7.webp`,
    alt: "Representative compression moulded rubber components",
  },
  {
    title: "Vacuum Forming",
    process: "Custom thermoforming",
    range: "Trays & covers",
    image: `${basePath}/products/es4.webp`,
    alt: "Representative custom vacuum formed trays",
  },
  {
    title: "Foam Components",
    process: "Roll-form material",
    range: "1 / 1.5 / 2 mm",
    image: `${basePath}/products/es2.webp`,
    alt: "Representative foam roll material",
  },
  {
    title: "Sheet Metal",
    process: "Press parts",
    range: "5–80 tons",
    image: `${basePath}/products/es10.webp`,
    alt: "Representative sheet metal press parts",
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
    <main className="website-canvas" id="top">
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Estar Seguro home">
          <img src={logoPath} alt="Estar Seguro Polymer Pvt. Ltd." width="1611" height="640" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#capabilities">Capabilities</a>
          <a href="#domains">Manufacturing</a>
          <a href="#about">Why Estar Seguro</a>
        </nav>
        <a href="#contact" className="header-cta">
          Enquire <FiArrowUpRight aria-hidden="true" />
        </a>
        <FiMenu className="mobile-menu-icon" aria-hidden="true" />
      </header>

      <section className="hero section-pad">
        <div className="hero-copy">
          <p className="eyebrow">Engineering components · Pune, India</p>
          <h1>From your requirement to a production-ready part.</h1>
          <p className="hero-intro">
            One dependable partner for plastic, rubber, vacuum formed, foam, and sheet metal components.
          </p>
          <div className="hero-actions">
            <a href="#domains" className="primary-button">Explore capabilities <FiArrowUpRight aria-hidden="true" /></a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="secondary-button">
              <FaWhatsapp aria-hidden="true" /> Discuss a requirement
            </a>
          </div>
          <div className="hero-proof" aria-label="Company overview">
            <div><strong>23+</strong><span>Years of experience</span></div>
            <div><strong>5</strong><span>Manufacturing domains</span></div>
            <div><strong>1</strong><span>Point of coordination</span></div>
          </div>
        </div>

        <div className="hero-gallery" aria-label="Representative engineering components">
          <figure className="hero-image hero-image-main">
            <img src={`${basePath}/products/es10.webp`} alt="Representative pressed sheet metal components" width="1016" height="1000" />
          </figure>
          <figure className="hero-image hero-image-top">
            <img src={`${basePath}/products/es7.webp`} alt="Representative rubber components" width="1031" height="1000" />
          </figure>
          <figure className="hero-image hero-image-bottom">
            <img src={`${basePath}/products/es4.webp`} alt="Representative vacuum formed components" width="1016" height="1000" />
          </figure>
          <div className="gallery-label"><span>Representative work</span><strong>Built for varied applications</strong></div>
        </div>
      </section>

      <section className="journey" aria-label="Production journey">
        <span>Sample or drawing</span><i />
        <span>Process selection</span><i />
        <span>Prototype or batch</span><i />
        <span>Repeat production</span>
      </section>

      <section className="capabilities section-pad" id="capabilities">
        <div className="section-heading">
          <p className="eyebrow">How we help</p>
          <h2>Support at every production stage.</h2>
          <p>Start with an existing part, a drawing, or a new idea. We help identify the practical next step.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map(({ icon: Icon, title, note }, index) => (
            <article className="capability-card" key={title}>
              <div><Icon aria-hidden="true" /><span>0{index + 1}</span></div>
              <h3>{title}</h3>
              <p>{note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="domains section-pad" id="domains">
        <div className="section-heading section-heading-light">
          <p className="eyebrow">Manufacturing domains</p>
          <h2>Five processes. One conversation.</h2>
          <p>Representative work and available production ranges.</p>
        </div>
        <div className="domain-grid">
          {domains.map((domain, index) => (
            <article className={`domain-card domain-${index + 1}`} key={domain.title}>
              <img src={domain.image} alt={domain.alt} width="700" height="600" loading={index > 1 ? "lazy" : undefined} />
              <div className="domain-overlay">
                <span>{domain.process}</span>
                <h3>{domain.title}</h3>
                <strong>{domain.range}</strong>
              </div>
            </article>
          ))}
        </div>
        <p className="foam-note">Foam examples: 500 mm × 500 m and 250 mm × 50 m. Other sizes can be discussed.</p>
      </section>

      <section className="about section-pad" id="about">
        <div className="about-lead">
          <p className="eyebrow">Why Estar Seguro</p>
          <h2>Clear coordination. Practical engineering support.</h2>
        </div>
        <div className="about-copy">
          <p>We connect customer requirements with suitable manufacturing capability across multiple component categories.</p>
          <ul>
            <li><FiCheck aria-hidden="true" /><span><strong>Requirement-led</strong>Work begins with your approved sample, drawing, or specification.</span></li>
            <li><FiCheck aria-hidden="true" /><span><strong>Quality-focused</strong>Attention to dimensional accuracy and agreed material requirements.</span></li>
            <li><FiCheck aria-hidden="true" /><span><strong>Responsive</strong>A single contact from initial discussion through repeat supply.</span></li>
          </ul>
        </div>
      </section>

      <section className="industries-strip section-pad" aria-label="Industries served">
        <span>Industries served</span>
        <div>{industries.map((industry) => <strong key={industry}>{industry}</strong>)}</div>
      </section>

      <section className="contact section-pad" id="contact">
        <div>
          <p className="eyebrow">Start an enquiry</p>
          <h2>Have a drawing, sample, or component requirement?</h2>
        </div>
        <div className="contact-panel">
          <p>Share the application, material, expected quantity, and any available drawing or sample.</p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="contact-whatsapp">
            <FaWhatsapp aria-hidden="true" /><span><small>Fastest response</small>Chat on WhatsApp</span><FiArrowUpRight aria-hidden="true" />
          </a>
          <a href="mailto:yogesh.p@estarseguro.in" className="contact-email"><FiMail aria-hidden="true" />yogesh.p@estarseguro.in</a>
        </div>
      </section>

      <footer className="site-footer section-pad">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logoPath} alt="Estar Seguro Polymer Pvt. Ltd." width="1611" height="640" loading="lazy" />
            <p>Engineering component manufacturing and sourcing solutions.</p>
          </div>
          <address>
            <a href="tel:+919371226224">+91 93712 26224</a>
            <a href="mailto:yogesh.p@estarseguro.in">yogesh.p@estarseguro.in</a>
            <a href="https://maps.google.com/?q=615+Kasba+Peth+Pune+Maharashtra+411011" target="_blank" rel="noreferrer"><FiMapPin aria-hidden="true" />615 Kasba Peth, Pune, Maharashtra – 411011</a>
          </address>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Estar Seguro Polymer Pvt. Ltd.</span><a href="#top">Back to top ↑</a></div>
      </footer>

      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="floating-whatsapp" aria-label="Chat with Estar Seguro on WhatsApp" title="Chat on WhatsApp">
        <FaWhatsapp aria-hidden="true" />
      </a>
    </main>
  );
}
