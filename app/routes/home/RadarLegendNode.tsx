import * as React from 'react';

type Props = {
  title: string,
  explanationText: string,
  icon?: any,
}
export function RadarLegendNode(props: Props) {
  return (
    <div style={{display: "flex", flexDirection: "column", margin: "2% 0"}}>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "center", margin: "20px 0"}}>{props.icon}</div>
      <b style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>{props.title}</b>
      <div
        style={{display: "flex", flexDirection: "row", justifyContent: "center", margin: "2% 5%", textAlign: "center"}}
      >
        {props.explanationText}
      </div>
    </div>
  );
}