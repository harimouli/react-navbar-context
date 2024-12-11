import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const backgroundcontainer = isDarkTheme
        ? 'dark-background'
        : 'light-background'
      const textTag = isDarkTheme ? 'light-theme-tag' : 'dark-theme-tag'
      return (
        <>
          <Navbar />
          <div className={backgroundcontainer}>
            {isDarkTheme ? (
              <>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  alt="about"
                  className = "theme-image"
                />
                <h1 className={textTag}>About</h1>
              </>
            ) : (
              <>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  alt="about"
                  className = "theme-image"
                />
                <h1 className={textTag}>About</h1>
              </>
            )}
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
