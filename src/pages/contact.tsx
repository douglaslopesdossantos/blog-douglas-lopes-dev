import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'
import YouTube from '../components/svgs/youtube'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://x.com/DouglasLopesDS',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/douglaslopesdossantos',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/douglas-lopes-dos-santos/',
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:contato.geardev@gmail.com',
  },
  {
    Comp: YouTube,
    alt: 'youtube icon',
    link: 'https://www.youtube.com/@douglaslopesdev', // Replace with your YouTube channel URL
  },
]

export default function Contact() {
  return (
    <>
      <Header titlePre="Contact" />
      <div className={sharedStyles.layout}>
        <div className={contactStyles.avatar}>
          <img src="/avatar.png" alt="avatar with letters JJ" height={60} />
        </div>

        <h1 style={{ marginTop: 0 }}>Contact</h1>

        <div className={contactStyles.name}>
          Douglas L D Santos - Engineer @{' '}
          <ExtLink href="https://aocubo.com">AoCubo</ExtLink>
        </div>

        <div className={contactStyles.links}>
          {contacts.map(({ Comp, link, alt }) => {
            return (
              <ExtLink key={link} href={link} aria-label={alt}>
                <Comp height={32} />
              </ExtLink>
            )
          })}
        </div>
      </div>
    </>
  )
}
