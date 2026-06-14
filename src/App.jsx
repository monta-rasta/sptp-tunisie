import { useMemo, useState, useEffect, useRef } from 'react'
//import heroPainter from './assets/hero-painter.png'
// Missing asset placeholders. Add these files to src/assets when ready:
// hero-wallpaper.jpg, hero-slide-1.jpg, hero-slide-2.jpg, hero-slide-3.jpg, hero-slide-4.jpg, hero-slide-5.jpg
import heroWallpaper from './assets/hero-painter.png'
import heroSlide1 from './assets/slide1.jpg'
import heroSlide2 from './assets/slide2.jpg'
import heroSlide3 from './assets/slide3.jpg'
// import heroSlide4 from './assets/hero-slide-4.jpg'
// import heroSlide5 from './assets/hero-slide-5.jpg'
import teamPreparation from './assets/team-preparation.png'
import projectSchool from './assets/project-school.png'

const phoneNumber = '+216 00 000 000'
const whatsappUrl =
  'https://wa.me/21600000000?text=Bonjour%2C%20je%20souhaite%20demander%20un%20devis%20gratuit%20pour%20un%20projet%20de%20peinture.'

const heroWallpaperOpacity = 0.42
const heroFadeDuration = /*950*/ 550
const heroPhotoMotionSpeed = /*18*/ 60
const heroPhotoEntranceDelayMs = /*140*/ 70

const navLinks = [
  ['Accueil', '#accueil'],
  ['Services', '#services'],
  ['Réalisations', '#realisations'],
  ['À propos', '#apropos'],
  ['Avis', '#avis'],
  ['Contact', '#contact'],
]

function Icon({ name, className = 'h-6 w-6' }) {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  const paths = {
    check: <path d="m5 12 4 4L19 6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    sparkle: (
      <>
        <path d="M12 3l1.7 5.1L19 10l-5.3 1.9L12 17l-1.7-5.1L5 10l5.3-1.9L12 3Z" />
        <path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" />
      </>
    ),
    brush: (
      <>
        <path d="M14 4 20 10 10 20H4v-6L14 4Z" />
        <path d="m13 5 6 6" />
      </>
    ),
    home: (
      <>
        <path d="M3 11 12 4l9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M10 20v-6h4v6" />
      </>
    ),
    building: (
      <>
        <path d="M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16" />
        <path d="M17 9h2a1 1 0 0 1 1 1v11" />
        <path d="M8 7h1M12 7h1M8 11h1M12 11h1M8 15h1M12 15h1M3 21h18" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 20 6v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6l8-3Z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z" />
    ),
    mail: (
      <>
        <path d="M4 4h16v16H4z" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    map: (
      <>
        <path d="M12 21s7-5.2 7-11a7 7 0 0 0-14 0c0 5.8 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="M6 6l12 12" />
        <path d="M18 6 6 18" />
      </>
    ),
  }

  return <svg {...common}>{paths[name]}</svg>
}

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/45 bg-cream/90 backdrop-blur-xl">
      <nav className="container-page flex h-20 items-center justify-between px-5 sm:px-6 lg:px-8" aria-label="Navigation principale">
        <a href="#accueil" className="flex items-center gap-3 font-bold text-navy" aria-label="Nom du Peintre - Accueil">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy text-gold shadow-soft">
            <Icon name="brush" className="h-5 w-5" />
          </span>
          <span className="text-lg">SPTP Tunisie</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-semibold text-navy/75 transition hover:text-gold">
              {label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a className="btn-primary" href="#contact">
            Demander un devis
          </a>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 bg-white text-navy lg:hidden"
          type="button"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-navy/10 bg-cream px-5 py-4 shadow-soft lg:hidden">
          <div className="container-page grid gap-2">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-xl px-4 py-3 font-semibold text-navy transition hover:bg-white"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
            <a className="btn-primary mt-2 w-full" href="#contact" onClick={() => setOpen(false)}>
              Demander un devis
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

/*
function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-cream pt-20">
      <div className="container-page grid min-h-[calc(100vh-80px)] items-center gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
        <div className="fade-up">
          <span className="eyebrow">Peintre professionnel | Devis peinture gratuit</span>
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Peinture Professionnelle pour Maisons, Écoles et Espaces Professionnels
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal/75 sm:text-xl">
            Un travail propre, soigné et durable pour transformer vos murs avec une finition de qualité.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Demander un devis gratuit
            </a>
            <a className="btn-secondary" href="#realisations">
              Voir nos réalisations
            </a>
          </div>
          <div className="mt-7 flex flex-wrap gap-3 text-sm font-bold text-navy">
            {['Devis gratuit', 'Travail propre', 'Respect des délais'].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                <Icon name="check" className="h-4 w-4 text-gold" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-soft lg:min-h-[580px]" aria-label="Intérieur rénové avec peinture professionnelle">
          <img
            src={heroPainter}
            alt="Peintre professionnel travaillant dans un intérieur moderne rénové"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/72 via-navy/22 to-gold/12" />
          <div className="absolute bottom-7 left-7 right-7 rounded-3xl bg-white/90 p-5 shadow-soft backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Finition premium</p>
            <p className="mt-2 text-2xl font-black text-navy">Murs propres, lignes nettes, chantier protégé.</p>
          </div>
          <div className="absolute right-8 top-8 rounded-full bg-gold px-5 py-3 text-sm font-black text-navy shadow-glow">
            Réponse rapide
          </div>
        </div>
      </div>
    </section>
  )
}
*/

// function Hero() {
//   const heroPhotos = [/*heroWallpaper, */heroSlide1, heroSlide2, heroSlide3]
//
//   return (
//     <section
//       id="accueil"
//       className="relative overflow-hidden bg-cream bg-cover bg-center bg-no-repeat pt-20"
//       style={{ backgroundImage: `url(${heroWallpaper})` }}
//     >
//       <div className="absolute inset-0 bg-navy" style={{ opacity: heroWallpaperOpacity }} aria-hidden="true" />
//       
//       <div className="relative container-page grid min-h-[calc(100vh-80px)] gap-10 px-5 py-14 sm:px-6 lg:px-8 lg:py-20"
//         style={{ '--hero-fade-duration': `${heroFadeDuration}ms` }}
//       >
//         <div className="hero-fade z-10">
//           <div className="mx-auto max-w-4xl text-center lg:text-left">
//             <span className="eyebrow">Peintre professionnel | Devis peinture gratuit</span>
//             <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
//               Peinture professionnelle pour maisons, écoles et espaces professionnels
//             </h1>
//             <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
//               Un travail propre, soigné et durable pour transformer vos murs avec une finition premium.
//             </p>
//           </div>
//
//           <div className="relative mt-10 lg:max-w-6xl lg:mx-auto">
//             <div className="absolute inset-0 bg-gradient-to-br from-navy/40 via-transparent to-gold/20" aria-hidden="true" />
//             <div className="bleed-mobile">
//               <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 shadow-soft backdrop-blur-xl px-4 py-6 sm:px-6">
//               <div
//                 className="hero-slider mx-auto flex gap-6"
//                 style={{
//                   '--hero-slide-motion': `${heroPhotoMotionSpeed}s`,
//                   animation: `slideLeft ${heroPhotoMotionSpeed}s linear infinite`,
//                   willChange: 'transform',
//                 }}
//               >
//                 {heroPhotos.concat(heroPhotos).map((photo, index) => {
//                   const displayIndex = index % heroPhotos.length
//                   return (
//                     <div
//                       key={`hero-slide-${index}`}
//                       className="hero-slide min-w-[200px] sm:min-w-[260px] md:min-w-[300px] lg:min-w-[360px] max-w-[420px] overflow-hidden rounded-[1.8rem] bg-slate-900/20 shadow-soft"
//                       style={{ animationDelay: `${displayIndex * heroPhotoEntranceDelayMs}ms` }}
//                     >
//                       <img
//                         src={photo}
//                         alt={`Projet peinture ${displayIndex + 1}`}
//                         className="h-[180px] sm:h-[240px] md:h-[300px] lg:h-[360px] xl:h-[420px] w-full object-cover"
//                         loading="lazy"
//                       />
//                     </div>
//                   )
//                 })}
//               </div>
//               </div>
//             </div>
//           </div>
//
//           <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center lg:flex-row lg:justify-start lg:text-left">
//             <a className="btn-primary" href="#contact">
//               Demander un devis gratuit
//             </a>
//             <a className="btn-secondary" href="#realisations">
//               Voir nos réalisations
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
//}

function Hero() {
  const heroBackgrounds = [heroSlide1, heroSlide2, heroSlide3]
  const slideDisplayMs = 3000 // show each slide for 3000ms
  const slideTransitionMs = 800 // transition duration
  const totalPerSlide = slideDisplayMs + slideTransitionMs
  const n = heroBackgrounds.length

  const [index, setIndex] = useState(0)
  const sliderRef = useRef(null)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => i + 1), totalPerSlide)
    return () => clearInterval(id)
  }, [])

  // when we reach the duplicated set (index === n), jump back to 0 without transition
  useEffect(() => {
    const el = sliderRef.current
    if (!el) return

    function onTransitionEnd() {
      if (index === n) {
        el.style.transition = 'none'
        setIndex(0)
        // force reflow then restore transition
        requestAnimationFrame(() => requestAnimationFrame(() => {
          el.style.transition = `transform ${slideTransitionMs}ms ease`
        }))
      }
    }

    el.addEventListener('transitionend', onTransitionEnd)
    return () => el.removeEventListener('transitionend', onTransitionEnd)
  }, [index, n])

  // compute transform
  const translate = -index * 100

  return (
    <section id="accueil" className="relative overflow-hidden bg-navy text-white pt-20">
      <div className="absolute inset-0">
        <div
          ref={sliderRef}
          className="hero-background-slider absolute inset-0 flex"
          style={{
            transform: `translateX(${translate}vw)`,
            transition: `transform ${slideTransitionMs}ms ease`,
          }}
          aria-hidden="true"
        >
          {heroBackgrounds.concat(heroBackgrounds).map((photo, idx) => (
            <div
              key={`hero-bg-${idx}`}
              className="hero-background-panel min-w-screen h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${photo})` }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/60 to-transparent" />
      </div>

      <div className="relative container-page mx-auto flex min-h-[calc(100vh-80px)] items-center px-5 py-24 sm:px-6 lg:px-8">
        <div className="relative z-20 mx-auto max-w-4xl text-center lg:text-left hero-content" style={{ animationDelay: `200ms`, animationDuration: `900ms` }}>
          <span className="eyebrow">Peintre professionnel | Devis peinture gratuit</span>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Peinture professionnelle pour maisons, écoles et espaces professionnels
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
            Un travail propre, soigné et durable pour transformer vos murs avec une finition premium.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:justify-center lg:justify-start">
            <a className="btn-primary" href="#contact">
              Demander un devis gratuit
            </a>
            <a className="btn-secondary" href="#realisations">
              Voir nos réalisations
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustBadges() {
  const badges = [
    ['sparkle', 'Travail propre et soigné', 'Un chantier organisé avec des finitions nettes.'],
    ['check', 'Devis gratuit', 'Une estimation claire avant le démarrage.'],
    ['clock', 'Respect des délais', 'Une intervention planifiée et maîtrisée.'],
    ['shield', 'Finition professionnelle', 'Des matériaux adaptés et un rendu durable.'],
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-page grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {badges.map(([icon, title, text]) => (
          <article key={title} className="premium-card p-6">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cream text-gold">
              <Icon name={icon} />
            </div>
            <h2 className="text-lg font-black text-navy">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-charcoal/70">{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function SectionHeading({ eyebrow, title, subtitle, light = false }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`text-3xl font-black tracking-tight sm:text-4xl ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {subtitle && <p className={`mt-4 text-lg leading-8 ${light ? 'text-white/75' : 'text-charcoal/70'}`}>{subtitle}</p>}
    </div>
  )
}

function Services() {
  const services = [
    ['brush', 'Peinture intérieure', 'Murs, plafonds, chambres, salons et couloirs avec un rendu propre.'],
    ['home', 'Peinture extérieure', 'Façades, murs extérieurs et surfaces exposées avec peinture résistante.'],
    ['home', 'Peinture maisons et appartements', 'Rénovation peinture complète pour logements habités ou neufs.'],
    ['building', 'Peinture écoles', 'Interventions soignées pour salles de classe, couloirs et espaces communs.'],
    ['building', 'Peinture bureaux et commerces', 'Rafraîchissement professionnel avec planning adapté à votre activité.'],
    ['shield', 'Préparation des murs', 'Ponçage, nettoyage, protection et préparation avant application.'],
    ['sparkle', 'Réparation fissures et enduit', 'Traitement des défauts, enduit et finition lisse durable.'],
    ['brush', 'Peinture décorative', 'Couleurs, effets élégants et conseils pour valoriser vos espaces.'],
  ]

  return (
    <section id="services" className="section-padding bg-cream">
      <div className="container-page">
        <SectionHeading
          eyebrow="Peinture maison, école et bureaux"
          title="Nos Services de Peinture"
          subtitle="Des solutions adaptées aux particuliers, écoles et professionnels."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(([icon, title, text]) => (
            <article key={title} className="premium-card group p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-gold transition group-hover:scale-105">
                <Icon name={icon} />
              </div>
              <h3 className="text-xl font-black text-navy">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-charcoal/70">{text}</p>
              <a href="#contact" className="mt-5 inline-flex font-bold text-gold hover:text-navy">
                Demander ce service
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="apropos" className="section-padding bg-white">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-soft">
          <img
            src={teamPreparation}
            alt="Équipe de peintres préparant une pièce avant les travaux de peinture"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/86 via-navy/20 to-transparent" />
          <div className="absolute inset-x-6 bottom-6 flex min-h-[180px] items-end rounded-[1.5rem] border border-white/15 bg-navy/70 p-6 text-white backdrop-blur-sm">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Photo équipe</p>
              <p className="mt-2 max-w-sm text-2xl font-black">Peintre sérieux, chantier protégé et finition maîtrisée.</p>
            </div>
          </div>
        </div>
        <div>
          <span className="eyebrow">À propos</span>
          <h2 className="text-3xl font-black tracking-tight text-navy sm:text-4xl">Un Peintre Sérieux pour un Résultat Durable</h2>
          <p className="mt-5 text-lg leading-8 text-charcoal/75">
            Nous accompagnons les particuliers, les écoles et les professionnels dans leurs projets de peinture avec sérieux,
            précision et respect des délais. Chaque chantier est préparé avec soin afin de garantir un résultat propre,
            esthétique et durable.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {['+X projets réalisés', 'Finition soignée', 'Clients satisfaits'].map((stat) => (
              <div key={stat} className="rounded-2xl bg-cream p-5 text-center">
                <p className="text-xl font-black text-navy">{stat}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function BeforeAfter() {
  const items = [
    'Rénovation d’une salle de classe',
    'Peinture intérieure maison',
    'Façade extérieure rénovée',
  ]

  return (
    <section className="section-padding bg-cream">
      <div className="container-page">
        <SectionHeading title="Avant / Après" subtitle="Une rénovation peinture visible, propre et valorisante." />
        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((caption, index) => (
            <article key={caption} className="premium-card overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="min-h-56 bg-[linear-gradient(135deg,#d5d0c4,#fff8ec)] p-4">
                  <span className="rounded-full bg-navy px-3 py-1 text-xs font-bold text-white">Avant</span>
                </div>
                <div className="min-h-56 bg-[linear-gradient(135deg,#fff,#ead8b8)] p-4">
                  <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy">Après</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-black text-navy">{caption}</h3>
                <p className="mt-2 text-sm text-charcoal/65">Projet #{index + 1} avec préparation, protection et finition.</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Portfolio() {
  const [active, setActive] = useState('Tout')
  const filters = ['Tout', 'Maisons', 'Écoles', 'Bureaux', 'Intérieur', 'Extérieur']
  const projects = [
    ['Maisons', 'Intérieur', 'Peinture intérieure d’une maison', 'Ville / Quartier', 'Murs et plafonds rénovés avec finition satinée.'],
    ['Écoles', 'Intérieur', 'Rénovation d’une école', 'Ville / Quartier', 'Salles de classe rafraîchies avec peinture lavable.'],
    ['Extérieur', 'Maisons', 'Peinture extérieure d’une façade', 'Ville / Quartier', 'Façade protégée et couleur moderne durable.'],
    ['Bureaux', 'Intérieur', 'Rafraîchissement d’un bureau', 'Ville / Quartier', 'Intervention rapide pour un espace professionnel propre.'],
    ['Maisons', 'Extérieur', 'Villa rénovée', 'Ville / Quartier', 'Peinture extérieure et détails de finition élégants.'],
    ['Bureaux', 'Intérieur', 'Commerce modernisé', 'Ville / Quartier', 'Couleurs sobres et ambiance plus accueillante.'],
  ]
  const visible = useMemo(
    () => projects.filter((project) => active === 'Tout' || project.includes(active)),
    [active],
  )

  return (
    <section id="realisations" className="section-padding bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Nos réalisations"
          title="Nos Réalisations"
          subtitle="Découvrez quelques exemples de peinture intérieure, extérieure, écoles, bureaux et maisons."
        />
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                active === filter ? 'bg-navy text-white shadow-soft' : 'bg-cream text-navy hover:bg-sand'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map(([catA, catB, title, location, text], index) => (
            <article key={title} className="premium-card overflow-hidden">
              <div className="relative min-h-64 overflow-hidden">
                {index === 1 ? (
                  <img
                    src={projectSchool}
                    alt="Espace rénové après peinture professionnelle"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,#111827,#c99a2e_58%,#fbf4e7)]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/45 to-transparent" />
                <div className="relative p-5">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-navy">{catA}</span>
                  <span className="ml-2 rounded-full bg-white/70 px-3 py-1 text-xs font-bold text-navy">{catB}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-navy">{title}</h3>
                <p className="mt-2 text-sm font-bold text-gold">{location}</p>
                <p className="mt-3 text-sm leading-6 text-charcoal/70">{text}</p>
                <a href="#contact" className="mt-5 inline-flex font-bold text-navy hover:text-gold">
                  Projet similaire
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Branding() {
  const brands = [
    'Société A',
    'Entreprise B',
    'Collège Sainte-Marie',
    'Clinique Du Nord',
    'Hôtel Central',
    'Magasin Déco',
  ]

  const speed = 22 // seconds, editable

  return (
    <section aria-label="Références" className="py-8 bg-branding-stars">
      <div className="container-page">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="text-xl font-black text-white">Nos Références</h3>
          <p className="mt-2 text-sm text-white/70">Quelques clients et établissements qui nous ont fait confiance.</p>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl">
          <div
            className="brand-strip flex items-center gap-8 px-6 py-8"
            style={{ '--brand-slide-duration': `${speed}s`, animation: `brandSlide ${speed}s linear infinite` }}
            aria-hidden="false"
          >
            {brands.concat(brands).map((name, i) => (
              <div key={`brand-${i}`} className="brand-item flex-shrink-0 text-center opacity-95">
                <div className="brand-frame mx-auto px-6 py-4 rounded-[1.2rem] bg-white/5 border border-white/8 shadow-inner backdrop-blur-sm">
                  <span className="text-sm font-black tracking-widest text-white uppercase">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    ['1', 'Demande de devis', 'Vous envoyez votre demande par WhatsApp ou formulaire.'],
    ['2', 'Estimation du projet', 'Nous évaluons les surfaces, délais et matériaux nécessaires.'],
    ['3', 'Préparation et protection', 'Meubles, sols et murs sont protégés avant intervention.'],
    ['4', 'Peinture et finition', 'Application soignée et contrôle final du résultat.'],
  ]

  return (
    <section className="section-padding bg-cream">
      <div className="container-page">
        <SectionHeading title="Comment Ça Marche ?" subtitle="Un parcours simple pour obtenir rapidement votre devis peinture gratuit." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([number, title, text]) => (
            <article key={title} className="premium-card p-6">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-2xl font-black text-navy">
                {number}
              </div>
              <h3 className="text-xl font-black text-navy">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-charcoal/70">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  const advantages = [
    'Travail propre',
    'Protection des meubles et sols',
    'Peinture de qualité',
    'Respect des délais',
    'Prix clair',
    'Résultat durable',
  ]

  return (
    <section className="section-padding bg-navy">
      <div className="container-page">
        <SectionHeading light title="Pourquoi Nous Choisir ?" subtitle="Un service de peintre professionnel pensé pour rassurer et simplifier votre projet." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => (
            <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/8 p-5 text-white">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-navy">
                <Icon name="check" className="h-5 w-5" />
              </span>
              <p className="text-lg font-black">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const testimonials = [
    ['Client maison', 'Travail très propre et professionnel. Le résultat est excellent.'],
    ['Responsable école', 'Service sérieux, rapide et finition impeccable.'],
    ['Propriétaire appartement', 'Très satisfait du travail réalisé dans notre maison.'],
  ]

  return (
    <section id="avis" className="section-padding bg-white">
      <div className="container-page">
        <SectionHeading title="Ce Que Disent Nos Clients" subtitle="Des avis simples, rassurants et centrés sur la qualité du travail." />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map(([name, quote]) => (
            <article key={name} className="premium-card p-7">
              <div className="mb-5 flex text-xl text-gold" aria-label="5 étoiles">
                ★★★★★
              </div>
              <p className="text-lg font-semibold leading-8 text-navy">“{quote}”</p>
              <p className="mt-5 font-black text-gold">{name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-page overflow-hidden rounded-[2rem] bg-navy p-8 text-center shadow-soft sm:p-12 lg:p-16">
        <span className="eyebrow bg-white/10 text-gold">Réponse rapide</span>
        <h2 className="mx-auto max-w-3xl text-3xl font-black tracking-tight text-white sm:text-5xl">Vous avez un projet de peinture ?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/75">
          Contactez-nous aujourd’hui pour recevoir un devis gratuit et rapide.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a className="btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            Demander un devis sur WhatsApp
          </a>
          <a className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-navy" href="#contact">
            Remplir le formulaire
          </a>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const infos = [
    ['phone', 'Téléphone', phoneNumber],
    ['phone', 'WhatsApp', phoneNumber],
    ['mail', 'Email', 'contact@exemple.com'],
    ['map', 'Zone d’intervention', 'Ville et alentours'],
  ]

  function handleQuoteSubmit(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const message = [
      'Bonjour, je souhaite demander un devis peinture gratuit.',
      `Nom: ${form.get('name') || '-'}`,
      `Téléphone: ${form.get('phone') || '-'}`,
      `Projet: ${form.get('project') || '-'}`,
      `Ville: ${form.get('city') || '-'}`,
      `Message: ${form.get('message') || '-'}`,
    ].join('\n')

    window.open(`https://wa.me/21600000000?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Contactez-Nous"
          subtitle="Décrivez votre projet de peinture maison, école, appartement ou bureaux. Nous vous répondons rapidement."
        />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="premium-card grid gap-5 p-6 sm:p-8" aria-label="Formulaire de demande de devis peinture" onSubmit={handleQuoteSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 font-bold text-navy">
                Nom complet
                <input className="rounded-2xl border border-navy/10 bg-cream px-4 py-3 font-medium outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15" type="text" name="name" placeholder="Votre nom" />
              </label>
              <label className="grid gap-2 font-bold text-navy">
                Numéro de téléphone
                <input className="rounded-2xl border border-navy/10 bg-cream px-4 py-3 font-medium outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15" type="tel" name="phone" placeholder="+216 ..." />
              </label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 font-bold text-navy">
                Type de projet
                <select className="rounded-2xl border border-navy/10 bg-cream px-4 py-3 font-medium outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15" name="project">
                  <option>Peinture maison</option>
                  <option>Peinture appartement</option>
                  <option>Peinture école</option>
                  <option>Peinture bureaux</option>
                  <option>Peinture commerce</option>
                  <option>Rénovation peinture</option>
                </select>
              </label>
              <label className="grid gap-2 font-bold text-navy">
                Ville
                <input className="rounded-2xl border border-navy/10 bg-cream px-4 py-3 font-medium outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15" type="text" name="city" placeholder="Votre ville" />
              </label>
            </div>
            <label className="grid gap-2 font-bold text-navy">
              Message
              <textarea className="min-h-36 rounded-2xl border border-navy/10 bg-cream px-4 py-3 font-medium outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15" name="message" placeholder="Surface, type de peinture, intérieur ou extérieur..." />
            </label>
            <button className="btn-primary w-full sm:w-auto" type="submit">
              Envoyer la demande
            </button>
          </form>

          <div className="grid gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {infos.map(([icon, label, value]) => (
                <article key={label} className="rounded-2xl bg-cream p-5">
                  <Icon name={icon} className="mb-4 h-6 w-6 text-gold" />
                  <h3 className="font-black text-navy">{label}</h3>
                  <p className="mt-1 text-sm font-semibold text-charcoal/70">{value}</p>
                </article>
              ))}
            </div>
            <div className="flex min-h-72 items-center justify-center rounded-[2rem] bg-navy p-8 text-center text-white shadow-soft">
              <div>
                <Icon name="map" className="mx-auto mb-4 h-10 w-10 text-gold" />
                <p className="text-2xl font-black">Google Maps</p>
                <p className="mt-2 text-white/70">Emplacement ou zone d’intervention à intégrer ici.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-charcoal px-5 py-12 text-white sm:px-6 lg:px-8">
      <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold text-navy">
              <Icon name="brush" className="h-5 w-5" />
            </span>
            <p className="text-xl font-black">Nom du Peintre</p>
          </div>
          <p className="mt-4 max-w-sm leading-7 text-white/70">
            Peintre professionnel pour peinture maison, appartements, écoles, bureaux, commerces, intérieur et extérieur.
          </p>
          <a className="btn-primary mt-6" href={whatsappUrl} target="_blank" rel="noreferrer">
            Devis peinture gratuit
          </a>
        </div>
        <FooterList title="Liens rapides" items={navLinks.map(([label, href]) => [label, href])} />
        <FooterList
          title="Services"
          items={[
            ['Peinture intérieure', '#services'],
            ['Peinture extérieure', '#services'],
            ['Rénovation peinture', '#services'],
            ['Peintre pour écoles', '#services'],
          ]}
        />
        <div>
          <h3 className="mb-4 font-black text-gold">Contact</h3>
          <p className="text-white/70">{phoneNumber}</p>
          <p className="mt-2 text-white/70">contact@exemple.com</p>
          <div className="mt-5 flex gap-3">
            {['f', 'in', 'ig'].map((item) => (
              <a key={item} href="#contact" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-black transition hover:bg-gold hover:text-navy" aria-label={`Réseau social ${item}`}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container-page mt-10 border-t border-white/10 pt-6 text-sm text-white/55">
        © {new Date().getFullYear()} Nom du Peintre. Tous droits réservés.
      </div>
    </footer>
  )
}

function FooterList({ title, items }) {
  return (
    <div>
      <h3 className="mb-4 font-black text-gold">{title}</h3>
      <ul className="grid gap-3">
        {items.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="text-white/70 transition hover:text-gold">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow transition hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
      aria-label="Contacter le peintre sur WhatsApp"
    >
      <Icon name="phone" className="h-6 w-6" />
    </a>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <Services />
        <About />
        <BeforeAfter />
        <Portfolio />
        <Branding />
        <Process />
        <WhyChooseUs />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
