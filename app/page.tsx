import {
  Arrow,
  Header,
  Photo,
  RevealObserver,
  ScrollCue,
} from "@/components/site-ui";
import { official, news, projects } from "@/lib/content";
const capabilities = [
  {
    n: "01",
    title: "See the potential.",
    subtitle: "Development & planning",
    text: "Bring the right sites, partnerships and technical knowledge together. Turn complex possibilities into projects with a clear path forward.",
    href: official.development,
  },
  {
    n: "02",
    title: "Build for the elements.",
    subtitle: "Engineering & construction",
    text: "Connect engineering, procurement and construction expertise to deliver infrastructure in some of the world’s most demanding environments.",
    href: official.development,
  },
  {
    n: "03",
    title: "Keep energy moving.",
    subtitle: "Operations & maintenance",
    text: "Operate the assets we build. Apply experience, data and skilled teams to support their performance over the long term.",
    href: official.offshore,
  },
  {
    n: "04",
    title: "Connect power to possibility.",
    subtitle: "Energy trading & solutions",
    text: "Bring generation and demand together through power purchase agreements, energy trading and asset optimisation.",
    href: official.trading,
  },
];
export default function Home() {
  return (
    <>
      <Header />
      <RevealObserver />
      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <Photo
            name="hero"
            alt="View across an offshore wind farm, with turbines stretching into the open sea"
            className="hero-photo"
            hero
            sizes="100vw"
          />
          <div className="hero-shade" />
          <div className="hero-content container">
            <p className="eyebrow hero-enter">The power of offshore wind</p>
            <h1 id="hero-title" className="hero-enter">
              Energy for
              <br />
              what comes next.
            </h1>
            <p className="hero-description hero-enter">
              We develop, build and operate offshore wind farms.
              <br className="desktop-break" /> Turning the power of nature into
              energy for homes,
              <br className="desktop-break" /> businesses and the world we
              share.
            </p>
            <div className="hero-actions hero-enter">
              <a className="button white" href={official.offshore}>
                Explore offshore wind
                <Arrow />
              </a>
              <a className="button outline" href="#projects">
                Discover our projects
                <Arrow />
              </a>
            </div>
          </div>
          <div className="hero-bottom container">
            <ScrollCue />
            <p>
              Rooted in Denmark.
              <br />
              <span>Working across the world.</span>
            </p>
            <span className="hero-index">
              01 <span>/</span> 10
            </span>
          </div>
        </section>
        <section
          id="at-a-glance"
          className="glance section-pad"
          aria-labelledby="glance-title"
        >
          <div className="container">
            <div className="intro-grid" data-reveal>
              <p className="eyebrow section-label">
                <span className="tiny-line" />
                Ørsted at a glance
              </p>
              <div>
                <h2 id="glance-title">
                  Built on experience.
                  <br />
                  <span className="text-blue">Looking to the horizon.</span>
                </h2>
                <div className="glance-description">
                  <p>
                    Offshore wind is our core. A global perspective is our
                    strength. From Europe to Asia Pacific and North America, we
                    bring decades of expertise to the infrastructure the energy
                    transition needs.
                  </p>
                  <a className="text-link" href={official.about}>
                    Get to know Ørsted
                    <Arrow />
                  </a>
                </div>
              </div>
            </div>
            <div className="stats" data-reveal>
              <div className="stat">
                <div className="stat-value">
                  35<span>years</span>
                </div>
                <p>of offshore wind experience</p>
              </div>
              <div className="stat">
                <div className="stat-value">
                  11<span>GW</span>
                </div>
                <p>installed offshore wind capacity</p>
              </div>
              <div className="stat">
                <div className="stat-value">
                  19<span>+ GW</span>
                </div>
                <p>total installed renewable capacity</p>
              </div>
              <div className="stat">
                <div className="stat-value">
                  3<span>continents</span>
                </div>
                <p>connected by one ambition</p>
              </div>
            </div>
            <p className="source-note">
              Company figures published by Ørsted · Checked 1 November 2026
              <a href={official.about}>
                View company information
                <Arrow diagonal />
              </a>
            </p>
          </div>
        </section>
        <section
          className="capabilities section-pad"
          id="expertise"
          aria-labelledby="capabilities-title"
        >
          <div className="container">
            <div className="section-heading" data-reveal>
              <div>
                <p className="eyebrow">From ambition to operation</p>
                <h2 id="capabilities-title">
                  Every stage.
                  <br />
                  One connected expertise.
                </h2>
              </div>
              <p>
                Great energy infrastructure takes more than turbines. It takes
                the knowledge to see the whole picture — and the people to
                deliver every detail.
              </p>
            </div>
            <div className="expertise-grid">
              <figure className="expertise-image" data-reveal>
                <Photo
                  name="engineer"
                  alt="An offshore worker in a hard hat looking towards a wind turbine; illustrative industry photography"
                />
                <figcaption>
                  <span>Engineering energy at scale</span>
                  <span>Development. Delivery. Decades of operation.</span>
                </figcaption>
              </figure>
              <div className="capability-list">
                {capabilities.map((c) => (
                  <a className="capability" key={c.n} href={c.href} data-reveal>
                    <span className="capability-number">{c.n}</span>
                    <div>
                      <span className="eyebrow">{c.subtitle}</span>
                      <h3>{c.title}</h3>
                      <p>{c.text}</p>
                    </div>
                    <Arrow diagonal />
                  </a>
                ))}
              </div>
            </div>
            <div className="portfolio-note" data-reveal>
              <p>
                Beyond offshore wind, our portfolio includes onshore wind,
                solar, energy storage and bioenergy.
              </p>
              <a className="text-link" href={official.other}>
                Explore other energy
                <Arrow />
              </a>
            </div>
          </div>
        </section>
        <section
          className="projects section-pad"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="container">
            <div className="section-heading" data-reveal>
              <div>
                <p className="eyebrow">Our work, out in the world</p>
                <h2 id="projects-title">
                  Extraordinary places.
                  <br />
                  Tangible progress.
                </h2>
              </div>
              <a className="text-link light-link" href={official.projects}>
                Explore our projects
                <Arrow />
              </a>
            </div>
            <div className="project-grid">
              {projects.map((p, i) => (
                <article
                  className={`project project-${i + 1}`}
                  key={p.name}
                  data-reveal
                >
                  <Photo
                    name={p.image}
                    alt={p.alt}
                    sizes={
                      i === 0
                        ? "(max-width: 700px) 100vw, 60vw"
                        : "(max-width: 700px) 100vw, 40vw"
                    }
                  />
                  <div className="project-shade" />
                  <div className="project-top">
                    <span>
                      {p.region}
                      <span className="project-sea"> / {p.sea}</span>
                    </span>
                    <span className="status">
                      <i />
                      Operational
                    </span>
                  </div>
                  <div className="project-content">
                    <span className="project-number">0{i + 1}</span>
                    <h3>
                      <a href={p.url}>
                        {p.name}
                        <span className="project-hit" />
                      </a>
                    </h3>
                    <p>{p.description}</p>
                    <div className="project-meta">
                      <div>
                        <strong>
                          {p.capacity}
                          <span>MW</span>
                        </strong>
                        <span className="capacity-label">
                          Total project capacity
                        </span>
                      </div>
                      <span className="project-arrow">
                        <Arrow diagonal />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="project-footnote">
              <span>
                Whole-project capacities; not ownership-adjusted. Status checked
                1 November 2026.
              </span>
              <span>
                Illustrative photography; featured sites are not pictured.{" "}
                <a href="/concept-notes#photography">
                  Image credits
                  <Arrow diagonal />
                </a>
              </span>
            </div>
          </div>
        </section>
        <section className="why-wind section-pad" aria-labelledby="why-title">
          <div className="container">
            <div className="why-layout">
              <div data-reveal>
                <p className="eyebrow">More than electricity</p>
                <h2 id="why-title">
                  Power from our seas.
                  <br />
                  Value on our shores.
                </h2>
                <p className="section-copy">
                  Offshore wind turns a domestic natural resource into long-term
                  energy infrastructure. Its impact reaches beyond the shoreline
                  — into businesses, supply chains and local communities.
                </p>
                <a className="text-link" href={official.benefits}>
                  Why offshore wind matters
                  <Arrow />
                </a>
              </div>
              <div className="why-points" data-reveal>
                <div>
                  <span>01</span>
                  <div>
                    <h3>A stronger energy foundation</h3>
                    <p>
                      Homegrown renewable generation can help diversify energy
                      supply and reduce reliance on imported fossil fuels.
                    </p>
                  </div>
                </div>
                <div>
                  <span>02</span>
                  <div>
                    <h3>Electricity at meaningful scale</h3>
                    <p>
                      Large offshore projects contribute renewable power to the
                      grids that serve homes, industry and growing economies.
                    </p>
                  </div>
                </div>
                <div>
                  <span>03</span>
                  <div>
                    <h3>Opportunity that reaches land</h3>
                    <p>
                      From ports to specialist engineering, offshore wind
                      supports skills, supply chains and local economic
                      activity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="horizon-strip">
            <Photo
              name="sunrise"
              alt="Morning light over the Race Bank offshore wind farm"
              sizes="100vw"
            />
            <span>Long-term thinking. Real-world infrastructure.</span>
          </div>
        </section>
        <section
          className="responsibility section-pad"
          id="responsibility"
          aria-labelledby="responsibility-title"
        >
          <div className="container responsibility-grid">
            <div className="responsibility-photo" data-reveal>
              <Photo
                name="coast"
                alt="Coastal dunes and native grasses at Hvide Sande, Denmark"
              />
              <span className="image-label">
                A shared environment. A shared responsibility.
              </span>
            </div>
            <div className="responsibility-content" data-reveal>
              <p className="eyebrow">Responsible energy development</p>
              <h2 id="responsibility-title">
                Progress means
                <br />
                taking care.
              </h2>
              <p className="section-copy">
                Renewable energy is essential to decarbonisation. Building it
                also changes environments and communities. That responsibility
                belongs at the heart of how we work.
              </p>
              <div className="responsibility-links">
                <a href={official.climate}>
                  <div>
                    <h3>Decarbonisation</h3>
                    <p>
                      Reducing emissions across our operations and value chain.
                    </p>
                  </div>
                  <Arrow diagonal />
                </a>
                <a href={official.nature}>
                  <div>
                    <h3>Biodiversity</h3>
                    <p>Understanding impacts and working to protect nature.</p>
                  </div>
                  <Arrow diagonal />
                </a>
                <a href={official.communities}>
                  <div>
                    <h3>Community impact</h3>
                    <p>Listening locally and building lasting relationships.</p>
                  </div>
                  <Arrow diagonal />
                </a>
                <a href={official.responsible}>
                  <div>
                    <h3>Responsible business</h3>
                    <p>Accountability, human rights and sound governance.</p>
                  </div>
                  <Arrow diagonal />
                </a>
              </div>
              <a href={official.sustainability} className="text-link">
                Explore our approach to sustainability
                <Arrow />
              </a>
            </div>
          </div>
        </section>
        <section
          className="audiences section-pad"
          id="explore"
          aria-labelledby="audiences-title"
        >
          <div className="container">
            <div className="section-heading" data-reveal>
              <div>
                <p className="eyebrow">Explore Ørsted</p>
                <h2 id="audiences-title">
                  Your next chapter
                  <br />
                  starts here.
                </h2>
              </div>
              <p>
                Different perspectives. A shared interest in the future of
                energy. Find what matters to you.
              </p>
            </div>
            <div className="audience-grid" data-reveal>
              {[
                {
                  n: "01",
                  label: "For investors",
                  title: "A long-term perspective.",
                  text: "Financial reports, company performance and information for shareholders.",
                  cta: "Investor relations",
                  url: official.investors,
                },
                {
                  n: "02",
                  label: "For energy partners",
                  title: "Build something that lasts.",
                  text: "Explore development expertise, partnerships and renewable energy solutions.",
                  cta: "Explore our capabilities",
                  url: official.development,
                },
                {
                  n: "03",
                  label: "For future talent",
                  title: "Put your skills to work.",
                  text: "Bring your perspective to the people shaping the future of energy.",
                  cta: "Discover careers",
                  url: official.careers,
                },
                {
                  n: "04",
                  label: "For communities",
                  title: "Part of your landscape.",
                  text: "Understand our approach to local engagement, opportunity and project impact.",
                  cta: "Community impact",
                  url: official.communities,
                },
              ].map((a) => (
                <a className="audience" href={a.url} key={a.n}>
                  <div className="audience-top">
                    <span className="eyebrow">{a.label}</span>
                    <span>{a.n}</span>
                  </div>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                  <span className="audience-cta">
                    {a.cta}
                    <Arrow />
                  </span>
                </a>
              ))}
            </div>
            <div className="investor-strip" data-reveal>
              <span className="eyebrow">Investor resources</span>
              <a href={official.reports}>
                Financial reports
                <Arrow diagonal />
              </a>
              <a href={official.shares}>
                Official share price monitor
                <Arrow diagonal />
              </a>
            </div>
          </div>
        </section>
        <section
          className="news section-pad"
          id="news"
          aria-labelledby="news-title"
        >
          <div className="container">
            <div className="section-heading" data-reveal>
              <div>
                <p className="eyebrow">News & perspectives</p>
                <h2 id="news-title">The latest from Ørsted.</h2>
              </div>
              <a className="text-link" href={official.news}>
                All news & announcements
                <Arrow />
              </a>
            </div>
            <div className="news-grid">
              {news.map((n) => (
                <article className="news-article" key={n.url} data-reveal>
                  <a
                    href={n.url}
                    className="news-image"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <Photo
                      name={n.image}
                      alt=""
                      sizes="(max-width: 700px) 100vw, 33vw"
                    />
                  </a>
                  <div className="news-meta">
                    <span>{n.category}</span>
                    <time dateTime={n.iso}>{n.date}</time>
                  </div>
                  <h3>
                    <a href={n.url}>
                      {n.title}
                      <Arrow diagonal />
                    </a>
                  </h3>
                </article>
              ))}
            </div>
            <p className="news-note">
              Official news selected on 1 November 2026. Photography is
              illustrative.
            </p>
          </div>
        </section>
        <section className="closing" aria-labelledby="closing-title">
          <Photo
            name="sunset"
            alt="Offshore turbines silhouetted against a warm evening horizon"
            sizes="100vw"
          />
          <div className="closing-shade" />
          <div className="container closing-content" data-reveal>
            <p className="eyebrow">The next horizon is ours to shape</p>
            <h2 id="closing-title">
              The future isn’t far away.
              <br />
              We’re building it.
            </h2>
            <p>
              With engineering, experience and a belief in what energy can make
              possible.
            </p>
            <a className="button white" href={official.about}>
              Discover the Ørsted story
              <Arrow />
            </a>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-identity">
              <a
                href={official.home}
                aria-label="Visit the official Ørsted website"
              >
                <img
                  className="footer-logo"
                  src="/images/orsted-logo.svg"
                  width="146"
                  height="42"
                  alt="Ørsted"
                />
              </a>
              <p>
                A world that runs entirely
                <br />
                on green energy.
              </p>
              <address>
                <strong>Ørsted A/S</strong>
                <br />
                Kraftværksvej 53, Skærbæk
                <br />
                7000 Fredericia, Denmark
                <br />
                <a href="tel:+4599551111">+45 99 55 11 11</a>
                <br />
                <a href="mailto:info@orsted.com">info@orsted.com</a>
              </address>
              <span className="company-number">
                Company registration no. 18 93 66 74
              </span>
            </div>
            <div className="footer-column">
              <h2>Our business</h2>
              <a href={official.offshore}>Offshore wind</a>
              <a href={official.projects}>Our wind farms</a>
              <a href={official.other}>Other energy</a>
              <a href={official.trading}>Energy trading</a>
              <a href={official.ppa}>Power purchase agreements</a>
            </div>
            <div className="footer-column">
              <h2>Explore</h2>
              <a href={official.about}>About Ørsted</a>
              <a href={official.sustainability}>Sustainability</a>
              <a href={official.communities}>Communities</a>
              <a href={official.careers}>Careers</a>
              <a href={official.jobs}>Open positions</a>
            </div>
            <div className="footer-column">
              <h2>Resources</h2>
              <a href={official.investors}>Investors</a>
              <a href={official.reports}>Financial reports</a>
              <a href={official.media}>News & media</a>
              <a href={official.press}>Press kit</a>
              <a href={official.contact}>Contact us</a>
              <a href={official.global}>
                Global sites
                <Arrow diagonal />
              </a>
            </div>
          </div>
          <div className="footer-legal">
            <span>Ørsted A/S · Corporate information</span>
            <div>
              <a href={official.privacy}>Privacy</a>
              <a href={official.cookies}>Cookies</a>
              <a href={official.accessibility}>Accessibility</a>
              <a href={official.governance}>Governance</a>
              <a href={official.legal}>Legal information</a>
            </div>
          </div>
        </div>
      </footer>
      <aside className="concept-bar">
        <div className="container">
          <p>
            Independent redesign concept by{" "}
            <a href="https://bazaleldesign.com/">Bazalel Design</a>
            <span> · Not commissioned by or affiliated with Ørsted.</span>
          </p>
          <a href="/concept-notes">
            Concept notes & credits
            <Arrow diagonal />
          </a>
        </div>
      </aside>
    </>
  );
}
