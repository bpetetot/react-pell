import React, { Component } from 'react'
import PropTypes from 'prop-types'
import pell from 'pell'

import 'pell/dist/pell.min.css'

class Editor extends Component {
  componentDidMount() {
    const {
      onChange,
      styleWithCSS,
      actionBarClass,
      buttonClass,
      contentClass,
      defaultContent,
    } = this.props

    // initialize pell editor
    pell.init({
      element: this.container,
      onChange: html => onChange(html),
      styleWithCSS,
      classes: {
        actionbar: actionBarClass,
        button: buttonClass,
        content: contentClass,
      },
    })

    // set default content
    this.container.content.innerHTML = defaultContent
  }

  render() {
    return <div ref={e => (this.container = e)} className={this.props.containerClass} />
  }
}

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  defaultContent: PropTypes.string,
  styleWithCSS: PropTypes.bool,
  containerClass: PropTypes.string,
  actionBarClass: PropTypes.string,
  buttonClass: PropTypes.string,
  contentClass: PropTypes.string,
}

Editor.defaultProps = {
  defaultContent: '',
  styleWithCSS: false,
  containerClass: 'pell-container',
  actionBarClass: 'pell-actionbar',
  buttonClass: 'pell-button',
  contentClass: 'pell-content',
}

export default Editor
