import { Linkedin, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { allContent } from "../lib/content";

export function Footer() {
  const serviceLinks = allContent.map((c) => ({
    label: c.label,
    href: c.navHref,
  }));

  const footerLinks = {
    "Services": serviceLinks,
    Company: [
      { label: "About JES", href: "#" },
      { label: "Our Process", href: "#process" },
      { label: "Client Results", href: "#clients" },
      { label: "FAQ", href: "#faq" },
    ],
    Resources: [
      { label: "Revit MEP", href: "#" },
      { label: "Navisworks", href: "#" },
      { label: "BIM 360 / ACC", href: "#" },
      { label: "Dynamo", href: "#" },
    ],
  };

  return (
    <footer className="bg-ink-50 py-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="JES Engineering"
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500">
              Federated MEP BIM models — LOD 100 to 500. Clash-free Revit
              coordination delivered on BIM 360 or ACC. Built by engineers, for
              engineers.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 text-ink-500 transition-colors hover:border-brand-red hover:text-brand-red"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-ink-400">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-ink-500 transition-colors hover:text-brand-red"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-200 pt-8 sm:flex-row">
          <p className="text-sm text-ink-400">
            © 2026 JES Engineering. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-ink-400">
            <Link to="/contact" className="transition-colors hover:text-ink-800">
              Contact Us
            </Link>
            <a href="#" className="transition-colors hover:text-ink-800">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-ink-800">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
