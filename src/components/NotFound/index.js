import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
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
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="theme-image"
            />
            <h1 className={textTag}>Lost Your Way?</h1>
            <p className={textTag}>We cannot seem to find the page</p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
