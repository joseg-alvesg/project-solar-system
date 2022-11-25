import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div>
          {Planets.map((elem, index) => (
            <PlanetCard
              key={ index }
              planetName={ elem.name }
              planetImage={ elem.image }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
