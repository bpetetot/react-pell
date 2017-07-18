import React, { Component } from 'react'
import PropTypes from 'prop-types'
import pell from 'pell'

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
  styleWithCSS: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Editor
