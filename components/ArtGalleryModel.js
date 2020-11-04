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
              {translate: [0 ,-30,40]},
              {scale:0.5}
            ],
          }}
          source={{
            gltf2:asset('scene.gltf')
          }}
          lit={true}
        />
      </View>
    );
  }
};