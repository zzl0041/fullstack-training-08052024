import { useState } from 'react';

import { useLocation } from 'react-router-dom';

export default function Card() {
  return (
    <>
      <div className='card'>
        <p>Component name:</p>
        <input value={location.pathname.slice(1)} />
      </div>
    </>
  );
}
