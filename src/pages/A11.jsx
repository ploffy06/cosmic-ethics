import * as React from 'react';
import EarthModal from '../components/space/EarthModal';
import ShipModal from '../components/space/ShipModal';
import PlanetModal from '../components/space/PlanetModal';

const A11 = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className='space'>
        <h1>Universe A-11 (A Sneak Peak)</h1>
        <p>Click around Space to learn about Mission Aurora</p>
        <div className='underline'></div>
        <div className='universe-container'>
          <EarthModal className="earth-modal"/>
          <ShipModal className="ship-modal"/>
          <PlanetModal className="planet-modal"/>
        </div>
    </div>
  );
}

export default A11;