/* eslint react/prop-types: 0 */
import React, { Component } from 'react'
import showdown from 'showdown'
import toMarkdown from 'to-markdown/dist/to-markdown'
import defaultConverters from './converters'

const markdownToHtml = (markdown, gfm) => {
  const convertor = new showdown.Converter()
  if (gfm) {
    showdown.setFlavor('github')
  }
  return convertor.makeHtml(markdown)
}

const htmlToMarkdown = (html, converters, gfm) =>
  toMarkdown(html, { converters: [...defaultConverters, ...converters], gfm })

export default Editor =>
  class extends Component {
    handleMarkdownChange = (html) => {
      const { converters = [], gfm = true } = this.props

      console.log(html)
      this.props.onChange(htmlToMarkdown(html, converters, gfm))
    }

    // return the editor content
    getContent = () => {
      const { converters = [], gfm = true } = this.props
      return htmlToMarkdown(this.editor.getContent(), converters, gfm)
    }

    render() {
      return (
        <Editor
          ref={e => (this.editor = e)}
          {...this.props}
          styleWithCSS={false}
          defaultContent={markdownToHtml(this.props.defaultContent, this.props.gfm)}
          onChange={this.handleMarkdownChange}
        />
      )
    }
  }
