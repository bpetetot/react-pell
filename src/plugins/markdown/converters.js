export default [
  // replace div
  {
    filter: 'div',
    replacement: content => `\n${content}`,
  },
  // not managed in markdown
  {
    filter: ['u', 'span'],
    replacement: content => content,
  },
  // Fenced code blocks
  {
    filter: node => node.nodeName === 'PRE',
    replacement: content => `\n\n\`\`\`\n${content}\n\`\`\`\n\n`,
  },
]
