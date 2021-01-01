import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='700px' height='auto' />
        <div>
          {
            box.map((face, i) => { // had to change in App.js box: {} to box: [] as map only works with arrays
              return (
                <div key={i} 
                  className='bounding-box' 
                  style={{top: face.topRow, right: face.rightCol, bottom: face.bottomRow, left: face.leftCol}}></div>
                );
              })
            } 
        </div>
      </div>
    </div>
  );
}

// Original Code
// const FaceRecognition = ({ imageUrl, box }) => {
//   return (
//     <div className='center ma'>
//       <div className='absolute mt2'>
//         <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
//         <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
//       </div>
//     </div>
//   );
// }

export default FaceRecognition;
