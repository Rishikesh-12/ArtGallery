import React from 'react';
import {
  AppRegistry,
  View,
  asset,
  VrButton,
} from 'react-360';
import ArtGalleryModel from './ArtGalleryModel';
import Lights from './Lights';
import Entity from 'Entity';

export default class ThreeD extends React.Component {

  constructor(){
    super();
    this.state={
      xCurPos:1,
      zCurPos:0,
      xTarPos:1,
      zTarPos:0,
    };
    this.Lerp = this.Lerp.bind(this);
  }

  componentDidMount(){
   this.Lerp();
  }
  
  Lerp(){
    if(Math.abs(this.state.xCurPos - this.state.xTarPos) > 0.3)
    {
      this.setState({
        xCurPos:this.state.xCurPos * (1 - 0.10) + this.state.xTarPos * 0.10  
      });

       postMessage({type:"newPosition", x:this.state.xCurPos,z:this.state.zCurPos});
    }
    else if(Math.abs(this.state.zCurPos - this.state.zTarPos) > 0.3)
    {
      this.setState({
        zCurPos:this.state.zCurPos * (1 - 0.1) + this.state.zTarPos * 0.1  
      });

      postMessage({type:"newPosition", x:this.state.xCurPos,z:this.state.zCurPos});
    }
    requestAnimationFrame(this.Lerp);
  }

  render() {
    return (
      <View>

        <VrButton 
          onClick={()=>{
            this.state.xTarPos=1;
            this.state.zTarPos=1;
          }}>
          <Entity
            source={{
              obj:asset('Marker.obj'),
              mtl:asset('Marker.mtl')
            }}
            lit={true}
            style={{
              transform: [
                {translate: [-1,-32,-1]},
                {scale: 3}
              ]
            }}
          />
        </VrButton>



        <VrButton 
          onClick={()=>{
            this.state.xTarPos=35;
            this.state.zTarPos=250;
        }}>
          <Entity
            source={{
              obj:asset('Marker.obj'),
              mtl:asset('Marker.mtl')
            }}
            lit={true}
            style={{
              transform: [
                {translate: [-35,-32,-250]},
                {scale: 3}
              ]
            }}
          />
        </VrButton>

        <VrButton 
          onClick={()=>{
            this.state.xTarPos=140;
            this.state.zTarPos=100;
          }}>
          <Entity
            source={{
              obj:asset('Marker.obj'),
              mtl:asset('Marker.mtl')
            }}
            lit={true}
            style={{
              transform: [
                {translate: [-140,-32,-100]},
                {scale: 3}
              ]
            }}
          />
        </VrButton>


        <VrButton 
          onClick={()=>{
            this.state.xTarPos=45;
            this.state.zTarPos=-150;
          }}>
          <Entity
            source={{
              obj:asset('Marker.obj'),
              mtl:asset('Marker.mtl')
            }}
            lit={true}
            style={{
              transform: [
                {translate: [-45,-32,150]},
                {scale: 3}
              ]
            }}
          />
        </VrButton>

        <VrButton 
          onClick={()=>{
            this.state.xTarPos=105;
            this.state.zTarPos=-300;
          }}>
          <Entity
            source={{
              obj:asset('Marker.obj'),
              mtl:asset('Marker.mtl')
            }}
            lit={true}
            style={{
              transform: [
              {translate: [-105,-32,300]},
                {scale: 3}
              ]
            }}
          />
        </VrButton>

        <VrButton 
          onClick={()=>{
            this.state.xTarPos=-150;
            this.state.zTarPos=-50;
          }}>
          <Entity
            source={{
              obj:asset('Marker.obj'),
              mtl:asset('Marker.mtl')
            }}
            lit={true}
            style={{
              transform: [
                {translate: [150,-32,50]},
                {scale: 3}
              ]
            }}
          />
        </VrButton>


        <VrButton 
          onClick={()=>{
            this.state.xTarPos=-150;
            this.state.zTarPos=170;
          }}>
          <Entity
            source={{
              obj:asset('Marker.obj'),
              mtl:asset('Marker.mtl')
            }}
            lit={true}
            style={{
              transform: [
                {translate: [150,-32,-170]},
                {scale: 3}
              ]
            }}
          />
        </VrButton>


        <VrButton 
          onClick={()=>{
            this.state.xTarPos=-350;
            this.state.zTarPos=-250;
          }}>
          <Entity
            source={{
              obj:asset('Marker.obj'),
              mtl:asset('Marker.mtl')
            }}
            lit={true}
            style={{
              transform: [
                {translate: [350,-32,250]},
                {scale: 3}
              ]
            }}
          />
        </VrButton>



        <ArtGalleryModel/>
        <Lights/>
      </View>
    );
  }
};