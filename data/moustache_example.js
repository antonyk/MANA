const example = {
  header: 'Colors',
  items: [
    { name: 'red', first: true, url: '#Red' },
    { name: 'green', link: true, url: '#Green' },
    { name: 'blue', link: true, url: '#Blue' },
  ],
  empty: false,
}

const template = `
    <h1>{{header}}</h1>
    {{#bug}}
    {{/bug}}

    {{#items}}
    {{#first}}
        <li><strong>{{name}}</strong></li>
    {{/first}}
    {{#link}}
        <li><a href="{{url}}">{{name}}</a></li>
    {{/link}}
    {{/items}}

    {{#empty}}
    <p>The list is empty.</p>
    {{/empty}}
`
