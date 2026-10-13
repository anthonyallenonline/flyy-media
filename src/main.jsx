import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Menu, X, ArrowUpRight, Play, Film, BookOpen, Sparkles, Mail, Instagram, Youtube, Facebook, Send } from 'lucide-react';
import './styles.css';

const initiatives = [
  { number: '01', title: 'The Dominic Cartoon', category: 'FAITH • FAMILY • GROWTH', description: 'A little boy with a big purpose. Follow Dominic as he discovers what it means to live by Godly principles and become the best version of himself God created him to be.', image: '/images/dominic-cartoon.jpg', instagram: 'https://www.instagram.com/', youtube: 'https://www.youtube.com/', fallback: 'A faith-filled world of learning, discovery, and growing up.' },
  { number: '02', title: 'FLYY FAITH', category: 'SCRIPTURE • TEACHING • COMMUNITY', description: 'Making the Word accessible and relevant through scripture breakdowns, biblical teaching, live conversations, and messages that point people toward Christ.', image: '/images/flyy-faith.jpg', instagram: 'https://www.instagram.com/', youtube: 'https://www.youtube.com/', fallback: 'Biblical truth for everyday life.' },
  { number: '03', title: 'Original Productions', category: 'MUSIC • TELEVISION • FILM', description: 'Meaningful content across social media, music, television, and film—created to inspire, encourage, entertain, and make every impression count.', image: '/images/original-productions.jpg', instagram: 'https://www.instagram.com/', youtube: 'https://www.youtube.com/', fallback: 'Stories that move culture and uplift the human spirit.' }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', subject: 'General inquiry', message: '' });
  const nav = [['Initiatives', '#initiatives'], ['Our Mission', '#mission'], ['What We Believe', '#beliefs'], ['Leadership', '#leadership'], ['Contact', '#contact']];
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSendError('');
    try {
      const response = await fetch('https://formsubmit.co/ajax/info@flyymedia.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: `FLYY MEDIA website inquiry: ${form.subject}`,
          inquiry_type: form.subject,
          message: form.message,
          _template: 'table',
          _captcha: 'true'
        })
      });
      const result = await response.json();
      if (!response.ok || result.success !== 'true') {
        throw new Error('Your message could not be sent right now. Please try again or email info@flyymedia.com directly.');
      }
      setSent(true);
    } catch (error) {
      setSendError(error.message || 'Something went wrong. Please try again or email info@flyymedia.com directly.');
    } finally {
      setSending(false);
    }
  };
  return <>
    <header className="header">
      <a href="#home" className="brand" aria-label="FLYY MEDIA home"><img src="/images/flyy-media-flat.png" alt="FLYY MEDIA logo" /></a>
      <nav className={menuOpen ? 'nav open' : 'nav'}>{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
      <a className="header-cta" href="#contact">LET'S CONNECT <ArrowUpRight size={15}/></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-glow"></div><div className="hero-copy">
          <p className="eyebrow"><span></span> FAITH. PURPOSE. POSITIVE MEDIA.</p>
          <h1>MEDIA THAT<br/><em>MOVES</em> THE<br/>WORLD FOR GOOD.</h1>
          <p className="hero-text">We create content that inspires people to become who God created them to be—from a moment that makes you smile to a message that leads you to Jesus Christ.</p>
          <div className="hero-actions"><a className="btn btn-red" href="#initiatives">EXPLORE OUR WORLD <ArrowUpRight size={17}/></a><a className="text-link" href="#mission"><span className="play-circle"><Play size={13} fill="currentColor"/></span> OUR PURPOSE</a></div>
          <div className="hero-meta"><span>CREATED WITH PURPOSE</span><span className="meta-line"></span><span>BUILT ON THE WORD</span></div>
        </div>
        <div className="hero-art"><div className="art-ring"></div><img className="logo-3d" src="/images/flyy-media-3d.png" alt="FLYY MEDIA three-dimensional logo"/><div className="art-caption"><span>01 / THE FLYY STANDARD</span><span>BRIGHTENING THE WORLD</span></div></div>
        <div className="hero-index">FM<span> / </span>001</div>
      </section>

      <section className="ticker" aria-label="Our purpose"><div>FAITH <b>✳</b> PURPOSE <b>✳</b> POSITIVE MEDIA <b>✳</b> KINGDOM IMPACT <b>✳</b> FAITH <b>✳</b> PURPOSE <b>✳</b> POSITIVE MEDIA <b>✳</b> KINGDOM IMPACT <b>✳</b></div></section>

      <section className="section intro" id="mission">
        <div className="section-label"><span>01</span> / WHY WE EXIST</div><div className="intro-grid"><h2>EVERY<br/>IMPRESSION<br/><span>MATTERS.</span></h2><div className="intro-copy"><p className="lead">Media has the power to shape minds, influence culture, and transform lives. We believe that power should be used for good.</p><p>FLYY MEDIA exists to bring light into a world that needs hope. Through meaningful storytelling, biblical truth, and creative excellence, we create work that uplifts the human spirit and shares the love of Christ with audiences everywhere.</p><a className="under-link" href="#beliefs">THE VALUES BEHIND OUR WORK <ArrowUpRight size={16}/></a></div></div>
      </section>

      <section className="section initiatives" id="initiatives"><div className="section-top"><div><div className="section-label"><span>02</span> / WHAT WE CREATE</div><h2>THREE INITIATIVES.<br/><span>ONE PURPOSE.</span></h2></div><p>Different formats. Different audiences. One commitment to content that makes a meaningful difference.</p></div>
        <div className="initiative-grid">{initiatives.map((item, i) => <article className="initiative-card" key={item.number}><div className={`card-image image-${i}`}><img className="card-photo" src={item.image} alt={item.title} loading="lazy"/><div className="card-image-overlay"></div><span className="card-number">{item.number}</span><span className="card-icon">{i === 0 ? <Sparkles/> : i === 1 ? <BookOpen/> : <Film/>}</span><div className="image-note">{item.fallback}</div></div><div className="card-content"><p className="card-category">{item.category}</p><h3>{item.title}</h3><p>{item.description}</p><div className="initiative-socials" aria-label={`${item.title} social media links`}><a className="initiative-social-link" href={item.instagram} target="_blank" rel="noreferrer" aria-label={`${item.title} on Instagram`}><Instagram size={17}/> <span>INSTAGRAM</span> <ArrowUpRight size={14}/></a><a className="initiative-social-link" href={item.youtube} target="_blank" rel="noreferrer" aria-label={`${item.title} on YouTube`}><Youtube size={17}/> <span>YOUTUBE</span> <ArrowUpRight size={14}/></a></div></div></article>)}</div>
      </section>

      <section className="beliefs" id="beliefs"><div className="beliefs-bg"></div><div className="beliefs-content"><div className="section-label"><span>03</span> / WHAT WE BELIEVE</div><p className="beliefs-kicker">THE FOUNDATION IS THE WORD.</p><h2>TRUTH ISN'T<br/>A TREND.</h2><p className="beliefs-text">Our work is rooted in the truth of God's Word and the good news of Jesus Christ. We believe creativity can serve a higher purpose—and that what we make should reflect faith, integrity, hope, and love.</p><div className="scripture">“Let your light so shine before men...” <span>MATTHEW 5:16 · KJV</span></div></div><div className="beliefs-image"><img src="/images/bible-sunset.png" alt="A Holy Bible resting on a rock at sunrise" loading="lazy"/></div></section>

      <section className="section leadership" id="leadership"><div className="leadership-image"><img className="founder-portrait" src="/images/anthony-allen.png" alt="Anthony Allen, founder of FLYY MEDIA" /><div className="portrait-tag">VISION WITH PURPOSE <span>✳</span></div></div><div className="leadership-copy"><div className="section-label"><span>04</span> / LEADERSHIP</div><h2>BUILT ON<br/>BELIEF.<br/><span>LED WITH</span><br/><span>PURPOSE.</span></h2><p>FLYY MEDIA is driven by a belief that media can do more than entertain. It can teach, encourage, shift perspectives, strengthen families, and point people toward God.</p><p className="founder-name">ANTHONY ALLEN <span>FOUNDER · FLYY MEDIA</span></p><a className="under-link" href="#contact">CONNECT WITH OUR TEAM <ArrowUpRight size={16}/></a></div></section>

      <section className="mission-band"><div className="mission-symbol">✳</div><p>FROM ENTERTAINMENT THAT MAKES YOU SMILE<br/>TO MESSAGES THAT LEAD YOU TO <span>SALVATION.</span></p><span className="band-note">MAKE EVERY IMPRESSION COUNT.</span></section>

      <section className="section contact" id="contact"><div className="contact-left"><div className="section-label"><span>05</span> / START A CONVERSATION</div><h2>LET'S MAKE<br/>SOMETHING<br/><span>MATTER.</span></h2><p>Have a question, partnership idea, media opportunity, or a story to share? We'd like to hear from you.</p><div className="contact-email"><Mail size={18}/><a href="mailto:info@flyymedia.com">INFO@FLYYMEDIA.COM</a></div><div className="social-links"><a href="#contact" aria-label="Instagram"><Instagram/></a><a href="#contact" aria-label="YouTube"><Youtube/></a><a href="#contact" aria-label="Facebook"><Facebook/></a></div></div>
        <form className="contact-form" onSubmit={submit}><h3>GET IN TOUCH</h3><p>Fields marked * are required.</p>{sent ? <div className="success"><Send size={25}/><strong>Thanks for reaching out.</strong><span>Your message has been sent to FLYY MEDIA. Thank you for reaching out—we’ll be in touch if a response is needed.</span><button type="button" className="under-link" onClick={() => setSent(false)}>SEND ANOTHER MESSAGE</button></div> : <><label>YOUR NAME *<input name="name" value={form.name} onChange={update} required placeholder="Full name"/></label><label>EMAIL ADDRESS *<input name="email" type="email" value={form.email} onChange={update} required placeholder="you@example.com"/></label><label>WHAT'S THIS ABOUT?<select name="subject" value={form.subject} onChange={update}><option>General inquiry</option><option>Partnership</option><option>Media / press</option><option>FLYY FAITH</option><option>The Dominic Cartoon</option><option>Production collaboration</option></select></label><label>YOUR MESSAGE *<textarea name="message" value={form.message} onChange={update} required rows="4" placeholder="Tell us a little about it..."></textarea></label><button className="btn btn-red submit-btn" type="submit" disabled={sending}>{sending ? 'SENDING...' : 'SEND MESSAGE'} {!sending && <ArrowUpRight size={17}/>}</button>{sendError && <p className="form-error" role="alert">{sendError}</p>}</>}</form>
      </section>
    </main>
    <footer className="footer"><a href="#home" className="footer-logo"><img src="/images/flyy-media-flat.png" alt="FLYY MEDIA"/></a><p>BRIGHTENING THE WORLD THROUGH<br/>FAITH, PURPOSE, AND POSITIVE MEDIA.</p><div className="footer-bottom"><span>© {new Date().getFullYear()} FLYY MEDIA. ALL RIGHTS RESERVED.</span><a href="#home">BACK TO TOP ↑</a><span>MADE WITH PURPOSE.</span></div></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App/>);
