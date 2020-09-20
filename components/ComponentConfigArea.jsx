import { useEffect, useState } from 'react'

import ComponentConfigItem from '../components/ComponentConfigItem'

export default function ComponentSettings(props) {
  const [settings, setSettings] = useState(props.settings)
  const [configValues, setConfigValues] = useState({})
  const [config, setConfig] = useState({})

  useEffect(() => {
    // console.log('settings has changed')
    // console.log(settings)
    // console.log('END')
    const newConfig = {}
    settings.forEach((setting) => {
      newConfig[setting.varname] = setting.currentValue
    })
    setConfigValues(newConfig)
  }, [settings])

  function reset() {
    // e.preventDefault()
    console.log(settings)
    // const newSettings = [...settings]
    const newSettings = settings.map((item) => {
      return { ...item, currentValue: item.initialValue, current: item.initial }
    })
    setSettings(newSettings)
    // console.log('Resetting...')
  }

  // function updateParentConfigValue(val) {
  //   setConfigValues({ ...configValues, ...val })
  // }

  function updateParentSetting(idx, setting) {
    // console.log(settings)
    // console.log(setting)
    const newSettings = [...settings]
    newSettings[idx] = setting
    // console.log('split\n')
    // const newSettings = settings.map((item) => {
    //   if (item.name == setting.name) {
    //     return setting
    //   } else {
    //     return item
    //   }
    // })
    // console.log(newSettings)
    setSettings(newSettings)
    // console.log('right after\n')
    // console.log(settings)
  }

  return (
    <div>
      <h2>Component Settings</h2>
      <section>{/* <pre>{JSON.stringify(settings, null, 2)}</pre> */}</section>
      <form>
        {settings.map((item, idx) => (
          <ComponentConfigItem
            key={idx}
            idx={idx}
            setting={item}
            updateParentSetting={updateParentSetting}
            // updateParentConfigValue={updateParentConfigValue}
          />
        ))}
      </form>
      <button onClick={reset}>Reset</button>
      <section>
        <h2>Output JSON</h2>
        <pre>{JSON.stringify(configValues, null, 2)}</pre>
      </section>
    </div>
  )
}
