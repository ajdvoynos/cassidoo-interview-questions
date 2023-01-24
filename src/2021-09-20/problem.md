Given a string of HTML, detect and print all the HTML tags, attributes and values of attributes.

Example:

```parseHTML(`<p><img src="https://i.imgur.com/LSG9xg3.jpeg" /></p>`)```

```[{ tag: 'p' }, { tag: 'img', attributes: [{'src': 'https://i.imgur.com/LSG9xg3.jpeg'}] }]```