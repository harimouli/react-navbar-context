import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
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
                  src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                  alt="home"
                  className="theme-image"
                />
                <h1 className={textTag}>Home</h1>
              </>
            ) : (
              <>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                  alt="home"
                  className="theme-image"
                />
                <h1 className={textTag}>Home</h1>
              </>
            )}
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
