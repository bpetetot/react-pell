import React from 'react'

import './main.css'
import Blockquote from '../../components/blockquote'
import HtmlEditor from '../html-editor'
import MarkdownEditor from '../markdown-editor'

const Main = () => {
  return (
    <div className="content container">
      <Blockquote text="React component wrapping a HTML and Markdown editor based on the wysiwyg pell editor" />
      <HtmlEditor />
      <MarkdownEditor />
      <h2>More samples coming soon...</h2>
    </div>
  )
}

export default Main
