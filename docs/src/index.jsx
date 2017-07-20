import React from 'react'
import ReactDom from 'react-dom'

import 'highlight.js/styles/github-gist.css'
import './index.css'
import Navbar from './components/navbar'
import Main from './screens/main'

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'))
