import Radar from '../../util/components/Radar/Radar';

export default function RadarContainer() {
  const setup = {
    rings: ['adopt', 'trial', 'assess', 'hold'],
    quadrants: ['tools', 'techniques', 'platforms', 'languages'],
    data: [
      {
        name: 'VISUAL STUDIO CODE',
        quadrant: 'tools',
        ring: "hold"
      },
      {
        name: 'TypeScript',
        quadrant: 'languages',
        ring: "trial"
      },
      {
        name: 'InteliJ',
        quadrant: 'tools',
        ring: "adopt"
      }
    ]
  };
  return (
    <main>
      <div>Netcetera Tech Radar</div>
      <Radar {...setup} />
    </main>
  );
}