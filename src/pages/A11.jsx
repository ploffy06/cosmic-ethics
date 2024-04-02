import * as React from 'react';
import EarthModal from '../components/space/EarthModal';

const Space = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className='space'>
        <h1>Universe A-11: The Aurora Mission Tragedy</h1>
        <div className='underline'></div>
        <div className='universe-container'>
          <EarthModal />
        </div>
    </div>
  );
}

export default Space;