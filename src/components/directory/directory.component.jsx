import React, { useState } from "react";
import "./directory.styles.scss";

import MenuItem from "../menu-item/menu-item.component";
import sectionsData from "./directory.data";

const Directory = () => {
  const [sections] = useState(sectionsData);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
