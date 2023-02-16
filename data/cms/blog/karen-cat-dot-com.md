# karencat.com

I've been making websites now for awhile. But, I never thought that it would get me in trouble with lawyers. The thing is that you've really gotta be careful, otherwise you might end up with two private investigators at your door thinking you run an illegal streaming site.

```js
import React from 'react'
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

ReactDOM.render(
  <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
    {'# Your markdown here'}
  </ReactMarkdown>,
  document.querySelector('#content')
)
```
