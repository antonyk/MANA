import React, { useState } from "react";
import { frameworks } from "../../../data/framework_data";

export default function SidebarMenu() {
  const [frameworkID, setFrameworkID] = useState(0);
const [framework, setFramework] = useState(frameworks[0].framework_name);
  const handleClick = (event) => {
    setFrameworkID(event.target.value);
    setFramework(event.target.key);
  };

  return (
    <>
      <ul className="uk-nav uk-nav-default">
        <select className="uk-select" onChange={handleClick}>
          {/* <option value={4}>Select Framework</option> */}
          {frameworks.map((item) => (
            <option
              key={item.framework_name}
              value={item.framework_id}
            >{`${item.framework_name}`}</option>
          ))}
        </select>

        {frameworkID != 4
          ? frameworks[frameworkID].components.sort().map((item) => (
              <li key={item} className="uk-margin-top">
                <a href={`/app/${framework.toLowerCase()}/${item.toLowerCase()}`}>{`${item}`}</a>
              </li>
            ))
          : ""}
      </ul>
    </>
  );
}
