import Radar from '~/util/components/Radar/Radar';
import {json} from "@remix-run/node";
import {getAllTechnologies} from "~/models/technology.server";
import {useLoaderData} from "@remix-run/react";

import type { Technology } from '@prisma/client';
import RadarLegend from "~/routes/home/RadarLegend";
import { SearchBar } from "~/routes/home/SearchBar";
import React from "react";
import {SelectedTechCard} from "~/routes/home/SelectedTechCard";

type LoaderData = {
  technologies: Array<Technology>;
};

export const loader = async () => {
  return json<LoaderData>({
    technologies: await getAllTechnologies(),
  });
};

export default function RadarContainer() {
  const [selectedTechnology, setSelectedTechnology] = React.useState(undefined);
  const selectTechnologyName = (selectedTech: String): void => setSelectedTechnology(selectedTech);
  const { technologies } = useLoaderData() as LoaderData;
  const selectedTechnologyData = technologies.filter(technology => technology.name === selectedTechnology)[0];

  const data = technologies.map((technology: Technology) => {
      return {
        name: technology.name,
        quadrant: technology.type,
        ring: technology.currentViabilityLevel,
        description: technology.description
      };
    });
  const setup = {
    rings: ['ADOPT', 'TRIAL', 'ASSESS', 'HOLD'],
    quadrants: ['TOOLS', 'TECHNIQUES', 'PLATFORMS', 'LANGUAGES'],
    data,
  };
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <div style={{display:" flex", flexDirection: "row", justifyContent: "space-evenly"}}>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", margin: "2% 0% 0% 5%", minWidth: "20%"}}>
          <SearchBar data={data.map(technologyData => technologyData.name)} onSelect={selectTechnologyName} />
          {selectedTechnologyData && <SelectedTechCard selectedTechnologyData={selectedTechnologyData} />}
        </div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "1%", marginLeft: "5%"}}>
          <Radar {...setup} selectedTechnology={selectedTechnology} />
        </div>
      </div>
      <RadarLegend />
    </div>
  );
}