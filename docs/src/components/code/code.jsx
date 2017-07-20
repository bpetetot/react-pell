import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import Highlight from 'react-highlight'

import './code.css'

const Code = ({ title, language, content, className }) => {
  return (
    <div className={c('code', className)}>
      <div className="code__title">
        {title}
      </div>
      <Highlight className={language}>
        {content}
      </Highlight>
    </div>
  )
}

Code.propTypes = {
  title: PropTypes.string,
  language: PropTypes.string.isRequired,
  content: PropTypes.string,
  className: PropTypes.string,
}

Code.defaultProps = {
  title: undefined,
  content: '',
  className: undefined,
}

export default Code
