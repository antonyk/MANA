import React, { useState } from "react";
import { frameworks } from "../../../data/framework_data";

export default function SidebarMenu() {
  const [frameworkID, setFrameworkID] = useState(null);

  const handleClick = (event) => {
    setFrameworkID(event.target.value);
  };

  return (
    <>
      <ul className="uk-nav uk-nav-default">
        <select className="uk-select" onChange={handleClick}>
          <option>Select Framework</option>
          {frameworks.map((item) => (
            <option key={item.framework_name}
            value={item.framework_id}
          >{`${item.framework_name}`}</option>
          ))}
        </select>
      
      {frameworkID
        ? frameworks[frameworkID].components
            .sort()
            .map((item) => <li key={item}className='uk-margin-top'><a href='#'>{`${item}`}</a></li>)
          : ""}
      </ul>  
    </>
  );
}
