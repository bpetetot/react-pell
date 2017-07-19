import React, { Component } from 'react'

export default Editor => class extends Component {

  handleMarkdownChange = (html) => {
    // here html to markdown
    const markdown = html
    console.log('yeah markdown !!!!')
    this.props.onChange(markdown)
  }

  render() {
    return <Editor {...this.props} onChange={this.handleMarkdownChange} />
  }
}
