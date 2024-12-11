import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const navClassName = isDarkTheme ? 'light-nav-links' : 'dark-nav-links'
      const onClickChangeTheme = () => {
        toggleTheme()
      }
      const navContainerClassname = isDarkTheme
        ? 'dark-nav-container'
        : 'light-nav-container'
      const lightThemeLine = isDarkTheme ? 'light-line' : 'dark-line'
      const renderNavbarLogo = () => {
        if (isDarkTheme === true) {
          return (
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              alt="website logo"
              className="navbar-logo"
            />
          )
        }
        return (
          <img
            src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
            alt="website logo"
            className="navbar-logo"
          />
        )
      }
      return (
        <nav className={navContainerClassname}>
          <div className="responsive-container">
            {renderNavbarLogo()}
            <ul className="navigations-container">
              <Link className="nav-link" to="/">
                <li className={navClassName}>Home</li>
              </Link>
              <Link className="nav-link" to="/about">
                <li className={navClassName}>About</li>
              </Link>
            </ul>
            {isDarkTheme ? (
              <button
                className="theme-button"
                data-testid="theme"
                onClick={onClickChangeTheme}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                  className="theme-icon"
                />
              </button>
            ) : (
              <button
                className="theme-button"
                data-testid="theme"
                onClick={onClickChangeTheme}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                  className="theme-icon"
                />
              </button>
            )}
          </div>
          <hr className={lightThemeLine} />
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
