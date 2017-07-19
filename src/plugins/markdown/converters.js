import toMarkdown from 'to-markdown/dist/to-markdown'

export default [
  // Fenced code blocks
  {
    filter: node => toMarkdown.isBlock(node) && node.nodeName === 'PRE',
    replacement: content => `\n\n\`\`\`\n${content}\n\`\`\`\n\n`,
  },
  // remove divs
  {
    filter: 'div',
    replacement: content => `\n${content}\n`,
  },
  // not managed in markdown
  {
    filter: ['u'],
    replacement: content => content,
  },
]
