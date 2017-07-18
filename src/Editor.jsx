import React, { Component } from 'react'
import PropTypes from 'prop-types'
import pell from 'pell'

import 'pell/dist/pell.min.css'

class Editor extends Component {

  componentDidMount() {
    pell.init({
      element: this.editor,
      onChange: html => this.props.onChange(html),
      styleWithCSS: this.props.styleWithCSS,
    })
  }

  render() {
    return <div ref={e => (this.editor = e)} />
  }
}

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  styleWithCSS: PropTypes.bool,
}

Editor.defaultProps = {
  styleWithCSS: false,
}

export default Editor
