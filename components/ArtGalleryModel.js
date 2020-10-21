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
              {scale:500}
            ],
          }}
          source={{
            gltf2:asset('scene.gltf')
            // obj:asset('ArtGallery.obj'),
            // mtl:asset('ArtGallery.mtl')

            // obj:asset('untitled.obj'),
            // mtl:asset('untitled.mtl')
            // gltf2:asset('untitled.gltf')


          }}
          lit={true}
        />
      </View>
    );
  }
};