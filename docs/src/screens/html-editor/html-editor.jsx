/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react'

import Editor from 'react-pell'
import Code from '../../components/code'

import './html-editor.css'

const defaultContent =
  '<h2>Hello world</h2><div>Try the awesome <b style="font-style: italic;">pell HTML editor </b>with react.</div><div><u><br></u></div><div><u>You just have to :</u></div><pre>import Editor from \'react-pell\'</pre><pre>&lt;Editor onChange="this.handleChange" /&gt;</pre><div><br></div><div><br></div>'

class HtmlEditor extends Component {
  state = {
    content: undefined,
  }

  componentDidMount() {
    this.setState(() => ({ content: this.editor.getContent() }))
  }

  handleChange = (html) => {
    this.setState(() => ({ content: html }))
  }

  render() {
    return (
      <div>
        <h2>HTML editor</h2>
        <div className="htmlEditor">
          <Editor
            ref={e => (this.editor = e)}
            onChange={this.handleChange}
            defaultContent={defaultContent}
          />
          <Code
            title="Output : HTML"
            language="HTML"
            className="htmlEditor_code"
            content={this.state.content}
          />
        </div>
      </div>
    )
  }
}

export default HtmlEditor
