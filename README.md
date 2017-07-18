# react-pell

> React component wrapping [the wysiwyg pell editor](https://github.com/jaredreich/pell)

## Getting started

Install react-pell as dependency :
```
  yarn add react-pell
```

Add the component :
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