"use client";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Globe2,
  Menu,
  Search,
  X,
} from "lucide-react";
import { official, resources } from "@/lib/content";
export function Arrow({
  diagonal = false,
  className = "",
}: {
  diagonal?: boolean;
  className?: string;
}) {
  const Icon = diagonal ? ArrowUpRight : ArrowRight;
  return (
    <Icon
      className={className}
      size={20}
      strokeWidth={1.6}
      aria-hidden="true"
    />
  );
}
export function Photo({
  name,
  alt,
  className = "",
  hero = false,
  sizes = "(max-width: 700px) 100vw, 50vw",
}: {
  name: string;
  alt: string;
  className?: string;
  hero?: boolean;
  sizes?: string;
}) {
  return (
    <img
      className={className}
      src={`/images/${name}-${hero ? 2200 : 1400}.webp`}
      srcSet={
        hero
          ? `/images/${name}-960.webp 960w, /images/${name}-2200.webp 2200w`
          : `/images/${name}-640.webp 640w, /images/${name}-1400.webp 1400w`
      }
      sizes={sizes}
      alt={alt}
      width={hero ? 2200 : 1400}
      height={hero ? 1467 : 933}
      loading={hero ? "eager" : "lazy"}
      fetchPriority={hero ? "high" : "auto"}
      decoding="async"
    />
  );
}
export function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((e) => {
      e.classList.add("will-reveal");
      observer.observe(e);
    });
    return () => observer.disconnect();
  }, []);
  return null;
}
const menus = [
  {
    label: "Offshore wind",
    description: "From the first survey to decades of renewable electricity.",
    links: [
      ["Explore offshore wind", official.offshore],
      ["Our wind farms", official.projects],
      ["Development & construction", official.development],
      ["Energy trading", official.trading],
      ["Power purchase agreements", official.ppa],
      ["Why offshore wind", official.benefits],
    ],
  },
  {
    label: "Other energy",
    description: "A broader portfolio. A shared renewable energy ambition.",
    links: [
      ["Explore our energy portfolio", official.other],
      ["Energy trading & markets", official.trading],
      ["Corporate energy solutions", official.ppa],
    ],
  },
  {
    label: "About Ørsted",
    description: "Engineering a world that runs entirely on green energy.",
    links: [
      ["Who we are", official.about],
      ["Sustainability", official.sustainability],
      ["Biodiversity", official.nature],
      ["Community impact", official.communities],
      ["Corporate governance", official.governance],
      ["Contact us", official.contact],
    ],
  },
];
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const search = useRef<HTMLDialogElement>(null);
  const mobile = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 40);
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    const outside = (e: PointerEvent) => {
      if (!header.current?.contains(e.target as Node)) setActive(null);
    };
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape" && active !== null) {
        document.getElementById(`nav-trigger-${active}`)?.focus();
        setActive(null);
      }
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", key);
    return () => {
      window.removeEventListener("scroll", scroll);
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", key);
    };
  }, [active]);
  useEffect(() => {
    document.body.style.overflow = searchOpen || mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [searchOpen, mobileOpen]);
  function openSearch() {
    setActive(null);
    mobile.current?.close();
    setMobileOpen(false);
    search.current?.showModal();
    setSearchOpen(true);
  }
  const matched = query.trim()
    ? resources.filter((item) =>
        `${item.title} ${item.detail}`
          .toLowerCase()
          .includes(query.trim().toLowerCase()),
      )
    : resources.slice(0, 6);
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header
        ref={header}
        className={`site-header ${scrolled || active !== null ? "solid" : ""}`}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node))
            setActive(null);
        }}
      >
        <div className="header-inner">
          <a href="#top" aria-label="Ørsted concept home" className="brand">
            <img
              src="/images/orsted-logo.svg"
              alt="Ørsted"
              width="138"
              height="40"
            />
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {menus.map((menu, i) => (
              <button
                key={menu.label}
                id={`nav-trigger-${i}`}
                aria-controls={`nav-panel-${i}`}
                aria-expanded={active === i}
                onClick={() => setActive(active === i ? null : i)}
              >
                {menu.label}
                <ChevronDown size={13} aria-hidden="true" />
              </button>
            ))}
            <a href={official.investors}>Investors</a>
            <a href={official.careers}>Careers</a>
            <a href={official.media}>News & media</a>
          </nav>
          <div className="header-tools">
            <a
              className="global-link"
              href={official.global}
              aria-label="Global sites and languages"
            >
              <Globe2 size={18} strokeWidth={1.5} />
              <span>Global</span>
            </a>
            <span className="header-divider" />
            <button
              className="icon-button search-trigger"
              aria-label="Search Ørsted resources"
              onClick={openSearch}
            >
              <Search size={21} strokeWidth={1.5} />
            </button>
            <button
              className="icon-button mobile-trigger"
              aria-label="Open navigation"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              onClick={() => {
                mobile.current?.showModal();
                setMobileOpen(true);
              }}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
        {menus.map((menu, i) => (
          <div
            key={menu.label}
            className="mega-menu"
            id={`nav-panel-${i}`}
            hidden={active !== i}
          >
            <div className="mega-intro">
              <span className="eyebrow">Explore Ørsted</span>
              <p>{menu.description}</p>
              <a className="text-link" href={menu.links[0][1]}>
                Discover more
                <Arrow />
              </a>
            </div>
            <div className="mega-links">
              {menu.links.map(([label, url]) => (
                <a key={label} href={url}>
                  {label}
                  <Arrow />
                </a>
              ))}
            </div>
            <div className="mega-photo">
              <Photo
                name="sunrise"
                alt="Offshore wind turbines in morning light"
              />
              <span>Energy with a long-term perspective.</span>
            </div>
          </div>
        ))}
      </header>
      {active !== null && (
        <div
          className="menu-scrim"
          aria-hidden="true"
          onClick={() => setActive(null)}
        />
      )}
      <dialog
        ref={mobile}
        id="mobile-navigation"
        className="mobile-dialog"
        onClose={() => setMobileOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) mobile.current?.close();
        }}
        aria-labelledby="mobile-title"
      >
        <div className="dialog-top">
          <h2 id="mobile-title">Explore Ørsted</h2>
          <button
            className="icon-button"
            aria-label="Close navigation"
            onClick={() => mobile.current?.close()}
          >
            <X />
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          {menus.map((menu) => (
            <details key={menu.label}>
              <summary>
                {menu.label}
                <ChevronDown size={20} />
              </summary>
              <div>
                {menu.links.map(([label, url]) => (
                  <a href={url} key={label}>
                    {label}
                    <Arrow />
                  </a>
                ))}
              </div>
            </details>
          ))}
          <a className="mobile-major" href={official.investors}>
            Investors
            <Arrow />
          </a>
          <a className="mobile-major" href={official.careers}>
            Careers
            <Arrow />
          </a>
          <a className="mobile-major" href={official.media}>
            News & media
            <Arrow />
          </a>
          <a className="mobile-major" href={official.contact}>
            Contact
            <Arrow />
          </a>
        </nav>
        <button className="button dark" onClick={openSearch}>
          <Search size={18} />
          Search resources
        </button>
        <a className="text-link mobile-global" href={official.global}>
          <Globe2 size={18} />
          Global sites
        </a>
      </dialog>
      <dialog
        ref={search}
        className="search-dialog"
        aria-labelledby="search-title"
        onClose={() => setSearchOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) search.current?.close();
        }}
      >
        <div className="dialog-top">
          <span className="eyebrow">Find your way</span>
          <button
            className="icon-button"
            aria-label="Close search"
            onClick={() => search.current?.close()}
          >
            <X />
          </button>
        </div>
        <h2 id="search-title">What are you looking for?</h2>
        <div className="search-field">
          <Search size={23} aria-hidden="true" />
          <input
            autoFocus
            aria-label="Search featured Ørsted resources"
            placeholder="Try projects, careers or financial reports"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button
              className="icon-button"
              aria-label="Clear search"
              onClick={() => setQuery("")}
            >
              <X size={18} />
            </button>
          )}
        </div>
        <p className="search-explanation">
          Search the featured resources in this concept. Results open Ørsted’s
          official website.
        </p>
        <p className="search-count" aria-live="polite">
          {query
            ? `${matched.length} matching resource${matched.length === 1 ? "" : "s"}`
            : "Popular destinations"}
        </p>
        <div className="search-results">
          {matched.map((item) => (
            <a href={item.url} key={item.title}>
              <div>
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </div>
              <Arrow diagonal />
            </a>
          ))}
          {matched.length === 0 && (
            <div className="search-empty">
              <p>
                No featured resources match “{query}”. Try “wind”, “careers” or
                “investors”.
              </p>
              <a className="text-link" href={official.contact}>
                Contact Ørsted
                <Arrow />
              </a>
            </div>
          )}
        </div>
      </dialog>
    </>
  );
}
export function ScrollCue() {
  return (
    <a href="#at-a-glance" className="scroll-cue">
      <span className="circle-icon">
        <ArrowDown size={17} strokeWidth={1.5} />
      </span>
      <span>Discover our world</span>
    </a>
  );
}
