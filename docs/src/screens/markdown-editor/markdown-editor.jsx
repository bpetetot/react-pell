/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react'

import Editor from 'react-pell/plugins/markdown'
import Code from '../../components/code'

import './markdown-editor.css'

const defaultContent = '**Hello world**'

class MarkdownEditor extends Component {
  state = {
    content: undefined,
  }

  componentDidMount() {
    this.setState(() => ({ content: this.editor.getContent() }))
  }

  handleChange = (markdown) => {
    this.setState(() => ({ content: markdown }))
  }

  render() {
    return (
      <div>
        <h2>Markdown editor</h2>
        <div className="markdownEditor">
          <Editor
            ref={e => (this.editor = e)}
            onChange={this.handleChange}
            defaultContent={defaultContent}
            actions={['heading1', 'heading2', 'bold', 'italic', 'quote', 'code', 'link', 'olist', 'ulist']}
          />
          <Code
            title="Output : Markdown"
            language="MARKDOWN"
            className="markdownEditor_code"
            content={this.state.content}
          />
        </div>
      </div>
    )
  }
}

export default MarkdownEditor
