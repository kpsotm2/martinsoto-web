'use client';

import {
  MorphingPopover,
  MorphingPopoverTrigger,
  MorphingPopoverContent,
} from './morphing-popover';

export function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="text-xl font-black tracking-[-0.02em] text-[#f2ca50] font-[family-name:var(--font-headline)]">
          Martín Soto
        </div>

        <div className="hidden md:flex items-center gap-12">
          <a
            className="font-bold tracking-tighter uppercase text-sm text-[#f2ca50] border-b border-[#f2ca50] pb-1 transition-colors duration-300 font-[family-name:var(--font-headline)]"
            href="#sobre-mi"
          >
            Sobre mí
          </a>
          <a
            className="font-bold tracking-tighter uppercase text-sm text-white/70 hover:text-[#f2ca50] transition-colors duration-300 font-[family-name:var(--font-headline)]"
            href="#empresas"
          >
            Empresas
          </a>
          <a
            className="font-bold tracking-tighter uppercase text-sm text-white/70 hover:text-[#f2ca50] transition-colors duration-300 font-[family-name:var(--font-headline)]"
            href="#contacto"
          >
            Contacto
          </a>
        </div>

        <MorphingPopover>
          <MorphingPopoverTrigger className="bg-[#f2ca50] text-[#3c2f00] px-6 py-2 font-[family-name:var(--font-headline)] font-bold text-sm uppercase tracking-widest cursor-pointer">
            Hablemos
          </MorphingPopoverTrigger>
          <MorphingPopoverContent
            className="right-0 top-0 w-[min(700px,90vw)] bg-white"
            variants={{
              initial: { opacity: 0, scale: 0.9, originX: 1, originY: 0 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.9 },
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-5 bg-[#131313] border-b border-[#f2ca50]/20">
              <div>
                <p className="text-[#f2ca50] text-[10px] uppercase tracking-[0.3em] mb-1 font-[family-name:var(--font-label)]">
                  Agenda una reunión
                </p>
                <h2 className="font-[family-name:var(--font-headline)] font-black text-white text-xl uppercase tracking-tighter">
                  Hablemos.
                </h2>
              </div>
            </div>
            {/* Calendar */}
            <div className="bg-white">
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ07T41d3wkbHKLBOqyS6jDB0OcpUpAdMJkSXrMNDHWu1Bpm9gWnrOGwe8Z9N8PUoE9_33MDh10B?gv=true"
                style={{ border: 0, display: 'block' }}
                width="100%"
                height="600"
              />
            </div>
          </MorphingPopoverContent>
        </MorphingPopover>
      </div>
    </nav>
  );
}
