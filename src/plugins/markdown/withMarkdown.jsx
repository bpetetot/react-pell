/* eslint react/prop-types: 0 */
import React, { Component } from 'react'
import showdown from 'showdown'
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';


const turndownService = new TurndownService();
turndownService.use(gfm);

const markdownToHtml = (markdown) => {
  const convertor = new showdown.Converter()
  showdown.setFlavor('github')
  return convertor.makeHtml(markdown)
}

export default Editor =>
  class extends Component {
    handleMarkdownChange = (html) => {
      this.props.onChange(turndownService.turndown(html))
    }

    // return the editor content
    getContent = () => {
      return turndownService.turndown(this.editor.getContent())
    }

    render() {
      return (
        <Editor
          ref={e => (this.editor = e)}
          {...this.props}
          styleWithCSS={false}
          defaultContent={markdownToHtml(this.props.defaultContent)}
          onChange={this.handleMarkdownChange}
        />
      )
    }
  }
