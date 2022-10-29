import * as React from 'react';
import ReactSearchBox from "~/util/searchbox/index";

type Props = {
  data: Array<String>,
  onSelect: (selectedTech: String) => void,
};

export function SearchBar(prop: Props) {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <b>Look up a tech!</b>
      <ReactSearchBox
        placeholder="Search..."
        data={prop.data.map(technologyName => {
          return {
            key: technologyName,
            value: technologyName
          }
        })}
        onSelect={record => prop.onSelect(record.item.value)}
        onFocus={() => {
          console.log("This function is called when is focussed");
        }}
        autoFocus
        iconBoxSize="48px"
      />
    </div>
  );
}