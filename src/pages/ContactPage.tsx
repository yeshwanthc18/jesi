import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Globe,
  Building2,
  Clock,
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollProgress } from '../components/ScrollProgress';
import { useReveal } from '../hooks/useReveal';

interface Branch {
  country: string;
  flag: string;
  type: string;
  address: string[];
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
}

const branches: Branch[] = [
  {
    country: 'India',
    flag: 'IN',
    type: 'Head Quarters',
    address: [
      'Plot No 22-A, AMRL Hi-Tech City Ltd,',
      'Multi Product SEZ, Nanguneri,',
      'Tirunelveli, Tamilnadu - 627108',
    ],
    phone: '+91 94447 52043',
    phoneHref: 'tel:+919444752043',
    email: 'info@jerseyenggs.com',
    emailHref: 'mailto:info@jerseyenggs.com',
  },
  {
    country: 'U.S.A',
    flag: 'US',
    type: 'US – Sale Office',
    address: [
      'Charlottesville,',
      'Virginia 22902,',
      'United States',
    ],
    phone: '+1 434 218-8403',
    phoneHref: 'tel:+14342188403',
    email: 'Bruce.Dorey@JerseyEng.com',
    emailHref: 'mailto:Bruce.Dorey@JerseyEng.com',
  },
  {
    country: 'Canada',
    flag: 'CA',
    type: 'Canada – Sale Office',
    address: [
      '7405 East Danbro Crescent,',
      'Mississauga, Ontario,',
      'L5N 6P8 CANADA',
    ],
    phone: '+1 204 227-8285',
    phoneHref: 'tel:+12042278285',
    email: 'Brad.Tully@JerseyEng.com',
    emailHref: 'mailto:Brad.Tully@JerseyEng.com',
  },
];

const globalOffices = [
  {
    region: 'India — HQ',
    lines: ['Plot No 22-A, AMRL Hi-Tech City Ltd,', 'Multi Product SEZ, Nanguneri,', 'Tirunelveli, Tamilnadu - 627108'],
  },
  {
    region: 'USA — Sale Office',
    lines: ['Charlottesville,', 'Virginia 22902, United States'],
  },
  {
    region: 'Canada — Sale Office',
    lines: ['7405 East Danbro Crescent,', 'Mississauga, Ontario, L5N 6P8'],
  },
  {
    region: 'Europe — Belgium Office',
    lines: ['BLERCO BVBA Sint-Jacobsnieuw,', 'straat 45 Ghent 9000, Belgium'],
  },
  {
    region: 'Qatar — Jersey Group',
    lines: ['Building No. 44, Zone No. 91,', 'Street No. 3062, Logistic Park-B,', 'Birkat Al Awamer, State of Qatar.'],
  },
  {
    region: 'Africa — Nigeria Office',
    lines: ['Plot 18, Nike Art Gallery Road,', 'Lekki, Lagos, Nigeria'],
  },
];

export function ContactPage() {
  const { ref: heroRef, inView: heroInView } = useReveal();
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    'w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-sm text-ink-800 placeholder:text-ink-300 transition-colors duration-200 focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red';

  return (
    <div className="relative min-h-screen bg-ink-50">
      <ScrollProgress />
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-ink-800 pt-32 pb-20 lg:pt-40 lg:pb-28">
          {/* Decorative background */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.pexels.com/photos/6285158/pexels-photo-6285158.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt=""
              className="h-full w-full object-cover opacity-15"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink-900/80 via-ink-900/70 to-ink-900/95" />
          </div>

          {/* Grid overlay */}
          <div
            className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />

          <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
            <div ref={heroRef} className={heroInView ? 'animate-fade-up' : 'opacity-0'}>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: heroInView ? 1 : 0, x: heroInView ? 0 : -20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-brand-red"
              >
                <span className="block h-px w-8 bg-brand-red" />
                Contact Us
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-7xl"
              >
                Let's engineer
                <br />
                your <span className="text-brand-red">success</span> together!
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 15 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-200"
              >
                Whether you have a specific project in mind or simply want to
                explore the possibilities, we invite you to get in touch.
              </motion.p>

              {/* Quick contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6"
              >
                <a
                  href="tel:+919444752043"
                  className="group inline-flex items-center gap-3 rounded-lg border border-ink-300/30 bg-white/5 px-6 py-4 backdrop-blur-sm transition-all duration-300 hover:border-brand-red hover:bg-brand-red"
                >
                  <Phone className="h-5 w-5 text-brand-red transition-colors group-hover:text-white" />
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-ink-300 group-hover:text-white/70">
                      Call us
                    </div>
                    <div className="font-display text-sm font-semibold text-white">
                      +91 94447 52043
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@jerseyenggs.com"
                  className="group inline-flex items-center gap-3 rounded-lg border border-ink-300/30 bg-white/5 px-6 py-4 backdrop-blur-sm transition-all duration-300 hover:border-brand-red hover:bg-brand-red"
                >
                  <Mail className="h-5 w-5 text-brand-red transition-colors group-hover:text-white" />
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-ink-300 group-hover:text-white/70">
                      Email us
                    </div>
                    <div className="font-display text-sm font-semibold text-white">
                      info@jerseyenggs.com
                    </div>
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Form + Info */}
        <section className="bg-ink-100 py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
              {/* Form */}
              <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-sm">
                <div className="h-1.5 w-full bg-gradient-to-r from-brand-red via-amber to-brand-red" />
                <div className="p-6 sm:p-8 lg:p-10">
                  <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-ink-800 lg:text-3xl">
                    Send us a message
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">
                    Tell us about your project. We'll get back to you within 24
                    hours with next steps.
                  </p>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-8 rounded-xl border border-brand-red/20 bg-brand-red/5 p-8 text-center"
                    >
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red">
                        <ArrowRight className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-ink-800">
                        Message sent!
                      </h3>
                      <p className="mt-2 text-sm text-ink-500">
                        Thanks for reaching out. Our team will get back to you
                        within 24 hours.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setForm({ name: '', email: '', company: '', phone: '', service: '', message: '' });
                        }}
                        className="mt-5 rounded-lg border border-ink-200 px-5 py-2.5 text-sm font-medium text-ink-600 transition-colors hover:border-brand-red hover:text-brand-red"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.1em] text-ink-400">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Jane Doe"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.1em] text-ink-400">
                            Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="jane@company.com"
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.1em] text-ink-400">
                            Company
                          </label>
                          <input
                            type="text"
                            value={form.company}
                            onChange={(e) => setForm({ ...form, company: e.target.value })}
                            placeholder="Your company"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.1em] text-ink-400">
                            Phone
                          </label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            placeholder="+1 234 567 890"
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.1em] text-ink-400">
                          Service of Interest
                        </label>
                        <select
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className={inputClass}
                        >
                          <option value="">Select a service...</option>
                          <option value="bim">BIM Modeling</option>
                          <option value="mep-drafting">MEP Drafting</option>
                          <option value="building-engineering">Building Engineering Services</option>
                          <option value="cfd-analysis">CFD Analysis</option>
                          <option value="contract-manufacturing">Contract Manufacturing</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.1em] text-ink-400">
                          Project Details *
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Tell us about your project — scope, timeline, LOD level, deliverables needed..."
                          className={`${inputClass} resize-none`}
                        />
                      </div>

                      <button
                        type="submit"
                        className="group flex w-full items-center justify-center gap-2 rounded-lg bg-brand-red px-6 py-4 font-display text-sm font-semibold text-white transition-all duration-300 hover:bg-ink-800 hover:shadow-xl"
                      >
                        Send message
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Info sidebar */}
              <div className="space-y-6">
                <div className="rounded-2xl border border-ink-200 bg-white p-7 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red/10">
                      <Clock className="h-5 w-5 text-brand-red" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-ink-800">
                      Response Time
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">
                    We acknowledge all inquiries within a few hours and respond
                    with a detailed proposal within 24 hours.
                  </p>
                </div>

                <div className="rounded-2xl border border-ink-200 bg-white p-7 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red/10">
                      <Globe className="h-5 w-5 text-brand-red" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-ink-800">
                      Global Presence
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">
                    With offices across India, the USA, Canada, Europe, the
                    Middle East, and Africa, we serve clients worldwide.
                  </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-ink-200 shadow-sm">
                  <img
                    src="https://images.pexels.com/photos/1181370/pexels-photo-1181370.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Engineering team at work"
                    className="h-56 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="bg-white p-6">
                    <h3 className="font-display text-lg font-bold text-ink-800">
                      Want to talk with us?
                    </h3>
                    <p className="mt-2 text-sm text-ink-500">
                      Prefer a call? Reach our headquarters directly.
                    </p>
                    <a
                      href="tel:+919444752043"
                      className="group mt-4 inline-flex items-center gap-2 font-display text-sm font-semibold text-brand-red transition-colors hover:text-ink-800"
                    >
                      +91 94447 52043
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Branches */}
        <section className="bg-ink-50 py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="mb-12">
              <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-brand-red">
                <span className="block h-px w-8 bg-brand-red" />
                Our Branches
              </p>
              <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-ink-800 sm:text-4xl lg:text-5xl">
                Talk to us at the
                <br />
                <span className="text-ink-400">office nearest you.</span>
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {branches.map((branch, i) => (
                <BranchCard key={branch.country} branch={branch} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Global Reach */}
        <section className="relative overflow-hidden bg-ink-800 py-16 lg:py-24">
          <div
            className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />

          <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="mb-12">
              <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-brand-red">
                <span className="block h-px w-8 bg-brand-red" />
                Global Reach
              </p>
              <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Our global reach
                <br />
                <span className="text-ink-400">and impact.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-300">
                Our organization has a strong global presence with branches
                strategically located in key regions, making a positive impact on
                a worldwide scale.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {globalOffices.map((office, i) => (
                <motion.div
                  key={office.region}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group rounded-xl border border-ink-300/20 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-brand-red/40 hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <Building2 className="h-5 w-5 text-brand-red" />
                    <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">
                      {office.region}
                    </h3>
                  </div>
                  <div className="mt-3 space-y-0.5">
                    {office.lines.map((line, j) => (
                      <p key={j} className="text-sm leading-relaxed text-ink-300">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function BranchCard({ branch, index }: { branch: Branch; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-ink-200 bg-white p-7 transition-all duration-300 hover:border-brand-red/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
    >
      {/* Top accent bar */}
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand-red transition-transform duration-500 group-hover:scale-x-100" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-100 font-mono text-xs font-bold text-ink-600 transition-colors group-hover:bg-brand-red group-hover:text-white">
            {branch.flag}
          </span>
          <h3 className="font-display text-xl font-bold uppercase tracking-tight text-ink-800">
            {branch.country}
          </h3>
        </div>
      </div>

      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-400">
        {branch.type}
      </p>

      <div className="mt-5 space-y-2.5">
        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
          <div className="space-y-0.5">
            {branch.address.map((line, j) => (
              <p key={j} className="text-sm leading-relaxed text-ink-500">
                {line}
              </p>
            ))}
          </div>
        </div>

        <a
          href={branch.phoneHref}
          className="flex items-center gap-3 pt-2 transition-colors hover:text-brand-red"
        >
          <Phone className="h-4 w-4 shrink-0 text-brand-red" />
          <span className="text-sm font-medium text-ink-600 group-hover:text-brand-red">
            {branch.phone}
          </span>
        </a>

        <a
          href={branch.emailHref}
          className="flex items-center gap-3 transition-colors hover:text-brand-red"
        >
          <Mail className="h-4 w-4 shrink-0 text-brand-red" />
          <span className="text-sm font-medium text-ink-600 group-hover:text-brand-red">
            {branch.email}
          </span>
        </a>
      </div>
    </motion.div>
  );
}
