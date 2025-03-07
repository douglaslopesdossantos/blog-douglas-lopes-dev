import { useState } from 'react'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your newsletter signup logic here
    console.log('Email submitted:', email)
  }

  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <div className={sharedStyles.profileImageContainer}>
          <img
            src="https://avatars.githubusercontent.com/u/34402257?v=4"
            alt="Douglas Lopes"
            className={sharedStyles.profileImage}
          />
        </div>
        <h1>Douglas L D Santos</h1>

        <div className={sharedStyles.newsletterContainer}>
          <h3>Subscribe to my newsletter</h3>
          <form onSubmit={handleSubmit} className={sharedStyles.newsletterForm}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className={sharedStyles.emailInput}
            />
            <button type="submit" className={sharedStyles.submitButton}>
              Subscribe
            </button>
          </form>
        </div>

        {/* Rest of the existing code */}
      </div>
    </>
  )
}
