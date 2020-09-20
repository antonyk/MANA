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
      template: `
<button class="uk-button{{style}}{{size}}"{{is_disabled}}>Button</button>
      `,
    },
    accordion: {
      name: 'Accordion',
      schema: {
        settings: [
          {
            name: 'accordion-collapsible',
            type: 'checkbox',
            cssClass: '',
            initial: true,
            current: true,
            label: 'Collapsible',
            varname: 'no_collapsing',
            initialValue: '',
            currentValue: '',
            values: {
              true: '',
              false: ' collapsible: false;',
            },
          },
          {
            name: 'accordion-multiple',
            type: 'checkbox',
            cssClass: '',
            initial: false,
            current: false,
            label: 'Multiple open items',
            varname: 'multiple_open',
            initialValue: '',
            currentValue: '',
            values: {
              true: ' multiple: true;',
              false: '',
            },
          },
        ],
      },
      template: `
<ul uk-accordion="{{no_collapsing}}{{multiple_open}}">
  <li class='uk-open'>
    <a class='uk-accordion-title' href='#'>
      Item 1
    </a>
    <div class='uk-accordion-content'>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </li>
  <li>
    <a class='uk-accordion-title' href='#'>
      Item 2
    </a>
    <div class='uk-accordion-content'>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.
      </p>
    </div>
  </li>
  <li>
    <a class='uk-accordion-title' href='#'>
      Item 3
    </a>
    <div class='uk-accordion-content'>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        proident.
      </p>
    </div>
  </li>
</ul>
      `,
    },
    label: {
      name: 'Label',
      schema: {
        settings: [
          {
            name: 'label-disabled',
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
            name: 'label-style',
            type: 'radio',
            items: [
              { name: 'Default', value: '' },
              { name: 'Success', value: ' uk-label-success' },
              { name: 'Warning', value: ' uk-label-warning' },
              { name: 'Danger', value: ' uk-label-danger' },
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
<span class="uk-label{{style}}"{{is_disabled}}>Hello World!</span>
      `,
    },
    dropdown: {
      name: 'Dropdown',
      schema: {
        settings: [
          {
            name: 'drop-mode-click',
            type: 'checkbox',
            cssClass: '',
            initial: false,
            current: false,
            label: 'Force Click Mode',
            varname: 'click_mode',
            initialValue: '',
            currentValue: '',
            values: {
              false: '',
              true: ' mode: click',
            },
          },
          {
            name: 'drop-inline',
            type: 'checkbox',
            cssClass: '',
            initial: true,
            current: true,
            label: 'Inline Mode',
            varname: 'inline_mode',
            initialValue: '',
            currentValue: '',
            values: {
              false: '',
              true: 'uk-inline',
            },
          },
        ],
      },
      template: `
<div>
  <div class='{{inline_mode}}'>
    <button class='uk-button uk-button-default' type='button'>
      Dropdown
    </button>
    <div uk-dropdown='{{click_mode}}'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt.
    </div>
  </div>
</div>
      `,
    },
  },
}

export const initialTemplate = {}
