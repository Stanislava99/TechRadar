import * as React from 'react';
import { GiCancel } from 'react-icons/gi';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { AiTwotoneExperiment } from 'react-icons/ai';
import { GrUploadOption } from 'react-icons/gr';
import {RadarLegendNode} from "~/routes/home/RadarLegendNode";

export default function RadarLegend() {
  return (
    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "3%", background: "lightgrey"}}>
      <RadarLegendNode
        title="ADOPT"
        explanationText="This technology is globally accepted and should be implemented."
        icon={<GrUploadOption size="40px" />}
      />
      <RadarLegendNode
        title="TRIAL"
        explanationText="This tech should be actively tried out."
        icon={<AiTwotoneExperiment size="40px" />}
      />
      <RadarLegendNode
        title="ASSESS"
        explanationText="This tech should be actively and closely observed."
        icon={<GiMagnifyingGlass size="40px" />}
      />
      <RadarLegendNode
        title="HOLD"
        explanationText="Keep an eye on this technology, but its too early for assessment"
        icon={<GiCancel size="40px"/>}
      />
    </div>
  );
};
