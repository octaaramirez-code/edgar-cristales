'use client'

import { useState, useEffect, useRef } from 'react'
import { profile, contact, servicios, proceso, footerNote } from './content'

// ── Reveal ────────────────────────────────────────────────────────────────────

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal${inView ? ' in' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

// ── Icons ─────────────────────────────────────────────────────────────────────

const ic = 'w-[18px] h-[18px]'
const WhatsappIcon = () => <svg className={ic} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.47 1.29 4.93L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.09c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.11.11-1.79-.11-.41-.13-.94-.31-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.15-1.53-1.15-2.92 0-1.39.72-2.07.98-2.35.26-.28.56-.35.75-.35h.54c.17 0 .4-.06.63.48.24.56.8 1.95.87 2.09.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.19-.28.37-.23.63-.14.26.09 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.68-.17 1.36z" /></svg>
const PhoneIcon = () => <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
const MailIcon = () => <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
const InstagramIcon = () => <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" stroke="none" /></svg>
const PinIcon = () => <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
const Plus = () => <svg className="svc-chevron w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden><path d="M12 5v14M5 12h14" /></svg>

// ── Logo ──────────────────────────────────────────────────────────────────────

function Logo({ light = false }: { light?: boolean }) {
  const dark = light ? '#f8f6f1' : 'var(--petrol)'
  return (
    <div className="flex items-center gap-2.5">
      <span
        className="serif flex items-center justify-center rounded-sm shrink-0"
        style={{ width: 34, height: 34, border: `1px solid var(--gold)`, color: 'var(--gold)', fontSize: 17, fontWeight: 700 }}
      >
        E
      </span>
      <div className="leading-none">
        <div className="serif font-semibold tracking-[0.01em]" style={{ fontSize: 17, color: dark }}>EDGAR</div>
        <div className="label-light" style={{ fontSize: 9.5, letterSpacing: '0.22em', marginTop: 1 }}>CRISTALES</div>
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const ids = ['servicios', 'proceso', 'contacto']
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (!els.length) return
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting)
        if (vis.length) setActive(vis[0].target.id)
      },
      { rootMargin: '-72px 0px -65% 0px', threshold: 0 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const navItems = [
    { id: 'servicios', label: 'Qué hacemos' },
    { id: 'proceso', label: 'Cómo trabajamos' },
    { id: 'contacto', label: 'Contacto' },
  ]

  return (
    <div className="min-h-[100dvh] relative overflow-hidden">
      {/* Nav */}
      <nav
        className="sticky top-0 z-50 border-b"
        style={{
          borderColor: 'var(--border)',
          backgroundColor: 'color-mix(in srgb, var(--bg) 90%, transparent)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      >
        <div className="max-w-[1180px] mx-auto px-6 h-20 flex items-center justify-between gap-6">
          <a href="#"><Logo /></a>
          <div className="hidden md:flex items-center gap-7 text-[13.5px] tracking-[0.01em] font-semibold">
            {navItems.map((n) => (
              <a key={n.id} href={`#${n.id}`} className={`dim${active === n.id ? ' nav-on' : ''}`}>{n.label}</a>
            ))}
          </div>
          <a href={contact.whatsapp.href} target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{ height: 42, padding: '0 18px', fontSize: 13.5 }}>
            <WhatsappIcon /> WhatsApp
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: 'var(--petrol)', color: '#f8f6f1' }}>
        <div className="deco-circle hidden md:block" style={{ width: 560, height: 560, top: -240, right: -200 }} />
        <div className="deco-circle hidden md:block" style={{ width: 360, height: 360, bottom: -180, right: 140 }} />

        <div className="max-w-[1180px] mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32 relative">
          <div className="rise max-w-[760px]">
            <p className="label-light mb-6">Mamparas · Espejos · Cerramientos · Balcones</p>
            <h1 className="name mb-7" style={{ color: '#f8f6f1' }}>{profile.tagline}</h1>
            <p className="lead max-w-[540px] mb-10" style={{ color: 'color-mix(in srgb, #f8f6f1 78%, transparent)' }}>{profile.subtitle}</p>

            <div className="flex flex-wrap items-center gap-3">
              <a href={contact.whatsapp.href} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                <WhatsappIcon /> Escribinos por WhatsApp
              </a>
              <a href={contact.instagram.href} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
                <InstagramIcon /> Ver Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-[1180px] mx-auto px-6 relative">

        {/* ── Qué hacemos ── */}
        <section id="servicios" className="rule py-16 md:py-24">
          <div className="grid md:grid-cols-[200px_1fr] gap-y-8 gap-x-10">
            <div>
              <Reveal>
                <p className="idx md:sticky md:top-28">01 — Qué hacemos</p>
              </Reveal>
            </div>
            <div className="space-y-3">
              {servicios.map((s, i) => (
                <Reveal key={s.slug} delay={(i % 4) * 45}>
                  <details className="svc-item card px-6 py-5 md:px-7 md:py-6">
                    <summary className="flex items-center justify-between gap-4">
                      <div>
                        <p className="h-card mb-1.5">{s.nombre}</p>
                        <p className="text-[14.5px] leading-[1.55]" style={{ color: 'var(--gray)' }}>{s.teaser}</p>
                      </div>
                      <span className="shrink-0" style={{ color: 'var(--gold)' }}><Plus /></span>
                    </summary>

                    <div className="mt-5 pt-5 rule">
                      <p className="text-[15.5px] leading-[1.75] max-w-[62ch] mb-6" style={{ color: 'var(--gray)' }}>{s.detalle}</p>

                      <p className="label mb-3" style={{ fontSize: 11.5 }}>Trabajos realizados</p>
                      {s.imagenes.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {s.imagenes.map((img) => (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img key={img.src} src={img.src} alt={img.alt} className="w-full h-full object-cover rounded-sm" style={{ aspectRatio: '4/3' }} />
                          ))}
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {[0, 1, 2, 3].map((n) => (
                            <div key={n} className="img-placeholder">Foto próximamente</div>
                          ))}
                        </div>
                      )}
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── De principio a fin ── */}
        <section id="proceso" className="rule py-16 md:py-24">
          <div className="grid md:grid-cols-[200px_1fr] gap-y-8 gap-x-10">
            <div>
              <Reveal>
                <p className="idx md:sticky md:top-28">02 — Cómo trabajamos</p>
              </Reveal>
            </div>
            <div>
              <Reveal>
                <p className="h-section mb-10 max-w-[46ch]">De principio a fin.</p>
              </Reveal>
              <div className="grid md:grid-cols-3 gap-5">
                {proceso.map((p, i) => (
                  <Reveal key={p.t} delay={i * 60}>
                    <div className="card px-6 py-7 h-full">
                      <span className="serif" style={{ fontSize: 28, color: 'var(--gold)' }}>{String(i + 1).padStart(2, '0')}</span>
                      <p className="h-card mt-3 mb-2">{p.t}</p>
                      <p className="text-[14.5px] leading-[1.6]" style={{ color: 'var(--gray)' }}>{p.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Contacto ── */}
        <section id="contacto" className="rule py-16 md:py-24">
          <div className="grid md:grid-cols-[200px_1fr] gap-y-8 gap-x-10">
            <div>
              <Reveal>
                <p className="idx md:sticky md:top-28">03 — Contacto</p>
              </Reveal>
            </div>
            <div>
              <Reveal>
                <p className="h-section mb-3">Hablemos de tu proyecto.</p>
                <p className="lead max-w-[52ch] mb-10">Contanos qué tenés en mente y coordinamos una visita para medir sin cargo.</p>
              </Reveal>

              <div className="grid md:grid-cols-2 gap-4">
                <Reveal delay={0}>
                  <a href={contact.whatsapp.href} target="_blank" rel="noopener noreferrer" className="card px-6 py-5 flex items-center gap-4 h-full">
                    <span className="shrink-0" style={{ color: 'var(--gold)' }}><WhatsappIcon /></span>
                    <div>
                      <p className="meta mb-1">WhatsApp</p>
                      <p className="text-[16px] font-semibold">{contact.whatsapp.display}</p>
                    </div>
                  </a>
                </Reveal>
                <Reveal delay={45}>
                  <a href={contact.phone.href} className="card px-6 py-5 flex items-center gap-4 h-full">
                    <span className="shrink-0" style={{ color: 'var(--gold)' }}><PhoneIcon /></span>
                    <div>
                      <p className="meta mb-1">Teléfono</p>
                      <p className="text-[16px] font-semibold">{contact.phone.display}</p>
                    </div>
                  </a>
                </Reveal>
                <Reveal delay={90}>
                  <a href={`mailto:${contact.email}`} className="card px-6 py-5 flex items-center gap-4 h-full">
                    <span className="shrink-0" style={{ color: 'var(--gold)' }}><MailIcon /></span>
                    <div>
                      <p className="meta mb-1">Email</p>
                      <p className="text-[16px] font-semibold break-all">{contact.email}</p>
                    </div>
                  </a>
                </Reveal>
                <Reveal delay={135}>
                  <a href={contact.instagram.href} target="_blank" rel="noopener noreferrer" className="card px-6 py-5 flex items-center gap-4 h-full">
                    <span className="shrink-0" style={{ color: 'var(--gold)' }}><InstagramIcon /></span>
                    <div>
                      <p className="meta mb-1">Instagram</p>
                      <p className="text-[16px] font-semibold">{contact.instagram.display}</p>
                    </div>
                  </a>
                </Reveal>
              </div>

              <Reveal delay={180}>
                <div className="flex items-center gap-3 mt-6" style={{ color: 'var(--gray)' }}>
                  <PinIcon />
                  <p className="text-[15px]">{contact.zona}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

      </main>

      <footer style={{ background: 'var(--petrol-deep)', color: 'color-mix(in srgb, #f8f6f1 70%, transparent)' }}>
        <div className="max-w-[1180px] mx-auto px-6 py-10 flex flex-wrap items-center justify-between gap-4">
          <Logo light />
          <p className="text-[13.5px]">{footerNote}</p>
        </div>
      </footer>
    </div>
  )
}
