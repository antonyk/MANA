export const schemas = [
    {
      id: 1,
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
    ,
      template_id: 2,
    },
  ]