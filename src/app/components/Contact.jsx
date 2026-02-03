import React from 'react'

const Contact = () => {
  const contactIcons = [
    {
      id: 1,
      href: 'https://github.com/NushK650',
      src: '/Icons/github.svg',
      alt: 'GitHub',
    },
    {
      id: 2,
      href: 'https://www.linkedin.com/in/tanush-kumar-aab68135b/details/skills/',
      src: '/Icons/linkedin.svg',
      alt: 'LinkedIn',
    },
    {
      id: 3,
      href: '/ResumeV4.pdf',
      src: '/Icons/file-user.svg',
      alt: 'Resume',
    },
  ]
  
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass-panel grid gap-10 rounded-4xl p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <div>
            <p className="chip mb-4">Contact</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Let&apos;s build something thoughtful together.
            </h2>
            <p className="mt-4 text-white/70">
              Whether you need a rebuild, a product landing page, or a front-end
              partner, I&apos;m happy to chat.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/70">
              <p>
                Email:{' '}
                <a className="text-white" href="mailto:TanushKumar650@gmail.com">
                  TanushKumar650@gmail.com
                </a>
              </p>
              <p>
                Phone:{' '}
                <a className="text-white" href="tel:+16502184892">
                  650-218-4892
                </a>
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a className="btn-primary" href="mailto:TanushKumar650@gmail.com">
                Send an Email
              </a>
              <a className="btn-ghost" href="./ResumeV4.pdf" target="_blank" rel="noreferrer">
                Download Resume
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
              Socials
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              {contactIcons.map((icon) => (
                <a
                  key={icon.id}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40"
                >
                  <img src={icon.src} alt={icon.alt} className="h-6 w-6" />
                  {icon.alt}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
