import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'

import './navbar.css'

const Navbar = ({ className }) => {
  return (
    <header className={c('navbar', className)}>
      <div className="container">
        <div className="navbar__title">react-pell</div>
        <nav className="navbar__menu">
          <a
            href="https://github.com/bpetetot/react-pell"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </nav>
      </div>
    </header>
  )
}

Navbar.propTypes = {
  className: PropTypes.string,
}

Navbar.defaultProps = {
  className: undefined,
}

export default Navbar
