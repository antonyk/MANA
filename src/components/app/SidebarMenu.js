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
        {/* {frameworks.map((item) => (
          <h4
            id={item.framework_id}
            onClick={handleClick}
          >{`${item.framework_name}`}</h4>
        ))} */}
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
            .map((item) => <li key={item}className='uk-margin-top'>{`${item}`}</li>)
          : ""}
      </ul>  
    </>
  );
}
