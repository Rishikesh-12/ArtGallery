import React from 'react';
import {
  AppRegistry,
  View,
  asset,
} from 'react-360';
import Entity from 'Entity';

export default class ArtGalleryModel extends React.Component {
  render() {
    return (
      <View>
        <Entity
          style={{
            transform:[
              {translate: [0 ,-230,40]},
              {scale:0.5}
            ],
          }}
          source={{
            gltf2:asset('scene.gltf')
            // obj:asset('ArtGallery.obj'),
            // mtl:asset('ArtGallery.mtl')
          }}
          lit={true}
        />
      </View>
    );
  }
};