/* eslint react/prop-types: 0 */
import React, { Component } from 'react'
import showdown from 'showdown'
import toMarkdown from 'to-markdown/dist/to-markdown'
import defaultConverters from './converters'

export default Editor =>
  class extends Component {
    handleMarkdownChange = (html) => {
      const { converters = [], gfm = true } = this.props
      const markdown = toMarkdown(html, { converters: [...defaultConverters, ...converters], gfm })
      this.props.onChange(markdown)
    }

    toHtml = (markdown) => {
      const convertor = new showdown.Converter()
      return convertor.makeHtml(markdown)
    }

    render() {
      return (
        <Editor
          {...this.props}
          styleWithCSS={false}
          defaultContent={this.toHtml(this.props.defaultContent)}
          onChange={this.handleMarkdownChange}
        />
      )
    }
  }
