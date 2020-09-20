import { useEffect, useState } from 'react'

export default function ComponentConfigItem(props) {
  const { type, label, initial, cssClass, name, varname } = props.setting
  const [current, setCurrent] = useState(props.setting.current)
  const [curValue, setCurValue] = useState()

  const testing = <h1>HELLO</h1>

  function checkboxChangeHandler(e) {
    setCurrent(e.target.checked)
    setCurValue({ [varname]: e.target.checked })
  }

  function radioChangeHandler(e, val) {
    setCurrent(e.target.checked)
    setCurValue({ [varname]: val })
    console.log(val)
  }

  function reset() {
    // if checkbox
    if (type == 'checkbox') {
      setCheckboxValues()
      setCurValue()
    }
  }

  //   const curValue = {"size":".uk-button-small"}

  useEffect(() => {
    props.setValue(curValue)
  }, [curValue])

  return (
    <>
      {/* {testing} */}
      {type == 'checkbox' ? (
        current ? (
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
        )
      ) : type == 'radio' ? (
        <div className='uk-margin uk-grid-small uk-child-width-auto uk-grid'>
          {props.setting.items.map((item) => {
            return item.name == current ? (
              <label>
                <input
                  name={name}
                  className={'uk-radio ' + cssClass}
                  type='radio'
                  checked
                  onChange={(e) => radioChangeHandler(e, item.value)}
                />
                {item.name}
              </label>
            ) : (
              <label>
                <input
                  name={name}
                  className={'uk-radio ' + cssClass}
                  type='radio'
                  onChange={(e) => radioChangeHandler(e, item.value)}
                />
                {item.name}
              </label>
            )
          })}
        </div>
      ) : (
        ''
      )}
    </>
  )
}
