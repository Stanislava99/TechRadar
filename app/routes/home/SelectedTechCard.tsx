import * as React from 'react';
import type {Technology} from "@prisma/client";

type Props = {
  selectedTechnologyData: Technology
};

export function SelectedTechCard(props: Props) {
  const technology = props.selectedTechnologyData;
  return (
    <div className="max-w-sm rounded border overflow-hidden shadow-xl" style={{marginTop: "1%"}}>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{technology.name}</div>
        <p className="text-gray-700 text-base">
          {technology.description}
        </p>
      </div>
    </div>
  );
};