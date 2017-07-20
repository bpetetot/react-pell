import React, { Component } from 'react'

import Editor from 'react-pell'
import Code from '../../components/code'

import './html-editor.css'

const defaultContent = '<h1>Hello world</h1><div>Try the awesome <b style="font-style: italic;">pell editor </b>with react.</div><div><u><br></u></div><div><u>You just have to :</u></div><pre>import Editor from \'react-pell\'</pre><pre>&lt;Editor onChange="this.handle change" /&gt;</pre><div><br></div><div><br></div>'

class HtmlEditor extends Component {
  state = {
    content: undefined,
  }

  handleChange = (html) => {
    this.setState(() => ({ content: html }))
  }

  render() {
    return (
      <div>
        <h2>HTML editor</h2>
        <div className="htmlEditor">
          <Editor onChange={this.handleChange} defaultContent={defaultContent} />
          <Code title="Output : HTML" language="HTML" content={this.state.content} />
        </div>
      </div>
    )
  }
}

export default HtmlEditor
