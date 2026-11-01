import type { Metadata } from "next";
import { official, photoCredits, projects, news } from "@/lib/content";
export const metadata: Metadata = {
  title: "Concept notes & credits | Bazalel Design",
  description:
    "Research, image credits and implementation notes for the independent Ørsted homepage concept.",
};
export default function Notes() {
  return (
    <main className="notes-page">
      <div className="notes-wrap">
        <a className="notes-back" href="/">
          ← Back to the homepage concept
        </a>
        <p className="eyebrow">Bazalel Design · Independent proposal</p>
        <h1>
          A clearer view of
          <br />
          the energy ahead.
        </h1>
        <p>
          This is an independently developed homepage concept by{" "}
          <a href="https://bazaleldesign.com/">Bazalel Design</a>. It is not
          Ørsted’s official website and was not commissioned, approved or
          endorsed by Ørsted. All company actions and external corporate links
          lead to the official website. The corporate voice is proposed copy for
          design evaluation.
        </p>
        <h2>What the redesign improves</h2>
        <ul>
          <li>
            <strong>A more immediate introduction.</strong> The opening message
            connects what Ørsted does with the people and economies its
            infrastructure serves.
          </li>
          <li>
            <strong>Evidence closer to the story.</strong> Dated company
            figures, an integrated capability narrative and three real projects
            make the business tangible.
          </li>
          <li>
            <strong>Clear routes for different audiences.</strong> Dedicated
            investor, partner, talent and community pathways preserve the
            breadth of the corporate site.
          </li>
          <li>
            <strong>Deliberate mobile and keyboard behaviour.</strong>{" "}
            Responsive layouts, native modal dialogs, visible focus states, a
            skip link and reduced-motion support are built into the experience.
          </li>
        </ul>
        <p>
          The existing homepage already provides broad corporate navigation,
          financial reporting, offshore capabilities, sustainability
          information, careers and news. This concept preserves those
          priorities. The original site’s live visual interface was
          access-restricted in the research browser; this proposal does not
          claim that its existing accessibility, interactions or performance are
          defective.
        </p>
        <h2>Factual sources and reporting context</h2>
        <p>
          Company facts and news were checked against official Ørsted pages on{" "}
          <strong>1 November 2026</strong>. This is an editorial snapshot, not a
          live data feed. Capacity values for featured projects describe the
          entire wind farm, not Ørsted’s ownership-adjusted share. All three
          featured projects were listed as operational at the date of review.
        </p>
        <ul>
          <li>
            <a href={official.about}>Company information:</a> 35 years of
            offshore wind experience, 11 GW installed offshore wind capacity and
            more than 19 GW total installed renewable capacity.
          </li>
          <li>
            <a href={official.home}>Official homepage:</a> operations across
            Europe, Asia Pacific and North America.
          </li>
          <li>
            <a href={official.projects}>Official offshore project portfolio:</a>{" "}
            Hornsea 2 (1,320 MW), Greater Changhua 1 & 2a (900 MW combined), and
            Borkum Riffgrund 3 (913 MW).
          </li>
          {projects.map((p) => (
            <li key={p.name}>
              <a href={p.url}>{p.name}</a> — {p.year}; {p.region}.
            </li>
          ))}
          <li>
            <a href={official.development}>Development and construction</a>,{" "}
            <a href={official.trading}>energy trading</a>, and{" "}
            <a href={official.benefits}>benefits of offshore wind</a>.
          </li>
          <li>
            <a href={official.sustainability}>Sustainability approach</a> and
            its linked decarbonisation, biodiversity, community and governance
            resources.
          </li>
        </ul>
        <p>
          The official pages gave conflicting figures for capacity under
          construction (7.2 GW and 8.1 GW). That metric has therefore been
          omitted. No live share-price figure is simulated; the investor link
          opens Ørsted’s official monitor.
        </p>
        <h2>News verification</h2>
        <ul>
          {news.map((n) => (
            <li key={n.url}>
              <a href={n.url}>{n.title}</a> — {n.date}.
            </li>
          ))}
        </ul>
        <p>
          The Q3 announcement concerns a future publication on 5 November 2026.
          The Gunfleet Sands announcement describes an agreement to acquire the
          remaining ownership, subject to closing; the transaction is not
          presented here as completed.
        </p>
        <h2 id="photography">Photography and brand credits</h2>
        <p>
          All photographs are real images obtained from Unsplash under the{" "}
          <a href="https://unsplash.com/license">Unsplash License</a>. They are
          illustrative replacements for design evaluation. The project tiles and
          news images do not depict the specific projects or events beside them.
          The hero shows Rampion, which is not presented as an Ørsted project.
          The engineering portrait is not identified as an Ørsted employee.
        </p>
        <table className="credits-table">
          <thead>
            <tr>
              <th>Image use</th>
              <th>Photographer / source</th>
            </tr>
          </thead>
          <tbody>
            {photoCredits.map(([use, author, url]) => (
              <tr key={url}>
                <td>{use}</td>
                <td>
                  <a href={url}>{author} · Unsplash</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ marginTop: 24 }}>
          The Ørsted wordmark is reproduced with its original geometry for
          identification within this private concept.{" "}
          <a href="https://commons.wikimedia.org/wiki/File:%C3%98rsted_logo.svg">
            Vector source and trademark notice
          </a>
          . The mark remains Ørsted’s property. This does not establish
          permission for a public agency marketing campaign. Ørsted’s{" "}
          <a href={official.press}>official press-kit restrictions</a> apply;
          approved brand assets and project photography should replace the
          illustrative set before any authorised corporate launch.
        </p>
        <p style={{ marginTop: 20 }}>
          DM Sans is an open-source substitute used for this concept, not a
          claim to use Ørsted’s proprietary corporate typeface. It is
          distributed under the SIL Open Font License; the license is included
          with the source.
        </p>
        <h2>Implementation</h2>
        <p>
          React and TypeScript with the supplied Next.js-compatible Vinext
          runtime. Tailwind CSS and custom responsive styles. Locally hosted
          WebP photography in two sizes, locally hosted type, deferred images
          below the hero and lightweight CSS/IntersectionObserver motion. Search
          filters the featured official resources in this concept; it does not
          impersonate Ørsted’s full-site search. No analytics, advertising
          scripts, newsletter submissions or artificial financial data are
          added.
        </p>
        <p style={{ marginTop: 20 }}>
          The page is marked noindex and is intended for private design review.
          Keyboard and responsive checks help validate the implementation; they
          are not a formal WCAG certification.
        </p>
        <a className="notes-back" href="/" style={{ marginTop: 40 }}>
          ← Return to the experience
        </a>
      </div>
    </main>
  );
}
