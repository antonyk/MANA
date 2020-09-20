import { useEffect, useState } from 'react'

import ComponentConfigItem from '../components/ComponentConfigItem'

export default function ComponentSettings(props) {
  const [settings, setSettings] = useState(props.settings)
  const [configValues, setConfigValues] = useState('Initial')

  useEffect(() => {
    const result = {}
    settings.forEach((setting) => {
      result[setting.varname] = setting.current
    })
    setConfigValues(result)
  }, [settings])

  //   useEffect(() => {
  //       let html = ''
  //       settings.forEach(item => {
  //         if (item.type) === 'checkbox' {
  //             html += 'checkbox'
  //         }
  //       })
  //     }, [])

  function setConfigValue(val) {
    setConfigValues({ ...configValues, ...val })
  }

  return (
    <div>
      <h2>Component Settings</h2>
      {/* <section>
        <h2>Settings JSON</h2>
        <pre>{JSON.stringify(settings)}</pre>
      </section> */}
      <form>
        {settings.map((item) => (
          <ComponentConfigItem setting={item} setValue={setConfigValue} />
        ))}
      </form>
      <section>
        <h2>Output JSON</h2>
        <pre>{JSON.stringify(configValues, null, 2)}</pre>
      </section>
    </div>
  )
}

function getInitial(settings) {}
