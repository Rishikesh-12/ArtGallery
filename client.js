// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance,Location} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const customLocation = new Location([0,0,0]);
  
  r360.runtime.executor._worker.addEventListener(
    'message',
    (e)=>onMessage(e,r360,customLocation)
  );

  r360.renderToLocation(
    r360.createRoot('ArtGallery'),
    customLocation
  );
 
  const player = r360.compositor.createVideoPlayer('myplayer');
  player.setSource('./static_assets/cloud1.mp4','2D','mp4','RECT');
  player.play();
  player.setLoop(true);
  // Load the initial environment
  r360.compositor.setBackgroundVideo('myplayer');
}

function onMessage(e,r360,customLocation){
  if(e.data.type === 'newPosition'){
    customLocation.setWorldPosition(e.data.x,0,e.data.z);
  }
}

window.React360 = {init};
