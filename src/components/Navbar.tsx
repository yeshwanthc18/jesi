import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { NavDropdown, type NavServiceItem } from "./NavDropdown";
import { allContent } from "../lib/content";

const navLinks = [
  { label: "Process", href: "#process" },
  { label: "Clients", href: "#clients" },
  { label: "FAQ", href: "#faq" },
];

export function mapContentToNavItems(): NavServiceItem[] {
  return allContent.map((s) => ({
    label: s.label,
    href: s.navHref,
    subServices: s.subServices,
  }));
}

export function Navbar() {
  const scrolled = true;
  const [open, setOpen] = useState(false);

  const textColor = scrolled ? "text-ink-800" : "text-white";
  const navServiceItems = mapContentToNavItems();

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-ink-200 bg-white/95 backdrop-blur-md shadow-sm"
            : "border-transparent bg-white/75"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="JES"
              className="h-11 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-7 md:flex">
            <NavDropdown services={navServiceItems} scrolled={scrolled} />

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled
                    ? "text-ink-500 hover:text-brand-red"
                    : "text-white hover:text-brand-red"
                }`}
              >
                {link.label}
              </a>
            ))}

            <Link
              to="/contact"
              className={`rounded px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                scrolled
                  ? "bg-brand-red text-white hover:bg-ink-800"
                  : "border border-white bg-white text-ink-900 hover:bg-brand-red hover:text-white hover:border-brand-red"
              }`}
            >
              Free BIM Pilot →
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className={`transition-colors duration-300 md:hidden ${textColor}`}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-4 px-6 overflow-y-auto">
              <MobileServicesAccordion services={navServiceItems} onNavigate={() => setOpen(false)} />
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (i + navServiceItems.length) * 0.05 }}
                  className="font-display text-2xl font-medium text-ink-800"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
                className="mt-4"
              >
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="rounded bg-brand-red px-8 py-3 text-sm font-semibold text-white"
                >
                  Free BIM Pilot →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileServicesAccordion({ services, onNavigate }: { services: NavServiceItem[]; onNavigate: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(services[0]?.label ?? null);

  return (
    <div className="w-full max-w-xs">
      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-400">
        Services
      </p>
      {services.map((service) => {
        const isOpen = expanded === service.label;
        const hasSubs = (service.subServices?.length ?? 0) > 0;
        return (
          <div key={service.label} className="border-b border-ink-100">
            <div className="flex w-full items-center justify-between py-2.5 text-left">
              <Link
                to={service.href}
                onClick={() => {
                  if (!hasSubs) onNavigate();
                }}
                className="font-display text-xl font-medium text-ink-800"
              >
                {service.label}
              </Link>
              {hasSubs && (
                <button
                  onClick={() => setExpanded(isOpen ? null : service.label)}
                  aria-label="Toggle sub-services"
                >
                  <ChevronDown
                    className={`h-5 w-5 text-brand-red transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}
            </div>
            <AnimatePresence initial={false}>
              {isOpen && hasSubs && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  {service.subServices!.map((sub) => (
                    <Link
                      key={sub.label}
                      to={sub.href}
                      onClick={() => onNavigate()}
                      className="block py-2 pl-4 text-sm text-ink-500 transition-colors hover:text-brand-red"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
