# react-pell

> React component wrapping a HTML and Markdown editor based on [the wysiwyg pell editor](https://github.com/jaredreich/pell)

## Contents
 - [Getting started](#getting-started)
 - [HTML Editor](#html-editor)
 - [Markdown Editor](#markdown-editor)

## Getting started

Install react-pell as dependency :
```
  yarn add react-pell
```

Basic example :
```es6
import React, { Component } from 'react';
import Editor from 'react-pell'

class App extends Component {

  handleChange(html) {
    console.log(html)
  }

  render() {
    return (
      <Editor onChange={this.handleChange.bind(this)} />
    );
  }
}

export default App;
```

## HTML editor

A basic wrapping of the [pell editor](https://github.com/jaredreich/pell).

**Import the Editor :**
```es6
import Editor from 'react-pell'
```

**Example :**
```es6
  <Editor
    defaultContent="<b>hello world</b>"
    actions={['bold', 'italic']}
    actionBarClass="my-custom-class"
    onChange={this.handleChange}
  />
```

**Prop types :**

property | type | required | description
----------|------|----------|------------
onChange | func | true | function handling changes from the editor, the output html is the first parameter
defaultContent | string | false | default content of the editor (HTML serialized in a string)
actions | array | false | table of available actions or custom actions in the editor ([watch pell documentation for more details](https://github.com/jaredreich/pell/blob/master/README.md)) **Note:** `pell` instance is given at first parameter of `result` callback of custom actions. (default: `['bold', 'italic', 'underline', 'strikethrough', 'heading1', 'heading2', 'olist', 'ulist', 'quote', 'code', 'line']`).
styleWithCSS | bool | false | outputs styles with css instead of HTML elements (default: `false`)
containerClass | string | false | class name of the container (default: `pell-container`)
actionBarClass | string | false | class name of the action bar (default: `pell-actionbar`)
buttonClass | string | false | class name of buttons (default: `pell-button`)
contentClass | string | false | class name of the content (default: `pell-content`)

## Markdown editor

This editor plugin extends the behaviour of [pell](https://github.com/jaredreich/pell) to edit markdown.
We are using following libraries to manage markdown :
- html to markdown : [`to-markdown`](https://github.com/domchristie/to-markdown)
- markdown to html : [`showdown`](https://github.com/showdownjs/showdown)

**Import the Editor :**
```es6
import Editor from 'react-pell/plugins/markdown'
```

**Example :**
```es6
  <Editor
    defaultContent="**hello world**"
    actions={['bold', 'italic']}
    actionBarClass="my-custom-class"
    onChange={this.handleChange}
    gmf={false}
  />
```

**Prop types :**

Same props as the Basic HTML pell editor with following props added :

property | type | required | description
----------|------|----------|------------
converters | array | false | converters used to handle custom convertions from HTML to markdown. [see to-markdown documentation for more details](https://github.com/domchristie/to-markdown/blob/master/README.md#converters-array)
gmf | bool | true | beta support for GitHub flavored markdown (GFM)

## LICENSE

MIT