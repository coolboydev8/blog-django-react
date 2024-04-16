import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";

const TagsComponent = () => {
  const [selected, setSelected] = useState(["Sample Tag"]);

  return (
    <div className="flex flex-col items-start justify-start lg:w-64">
      <p className="text-white mb-1">Add some tags:</p>
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <TagsInput
        value={selected}
        onChange={setSelected}
        name="fruits"
        placeHolder="enter fruits"
      />
      <em className="text-white text-left text-xs my-2">
        press enter or comma to add new tag
      </em>
    </div>
  );
};

export default TagsComponent;
