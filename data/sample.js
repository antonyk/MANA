export const frameworks = [
  {
    id: 1,
    name: 'uikit',
  },
  {
    id: 2,
    name: 'bootstrap',
  },
]

export const components = [
  {
    id: 1,
    name: 'button',
    framework_id: 1,
  },
  {
    id: 2,
    name: 'label',
    framework_id: 1,
  },
]

export const templates = [
  {
    id: 1,
    code: `
      <button className="uk-button {{style}} {{size}} {{is_disabled}}"></button>
    `,
    component_id: 1,
  },
  {
    id: 2,
    code: `
      <span class="uk-label {{style}} {{is_disabled}}"></span>      
    `,
    component_id: 2,
  },
]

export const schemas = [
  {
    id: 1,
    code: `{
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
            {"name": "Default", "value": ".uk-button-default"},
            {"name": "Primary", "value": ".uk-button-primary"},
            {"name": "Secondary", "value": ".uk-button-secondary"},
            {"name": "Danger", "value": ".uk-button-danger"},
            {"name": "Text", "value": ".uk-button-text"},
            {"name": "Link", "value": ".uk-button-link"}
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
            {"name": "Default", "value": ""},
            {"name": "Small", "value": ".uk-button-small"},
            {"name": "Large", "value": ".uk-button-large"}
          ],
          "class": 'mana-radio',
          "varname": "size",
          "default": "Default",
          "current": "Default",
          "label": "Size"
        }
      ]
    }`,
    template_id: 1,
  },
  {
    id: 2,
    code: `
    "settings": [
      {
        "name": "button-style",
        "type": "radio",
        "items": [
          {"name": "Default", "value": ""},
          {"name": "Success", "value": ".uk-button-success"},
          {"name": "Warning", "value": ".uk-button-warning"},
          {"name": "Danger", "value": ".uk-button-danger"}
        ],
        "class": 'mana-radio',
        "varname": "style",
        "default": "Default",
        "label": "Style"
      }
    ]
  `,
    template_id: 2,
  },
]

export const uikit = {
  components: {
    button: {
      name: 'Button',
      schema: {
        settings: [
          {
            name: 'button-disabled',
            type: 'checkbox',
            cssClass: '',
            initial: false,
            current: false,
            label: 'Disabled',
            varname: 'is_disabled',
            initialValue: '',
            currentValue: '',
            values: {
              false: '',
              true: ' disabled',
            },
          },
          {
            name: 'button-style',
            type: 'radio',
            items: [
              { name: 'Default', value: ' uk-button-default' },
              { name: 'Primary', value: ' uk-button-primary' },
              { name: 'Secondary', value: ' uk-button-secondary' },
              { name: 'Danger', value: ' uk-button-danger' },
              { name: 'Text', value: ' uk-button-text' },
              { name: 'Link', value: ' uk-button-link' },
            ],
            cssClass: '',
            initial: 'Default',
            current: 'Default',
            label: 'Style',
            varname: 'style',
            initialValue: ' uk-button-default',
            currentValue: ' uk-button-default',
          },
          {
            name: 'button-size',
            type: 'radio',
            items: [
              { name: 'Default', value: '' },
              { name: 'Small', value: ' uk-button-small' },
              { name: 'Large', value: ' uk-button-large' },
            ],
            cssClass: '',
            initial: 'Default',
            current: 'Default',
            label: 'Size',
            varname: 'size',
            initialValue: '',
            currentValue: '',
          },
        ],
      },
      template:
        // `
        // <div>
        //   <button className=${codeStringClass}>Button</button>
        // </div>
        // `
        `
        <button class="uk-button{{style}}{{size}}"{{is_disabled}}>Button</button>
      `,
    },
    label: {
      name: 'label',
      schema: {
        settings: [
          {
            name: 'button-style',
            type: 'radio',
            items: [
              { name: 'Default', value: '' },
              { name: 'Success', value: '.uk-button-success' },
              { name: 'Warning', value: '.uk-button-warning' },
              { name: 'Danger', value: '.uk-button-danger' },
            ],
            cssClass: 'mana-radio',
            varname: 'style',
            initial: 'Default',
            current: 'Default',
            initialValue: '',
            currentValue: '',
            label: 'Style',
          },
        ],
      },
      template: `
        <span class="uk-label {{style}}{{is_disabled}}"></span>
      `,
    },
  },
}

export const initialTemplate = {}
