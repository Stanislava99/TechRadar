import Radar from '~/util/components/Radar/Radar';
import {json} from "@remix-run/node";
import {getAllTechnologies} from "~/models/technology.server";
import {useLoaderData} from "@remix-run/react";

import type { Technology } from '@prisma/client';
import RadarLegend from "~/routes/home/RadarLegend";

type LoaderData = {
  technologies: Array<Technology>;
};

export const loader = async () => {
  return json<LoaderData>({
    technologies: await getAllTechnologies(),
  });
};

export default function RadarContainer() {
  const { technologies } = useLoaderData() as LoaderData;
  const setup = {
    rings: ['ADOPT', 'TRIAL', 'ASSESS', 'HOLD'],
    quadrants: ['TOOLS', 'TECHNIQUES', 'PLATFORMS', 'LANGUAGES'],
    data: technologies.map((technology: Technology) => {
      return {
        name: technology.name,
        quadrant: technology.type,
        ring: technology.currentViabilityLevel
      };
    }),
  };
  return (
    <div>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "1%"}}>
        <Radar {...setup} />
      </div>
      <RadarLegend />
    </div>
  );
}