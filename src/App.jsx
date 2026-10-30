import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const NAV = [['About','about'],['Quality','quality'],['Product','product'],['Packaging','packaging'],['Team','team'],['Contact','contact']]
const STATS = [[10000,'Happy Customers'],[90,'Skilled Employees'],[500,'Projects Completed'],[20,'Awards Achieved']]
const PACK = [['10 Litre Bucket','Ready-to-use retail and fleet packs'],['IBC Tote','1000 L intermediate bulk container'],['Storage Tank & Dispenser','Complete on-site dispensing setup'],['3 KL Tank','Compact bulk storage'],['5 KL Tank','Mid-size bulk storage'],['10 KL Tank','High-volume bulk storage']]
const QUAL = ['ISO Certified','In-house Laboratory','Batch Testing','Automated Filling','Traceable Supply','Eco-friendly Process']
const TEAM = [['Founder & Managing Director','A visionary entrepreneur committed to taking Pure-lub to new heights in DEF manufacturing and digital marketing.'],['Director – Sales & Operations','27+ years across automotive sales, service and finance, driving Pure-lub’s success with diverse industry expertise.']]

export default function App() {
  const root = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-in > *', { y: 40, opacity: 0, stagger: .12, duration: 1, ease: 'power3.out' })
      gsap.to('.hero-bg', { yPercent: 25, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } })
      gsap.to('.hero-in', { opacity: 0, y: -60, ease: 'none', scrollTrigger: { trigger: '.hero', start: '60% top', end: 'bottom top', scrub: true } })
      ScrollTrigger.batch('.rv', { start: 'top 88%', once: true,
        onEnter: els => gsap.fromTo(els, { y: 40, opacity: 0 }, { y: 0, opacity: 1, stagger: .1, duration: .8, ease: 'power2.out' }) })
      gsap.set('.rv', { opacity: 0 })
      document.querySelectorAll('.count').forEach(el => {
        const o = { v: 0 }, end = +el.dataset.n
        gsap.to(o, { v: end, duration: 2, ease: 'power1.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          onUpdate: () => (el.textContent = Math.round(o.v).toLocaleString('en-IN')) })
      })
      gsap.to('.cap-bar i', { scaleX: 1, ease: 'none', scrollTrigger: { trigger: '.cap', start: 'top 80%', end: 'top 35%', scrub: true } })
      gsap.to('.nav', { backgroundColor: 'rgba(8,22,38,.92)', scrollTrigger: { start: 60, end: 61, toggleActions: 'play none none reverse' } })
    }, root)
    return () => ctx.revert()
  }, [])
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <div ref={root}>
      <header className="nav">
        <a className="logo" onClick={() => go('top')}><b>Pure</b>-lub</a>
        <nav>{NAV.map(([n, id]) => <a key={id} onClick={() => go(id)}>{n}</a>)}</nav>
        <button className="btn sm" onClick={() => go('contact')}>Get Profile</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-bg" />
        <div className="hero-in">
          <div className="brand"><b>Pure-lub</b><span>Petrochemicals</span></div>
          <h1>Clean Solutions for Vehicles, <em>Green Solutions</em> for Environments</h1>
          <p>We are committed to driving excellence in manufacturing and delivering value to our customers.</p>
          <div className="row"><button className="btn" onClick={() => go('about')}>Read More</button><button className="btn ghost" onClick={() => go('contact')}>Contact Us</button></div>
        </div>
        <div className="scroll">Scroll</div>
      </section>

      <section id="about" className="sec">
        <div className="wrap two">
          <div className="rv"><span className="eyebrow dk">About Us</span><h2>Clean Solutions for Vehicles, Green Solutions for Environments</h2></div>
          <div className="rv">
            <p>Pure-lub has experience and expertise in manufacturing chemicals, thermoset materials and formaldehyde, with a dedicated unit for DEF manufacturing. We aspire to be a market leader in the industry by 2030.</p>
            <p>Our state-of-the-art DEF plant has a capacity of 8400 KL per month. It runs on cutting-edge technology with automatic bucket filling machines and a fully equipped laboratory for rigorous quality control — delivering high quality, environment-friendly products across locations.</p>
          </div>
        </div>
      </section>

      <section id="quality" className="sec dark">
        <div className="wrap">
          <div className="rv head"><span className="eyebrow">Commitment to Quality</span><h2>Quality is our cornerstone</h2>
            <p>Upheld through stringent processes and unwavering dedication. We ensure excellence in every product, adhering to the highest industry standards.</p></div>
          <div className="chips">{QUAL.map(q => <div className="chip rv" key={q}><span />{q}</div>)}</div>
        </div>
      </section>

      <section id="product" className="sec soft">
        <div className="wrap">
          <div className="rv head"><span className="eyebrow dk">Our Product</span><h2>DEF (Diesel Exhaust Fluid)</h2></div>
          <div className="cap rv">
            <div><small>Production Capacity</small><strong>8400 KL<span>/month</span></strong></div>
            <div><small>Automatic Bucket Filling</small><strong>2,60,000<span> buckets/month</span></strong></div>
            <div className="cap-bar"><i /></div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="wrap grid4">
          {STATS.map(([n, l]) => <div className="stat rv" key={l}><b><span className="count" data-n={n}>0</span>{n >= 90 && n !== 20 ? '+' : ''}</b><small>{l}</small></div>)}
        </div>
      </section>

      <section id="packaging" className="sec">
        <div className="wrap">
          <div className="rv head"><span className="eyebrow dk">Our Products</span><h2>Packaged Goods</h2></div>
          <div className="grid3">{PACK.map(([t, d], i) => (
            <article className="card rv" key={t}><div className="ph"><span>0{i + 1}</span></div><h3>{t}</h3><p>{d}</p></article>))}
          </div>
        </div>
      </section>

      <section id="team" className="sec soft">
        <div className="wrap">
          <div className="rv head"><span className="eyebrow dk">Our Team</span><h2>Meet the Team</h2></div>
          <div className="grid2">{TEAM.map(([r, d]) => (
            <div className="member rv" key={r}><div className="av" /><h3>{r}</h3><p>{d}</p></div>))}</div>
        </div>
      </section>

      <section id="contact" className="sec dark">
        <div className="wrap two">
          <div className="rv"><span className="eyebrow">Get in touch</span><h2>Let’s build a cleaner future together</h2>
            <p>Demo contact details — replace before launch.</p>
            <ul className="info"><li>+91 00000 00000</li><li>sales@pure-lub.example</li><li>info@pure-lub.example</li><li>Industrial Area, Your City, India</li></ul></div>
          <form className="rv form" onSubmit={e => e.preventDefault()}>
            <input placeholder="Full name" /><input placeholder="Email address" /><textarea rows="4" placeholder="Message" />
            <button className="btn">Send Message</button>
          </form>
        </div>
      </section>

      <footer><div className="wrap"><span className="logo"><b>Pure</b>-lub</span><span>© 2026 Pure-lub Petrochemicals. Demo website.</span></div></footer>
    </div>
  )
}
