import styles from "./styles.module.scss";

// Best works in desktop for now
const HeroSolarSystem = () => {
  const orbitCount = 4; // Number of orbits
  const orbitDistance = 250; // Distance between orbits
  const largestOrbitSize = 1200; // Size of the largest orbit
  const planetCount = 5; // Number of planets on each orbit
  const planetSize = 40; // Planet size in pixels

  const orbits = Array.from({ length: orbitCount }, (_, orbitIdx) => {
    const orbitSize = largestOrbitSize - orbitIdx * orbitDistance;
    return {
      width: orbitSize,
      height: orbitSize,
    };
  });

  const calculatePlanetPosition = (orbitSize: number, index: number) => {
    const angleStep = 360 / planetCount;
    const randomAngleOffset = Math.random() * angleStep;
    const angle = (index * angleStep + randomAngleOffset) % 360;
    const radians = (angle * Math.PI) / 180;
    const radius = (orbitSize - planetSize) / 2 + 20;
    const x = Math.cos(radians) * radius + orbitSize / 2;
    const y = Math.sin(radians) * radius + orbitSize / 2;
    return { x, y };
  };

  return (
    <div className={styles.solarSystem}>
      {orbits.map((orbit, orbitIdx) => (
        <div
          key={orbitIdx}
          className={styles.orbitWrapper}
          style={{
            width: orbit.width,
            height: orbit.height,
            top: -(orbit.height / 2),
          }}
        >
          <svg
            className={styles.orbit}
            viewBox={`0 0 ${orbit.width} ${orbit.height}`}
          >
            <circle
              cx={orbit.width / 2}
              cy={orbit.height / 2}
              r={orbit.width / 2 - 1} // Subtract 1 to accommodate stroke width
              strokeDasharray="10, 5"
              fill="transparent"
              stroke="#3971E7"
              strokeWidth="2" // Use relative value for stroke width
            />
          </svg>
          {Array.from({ length: planetCount }, (_, planetIdx) => {
            const { x, y } = calculatePlanetPosition(orbit.width, planetIdx);
            return (
              <div
                className={styles.planet}
                style={{
                  position: "absolute",
                  width: planetSize,
                  height: planetSize,
                  bottom: y - planetSize / 2,
                  left: x - planetSize / 2,
                }}
                key={planetIdx}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default HeroSolarSystem;
