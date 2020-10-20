import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  asset,
  AmbientLight,
  PointLight,
} from 'react-360';
import Entity from 'Entity';
import ThreeD from './components/ThreeD';

export default class ArtGallery extends React.Component {
  render() {
    return (
      <View>
        <ThreeD/>
      </View>
    );
  }
};


AppRegistry.registerComponent('ArtGallery', () => ArtGallery);