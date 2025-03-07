import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <div className={sharedStyles.profileImageContainer}>
          <img
            src="https://avatars.githubusercontent.com/u/34402257?v=4" // Make sure to add your photo to the public folder
            alt="Douglas Lopes"
            className={sharedStyles.profileImage}
          />
        </div>
        <h1>Douglas L D Santos</h1>
        {/* Rest of the existing code */}
      </div>
    </>
  )
}
