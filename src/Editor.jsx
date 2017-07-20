import React, { Component } from 'react'
import PropTypes from 'prop-types'
import pell from 'pell'

import 'pell/dist/pell.min.css'

// pass pell object to custom actions callback
const mapActions = (actions) => {
  if (actions) {
    return actions.map((e) => {
      if (typeof e === 'object' && e.result) {
        return { ...e, result: () => e.result(pell) }
      }
      return e
    })
  }
  return actions
}

class Editor extends Component {
  componentDidMount() {
    const {
      onChange,
      actions,
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
      actions: mapActions(actions),
      styleWithCSS,
      classes: {
        actionbar: actionBarClass,
        button: buttonClass,
        content: contentClass,
      },
    })

    // set default content
    this.getContent().innerHTML = defaultContent
  }

  // return the editor content
  getContent = () => this.container.content

  render() {
    return <div ref={e => (this.container = e)} className={this.props.containerClass} />
  }
}

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  defaultContent: PropTypes.string,
  actions: PropTypes.array,
  styleWithCSS: PropTypes.bool,
  containerClass: PropTypes.string,
  actionBarClass: PropTypes.string,
  buttonClass: PropTypes.string,
  contentClass: PropTypes.string,
}

Editor.defaultProps = {
  defaultContent: '',
  styleWithCSS: false,
  actions: [
    'bold',
    'italic',
    'underline',
    'strikethrough',
    'heading1',
    'heading2',
    'olist',
    'ulist',
    'quote',
    'code',
    'line',
  ],
  containerClass: 'pell-container',
  actionBarClass: 'pell-actionbar',
  buttonClass: 'pell-button',
  contentClass: 'pell-content',
}

export default Editor
