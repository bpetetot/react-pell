import React, { Component } from 'react'
import showdown from 'showdown'

export default Editor =>
  class extends Component {
    handleMarkdownChange = (html) => {
      this.props.onChange(html)
    }

    toHtml = (markdown) => {
      const convertor = new showdown.Converter()
      return convertor.makeHtml(markdown)
    }

    render() {
      return (
        <Editor
          {...this.props}
          defaultContent={this.toHtml(this.props.defaultContent)}
          onChange={this.handleMarkdownChange}
        />
      )
    }
  }
