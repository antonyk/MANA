import { useEffect, useState } from 'react'

export default function ComponentConfigItem(props) {
  const [setting, setSetting] = useState(props.setting)
  const { type, label, cssClass, name } = props.setting

  const testing = <h1>HELLO</h1>

  function checkboxChangeHandler(e) {
    setSetting({
      ...setting,
      current: e.target.checked,
      currentValue: e.target.checked ? 'checked' : null,
    })
  }

  function radioChangeHandler(e, item) {
    setSetting({ ...setting, current: item.name, currentValue: item.value })
    // console.log(item)
  }

  useEffect(() => {
    props.updateParentSetting(props.idx, setting)
  }, [setting])

  switch (setting.type) {
    case 'checkbox':
      return (
        <div className='uk-margin uk-grid-small uk-child-width-auto uk-grid'>
          {setting.current ? (
            <label>
              <input
                name={name}
                className={'uk-checkbox ' + cssClass}
                type='checkbox'
                checked
                onChange={checkboxChangeHandler}
              />
              {label}
            </label>
          ) : (
            <label>
              <input
                name={name}
                className={'uk-checkbox ' + cssClass}
                type='checkbox'
                onChange={checkboxChangeHandler}
              />
              {label}
            </label>
          )}
        </div>
      )
    case 'radio':
      return (
        <div className='uk-margin uk-grid-small uk-child-width-auto uk-grid'>
          {setting.items.map((item) => {
            return item.name == setting.current ? (
              <label>
                <input
                  name={name}
                  className={'uk-radio ' + cssClass}
                  type='radio'
                  checked
                  onChange={(e) => radioChangeHandler(e, item)}
                />
                {item.name}
              </label>
            ) : (
              <label>
                <input
                  name={name}
                  className={'uk-radio ' + cssClass}
                  type='radio'
                  onChange={(e) => radioChangeHandler(e, item)}
                />
                {item.name}
              </label>
            )
          })}
        </div>
      )
    default:
      return 'Unsupported'
  }
}
