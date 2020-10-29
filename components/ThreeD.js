import React from 'react';
import {
  AppRegistry,
    asset,
  View,
  AmbientLight,
} from 'react-360';
import ArtGalleryModel from './ArtGalleryModel';
import Lights from './Lights';

export default class ThreeD extends React.Component {
  render() {
    return (
      <View>
          <ArtGalleryModel/>
          <Lights/>
      </View>
    );
  }
};