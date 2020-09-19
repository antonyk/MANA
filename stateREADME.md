# What might the backend data look like

Example UIkit -- Accordion

```JSON
state = {
  template = {
    code: {

    }
  schema = {
    code: {

    }
  }
  settings = {
    usage: {
      class: {
        uk-accordion-title: "Defines and styles the toggle for each accordion item. Use <a> elements.",
        uk-accordion-content: "Defines the content part for each accordion item."
      }
    },
    options: {
      active: {
        value: Number,
        default: false,
        description: "Index of the element to open initially."
      },
      animation: {
        value: Boolean,
        default: true,
        description: "Reveal item directly or with a transition."
      },
      collapsible: {
        value: Boolean,
        default: true,
        description: "Allow all items to be closed."
      },
      content: {
        value: String,
        default: "> .uk-accordion-content",
        description: "The content selector, which selects the accordion content elements."
      }
      duration: {
        value: Number,
        default: 200,
        description: "Animation duration in milliseconds."
      },
      multiple: {
        value: Boolean,
        default: false,
        description: "Allow multiple open items"
      }, 
      targets: {
        value: String,
        default: "> .uk-accordion-content",
        description: "The content selector, which selects the accordion content elements."
      }
      no_collapsing: {
        type: "toggle",
        key: "collapsible:",
        default: true,
        description: ""
      },
      multiple_open_items: {
        type: "toggle",
        key: "multiple:",
        default: true,
        description: "",
      },
      set_open_items: {
        type: "option",
        key: "uk-open:",
        default: true,
        description: "",
      },
    }
  }
}
```
