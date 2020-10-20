import React from 'react';
import {
  AppRegistry,
    asset,
  View,
  AmbientLight,
} from 'react-360';
import ArtGalleryModel from './ArtGalleryModel';
import Lights from './Lights';
import Entity from 'Entity';

export default class ThreeD extends React.Component {
  render() {
    return (
      <View>

        {/* <AmbientLight intensity={1.0}
          style={{
            color:'white',
            transform:[
              {translate:[0,0,0]},
            ]
          }}
        /> */}
          
          {/* <Entity
            source={{
                obj:asset('Marker.obj'),
                mtl:asset('Marker.mtl')
            }}
            lit={true}
            style={{
                transform:[
                    {translate:[-1000 ,-150,-550]},
                    {scale:1}
                ]
            }}
          /> */}

          <ArtGalleryModel/>
          <Lights/>
      </View>
    );
  }
};