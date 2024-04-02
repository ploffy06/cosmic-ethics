import * as React from 'react';
import EarthModal from '../components/space/EarthModal';

const Space = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className='space'>
        <h1>Explore Universe 2.0</h1>
        <div className='space-underline'></div>
        <div className='universe-container'>
          <EarthModal />
        </div>
    </div>
  );
}

export default Space;