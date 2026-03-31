import { Nav } from '@/components/nav';

export default function Home() {
  return (
    <div className="bg-[#131313] text-[#e2e2e2] font-[family-name:var(--font-headline)]">
      <Nav />

      <main>
        {/* Hero */}
        <section className="min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-8">
          <div className="w-full max-w-7xl flex flex-col items-center text-center">
            <div className="mb-12 relative">
              <div className="w-64 h-80 bg-[#1b1b1b] overflow-hidden grayscale contrast-125 mb-8">
                <img
                  alt="Martín Soto Portrait"
                  className="w-full h-full object-cover mix-blend-luminosity"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCDKFXRzpfSahSi39WdUTb2WVPH5uKlFyzbaQ7vOwMYnjeV3VUihKnsjFYbiqHza2DBayZ7_PaRg5qCxRuq2-obHS398nkZ_Ey6V0AxR9SVYLPZpb8qWFf42XohMmuQNU-qh5fmXWXu4Gdf94jXoOCN6nDMUvCctwEM6UrF-Y7rkwTmc5aMJSoP0M-MTpXgVdTDV8cGkQKYuZn1KSeEa6_q8pqCZ8tL6VcO08vAKecCTucU6aYy1G9xxY88kkcaFqOUTa8izdFytv3"
                />
              </div>
            </div>
            <h1 className="font-black text-7xl md:text-9xl tracking-tighter uppercase leading-[0.85] mb-6">
              Martín <br /> Soto
            </h1>
            <p className="font-[family-name:var(--font-label)] text-[#f2ca50] uppercase tracking-[0.4em] text-xs md:text-sm">
              Estrategia Digital • Arquitectura de Marca • Consultoría Elite
            </p>
            <div className="mt-20">
              <span className="material-symbols-outlined text-4xl animate-bounce opacity-30">
                expand_more
              </span>
            </div>
          </div>
        </section>

        {/* Sobre mí */}
        <section className="py-32 bg-[#0e0e0e]" id="sobre-mi">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-7">
              <h2 className="font-[family-name:var(--font-label)] text-[#f2ca50] text-xs uppercase tracking-[0.3em] mb-12">
                Filosofía
              </h2>
              <blockquote className="font-bold text-4xl md:text-6xl leading-tight text-white tracking-tighter">
                &ldquo;La excelencia no es un acto, sino un{' '}
                <span className="text-[#d4af37]">monolito</span> inamovible de
                decisiones precisas.&rdquo;
              </blockquote>
            </div>
            <div className="md:col-span-5 md:pt-24">
              <p className="text-[#d0c5af] leading-relaxed text-lg mb-8">
                Con más de una década transformando ecosistemas digitales, mi
                enfoque se aleja de las tendencias efímeras para centrarse en la
                construcción de activos soberanos.
              </p>
              <p className="text-[#d0c5af] leading-relaxed text-lg opacity-80">
                Cada proyecto es una oportunidad para redefinir el estándar de
                la industria, aplicando rigor técnico y una estética editorial
                implacable.
              </p>
            </div>
          </div>
        </section>

        {/* Empresas */}
        <section className="py-32 bg-[#131313] overflow-hidden" id="empresas">
          <div className="max-w-7xl mx-auto px-8 mb-16">
            <h2 className="font-[family-name:var(--font-label)] text-[#f2ca50] text-xs uppercase tracking-[0.3em] mb-4">
              Trayectoria
            </h2>
            <h3 className="font-black text-5xl uppercase tracking-tighter">
              Partners Estratégicos
            </h3>
          </div>
          <div className="flex overflow-x-auto hide-scrollbar gap-8 px-8 md:px-[calc((100vw-80rem)/2)] pb-12">
            {[
              {
                num: '01',
                cat: 'Fintech',
                name: 'Aureum Capital',
                desc: 'Rediseño de la arquitectura de inversión privada para el mercado europeo.',
                period: '2023 - Presente',
              },
              {
                num: '02',
                cat: 'Tech Labs',
                name: 'Nexus Systems',
                desc: 'Consultoría integral en experiencia de usuario para sistemas de IA generativa.',
                period: '2022 - 2023',
              },
              {
                num: '03',
                cat: 'Lifestyle',
                name: 'Vanguardia',
                desc: 'Identidad visual y estrategia de posicionamiento para marca de lujo.',
                period: '2021 - 2022',
              },
            ].map((c) => (
              <div
                key={c.num}
                className="flex-shrink-0 w-[80vw] md:w-[450px] bg-[#1b1b1b] p-10 border-l border-[#f2ca50]/20 hover:border-[#f2ca50] transition-colors duration-500 group"
              >
                <div className="font-[family-name:var(--font-label)] text-[#f2ca50] text-[10px] uppercase tracking-widest mb-16">
                  {c.num} / {c.cat}
                </div>
                <h4 className="font-bold text-3xl mb-4 group-hover:text-[#f2ca50] transition-colors">
                  {c.name}
                </h4>
                <p className="text-[#d0c5af] text-sm leading-relaxed mb-12">{c.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-[family-name:var(--font-label)] uppercase tracking-tighter opacity-40">
                    {c.period}
                  </span>
                  <span className="material-symbols-outlined text-[#f2ca50] opacity-0 group-hover:opacity-100 transition-opacity">
                    north_east
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contacto */}
        <section className="py-32 bg-[#0e0e0e] border-t border-[#4d4635]/10" id="contacto">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-24">
            <div>
              <h2 className="font-[family-name:var(--font-label)] text-[#f2ca50] text-xs uppercase tracking-[0.3em] mb-12">
                Contacto
              </h2>
              <h3 className="font-black text-6xl uppercase tracking-tighter leading-none mb-12">
                Iniciemos un <br /> Legado.
              </h3>
              <div className="space-y-12">
                <div className="flex flex-col gap-2">
                  <span className="text-6xl font-bold text-white tracking-tighter">12+</span>
                  <span className="font-[family-name:var(--font-label)] text-[#f2ca50] text-xs uppercase tracking-widest">
                    Años de experiencia
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-6xl font-bold text-white tracking-tighter">45</span>
                  <span className="font-[family-name:var(--font-label)] text-[#f2ca50] text-xs uppercase tracking-widest">
                    Marcas escaladas
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-[#131313] p-12 shadow-2xl">
              <form className="space-y-10">
                <div className="relative">
                  <input
                    className="peer w-full bg-transparent border-b border-[#4d4635]/30 py-4 focus:outline-none focus:border-[#f2ca50] transition-colors text-lg placeholder-transparent"
                    id="name"
                    placeholder=" "
                    type="text"
                  />
                  <label
                    className="absolute left-0 top-4 text-[#d0c5af] transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#f2ca50] uppercase font-[family-name:var(--font-label)] tracking-widest"
                    htmlFor="name"
                  >
                    Nombre Completo
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="peer w-full bg-transparent border-b border-[#4d4635]/30 py-4 focus:outline-none focus:border-[#f2ca50] transition-colors text-lg placeholder-transparent"
                    id="email"
                    placeholder=" "
                    type="email"
                  />
                  <label
                    className="absolute left-0 top-4 text-[#d0c5af] transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#f2ca50] uppercase font-[family-name:var(--font-label)] tracking-widest"
                    htmlFor="email"
                  >
                    Correo Electrónico
                  </label>
                </div>
                <div className="relative">
                  <textarea
                    className="peer w-full bg-transparent border-b border-[#4d4635]/30 py-4 focus:outline-none focus:border-[#f2ca50] transition-colors text-lg placeholder-transparent resize-none"
                    id="message"
                    placeholder=" "
                    rows={4}
                  />
                  <label
                    className="absolute left-0 top-4 text-[#d0c5af] transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#f2ca50] uppercase font-[family-name:var(--font-label)] tracking-widest"
                    htmlFor="message"
                  >
                    Mensaje
                  </label>
                </div>
                <button
                  className="w-full bg-[#f2ca50] text-[#3c2f00] py-6 font-bold uppercase tracking-[0.2em] hover:bg-[#d4af37] transition-colors duration-300"
                  type="submit"
                >
                  Enviar Propuesta
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0e0e0e] w-full py-12 px-8 border-t border-[#4d4635]/20">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto gap-8">
          <div className="text-lg font-bold text-white tracking-tight">Martín Soto</div>
          <div className="flex gap-12 font-[family-name:var(--font-label)] text-xs tracking-widest uppercase">
            <a className="text-white/40 hover:text-white transition-opacity" href="#">LinkedIn</a>
            <a className="text-white/40 hover:text-white transition-opacity" href="#">GitHub</a>
            <a className="text-white/40 hover:text-white transition-opacity" href="#">Twitter</a>
          </div>
          <div className="font-[family-name:var(--font-label)] text-[10px] tracking-widest uppercase text-white/40">
            © 2024 Martín Soto. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
