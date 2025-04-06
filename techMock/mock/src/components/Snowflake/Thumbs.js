// import React, { Fragment } from 'react';

// function Thumbs({ items, currentIndex, onThumbClick }) {
    
//     return (
//         <Fragment>
//             {
//                 items.map((catalog, idx) => (
//                     <span
//                         id={idx}
//                         key={idx}
//                         data-testid={'thumb-button-' + idx}
//                     // When a thumbnail is clicked, notify the parent
//                         onThumbClick={()=>onThumbClick(idx)}
//                     >
//                         <span
//                             className={'inline-flex w-90 pa-4 image-thumb ' +
//                                 (idx === currentIndex ? 'thumb-selected' : '')}
//                         >
//                             <span
//                                 className='mx-5 thumb'
//                                 id={idx}
//                                 style={{ backgroundImage: 'url(' + catalog.thumb + ')' }}
//                             />
//                         </span>
//                     </span>
//                 ))
//             }
//         </Fragment>
//     );
// }

// export default Thumbs;
import React from 'react';

function Thumbs({ items, currentIndex, onThumbClick }) {
  // Extracts the image file name from the URL.
  const getImageName = (url) => {
    // Assumes the URL ends with something like 'image1.jpg'
    const parts = url.split('/');
    return parts[parts.length - 1];
  };

  return (
    <div>
      {items.map((catalog, idx) => (
        <button
          key={idx}
          data-testid={'thumb-button-' + idx}
          onClick={() => onThumbClick(idx)}
          style={{
            margin: '0 10px',
            padding: '10px 15px',
            cursor: 'pointer',
            border: idx === currentIndex ? '2px solid blue' : '1px solid #ccc',
            backgroundColor: idx === currentIndex ? '#e0f0ff' : 'white',
          }}
        >
          {getImageName(catalog.thumb)}
        </button>
      ))}
    </div>
  );
}

export default Thumbs;

