import React from 'react';
import Palette from './palette';
import seedColors from './seedColors';

function App() {
  return (
    <div>
      <Palette palette={seedColors[4]}/>
    </div>
  );
}

export default App;
