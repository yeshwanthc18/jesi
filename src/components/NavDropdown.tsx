import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export interface NavServiceItem {
  label: string;
  href: string;
  subServices?: { label: string; href: string }[];
}

interface NavDropdownProps {
  services: NavServiceItem[];
  scrolled: boolean;
  onNavigate?: () => void;
}

export function NavDropdown({ services, scrolled, onNavigate }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const [activeService, setActiveService] = useState<NavServiceItem | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    if (open && !activeService) {
      setActiveService(services[0] ?? null);
    }
    if (!open) setActiveService(null);
  }, [open, services, activeService]);

  const triggerClass = scrolled
    ? 'text-ink-500 hover:text-brand-red'
    : 'text-white hover:text-brand-red';

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${triggerClass}`}
        aria-haspopup="true"
        aria-expanded={open}
      >
        Services
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            onMouseLeave={() => setOpen(false)}
            className="absolute left-0 top-full z-50 mt-3 flex min-w-[520px] overflow-hidden rounded-xl border border-ink-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
          >
            {/* Left column — service list */}
            <div className="w-[220px] shrink-0 border-r border-ink-100 bg-ink-50 py-2">
              {services.map((service) => {
                const isActive = activeService?.label === service.label;
                return (
                  <button
                    key={service.label}
                    onMouseEnter={() => setActiveService(service)}
                    onClick={() => {
                      onNavigate?.();
                    }}
                    className={`flex w-full items-center justify-between gap-2 px-4 py-2.5 text-left text-sm font-medium transition-colors duration-150 ${
                      isActive
                        ? 'bg-brand-red/8 text-brand-red'
                        : 'text-ink-600 hover:bg-ink-100 hover:text-ink-800'
                    }`}
                  >
                    <Link to={service.href} onClick={() => setOpen(false)}>
                      {service.label}
                    </Link>
                    {(service.subServices?.length ?? 0) > 0 && (
                      <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-50" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right column — sub-services */}
            <div className="flex-1 py-2">
              <AnimatePresence mode="wait">
                {activeService && (activeService.subServices?.length ?? 0) > 0 ? (
                  <motion.div
                    key={activeService.label}
                    initial={{ opacity: 0, x: 6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -4 }}
                    transition={{ duration: 0.14 }}
                  >
                    <p className="px-5 pb-1.5 pt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-400">
                      {activeService.label}
                    </p>
                    {activeService.subServices!.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        onClick={() => {
                          setOpen(false);
                          onNavigate?.();
                        }}
                        className="flex items-center gap-2 px-5 py-2 text-sm text-ink-500 transition-colors duration-150 hover:text-brand-red"
                      >
                        <span className="h-1 w-1 shrink-0 rounded-full bg-brand-red/40" />
                        {sub.label}
                      </Link>
                    ))}
                  </motion.div>
                ) : activeService ? (
                  <motion.div
                    key={activeService.label + '-empty'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex h-full items-center justify-center p-8 text-sm text-ink-400"
                  >
                    <span className="italic">No sub-services</span>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
