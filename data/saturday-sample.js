export const schemas = [{
  id: '1',
  code: {
    "settings": [
      {
        "name": "button-disabled",
        "type": "checkbox",
        "class": "mana-checkbox",
        "varname": "is_disabled",
        "default": false,
        "current": false,
        "label": "Disabled"
      },
      {
        "name": "button-style",
        "type": "radio",
        "items": [
          { "name": "Default", "value": ".uk-button-default" },
          { "name": "Primary", "value": ".uk-button-primary" },
          { "name": "Secondary", "value": ".uk-button-secondary" },
          { "name": "Danger", "value": ".uk-button-danger" },
          { "name": "Text", "value": ".uk-button-text" },
          { "name": "Link", "value": ".uk-button-link" }
        ],
        "class": 'mana-radio',
        "varname": "style",
        "default": "Default",
        "current": "Default",
        "label": "Style"
      },
      {
        "name": "button-size",
        "type": "radio",
        "items": [
          { "name": "Default", "value": "" },
          { "name": "Small", "value": ".uk-button-small" },
          { "name": "Large", "value": ".uk-button-large" }
        ],
        "class": 'mana-radio',
        "varname": "size",
        "default": "Default",
        "current": "Default",
        "label": "Size"
      }
    ]
  },
  codeString: {
    "data":`
      <ul uk-accordion>
        <li class="uk-open">
          <a class="uk-accordion-title" href="#">Item 1</a>
          <div class="uk-accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </li>
        <li>
          <a class="uk-accordion-title" href="#">Item 2</a>
          <div class="uk-accordion-content">
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
          </div>
        </li>
        <li>
          <a class="uk-accordion-title" href="#">Item 3</a>
          <div class="uk-accordion-content">
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
          </div>
        </li>
      </ul>
    `
}
}]

export default schemas
