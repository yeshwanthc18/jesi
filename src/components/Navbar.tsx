import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavDropdown } from "./NavDropdown";
import { services } from "../data/services";

const navLinks = [
  { label: "Process", href: "#process" },
  { label: "Clients", href: "#clients" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const scrolled = true;
  const [open, setOpen] = useState(false);

//  useEffect(() => {
//   const onScroll = () => {
//     setScrolled(window.scrollY > 0);
//   };

//   onScroll();

//   window.addEventListener("scroll", onScroll, { passive: true });

//   return () => window.removeEventListener("scroll", onScroll);
// }, []);

  const textColor = scrolled
    ? "text-ink-800"
    : "text-white";

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
          <a href="#top" className="flex items-center gap-3">
            <img
              src="/logo.png" 
              alt="JES"
              className="h-11 w-auto"
            />

            {/* <div className="flex flex-col leading-none">
              <span
                className={`font-display text-xl font-bold transition-colors duration-300 ${textColor}`}
              >
                JES
              </span>

              <span
                className={`hidden text-xs sm:block transition-colors duration-300 ${subTextColor}`}
              >
                BIM Services
              </span>
            </div> */}
          </a>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-7 md:flex">
            <NavDropdown services={services} scrolled={scrolled} />

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

            <a
              href="#contact"
              className={`rounded px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                scrolled
                  ? "bg-brand-red text-white hover:bg-ink-800"
                  : "border border-white bg-white text-ink-900 hover:bg-brand-red hover:text-white hover:border-brand-red"
              }`}
            >
              Free BIM Pilot →
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className={`transition-colors duration-300 md:hidden ${textColor}`}
          >
            {open ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
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
              <MobileServicesAccordion />
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (i + services.length) * 0.05 }}
                  className="font-display text-2xl font-medium text-ink-800"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
                className="mt-4 rounded bg-brand-red px-8 py-3 text-sm font-semibold text-white"
              >
                Free BIM Pilot →
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileServicesAccordion() {
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
            <button
              onClick={() => setExpanded(isOpen ? null : service.label)}
              className="flex w-full items-center justify-between py-2.5 text-left"
            >
              <a
                href={service.href}
                onClick={(e) => {
                  if (hasSubs) {
                    e.preventDefault();
                    setExpanded(isOpen ? null : service.label);
                  }
                }}
                className="font-display text-xl font-medium text-ink-800"
              >
                {service.label}
              </a>
              {hasSubs && (
                <ChevronDown
                  className={`h-5 w-5 text-brand-red transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              )}
            </button>
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
                    <a
                      key={sub.label}
                      href={sub.href}
                      className="block py-2 pl-4 text-sm text-ink-500 transition-colors hover:text-brand-red"
                    >
                      {sub.label}
                    </a>
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