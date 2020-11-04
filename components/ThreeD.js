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
      xCurPos:0,
      zCurPos:0,
      xTarPos:0,
      zTarPos:0,
    };
    this.Lerp = this.Lerp.bind(this);
  }

  componentDidMount(){
   this.Lerp();
  }
  
  Lerp(){
    if(Math.abs(this,this.state.xCurPos - this,state.xTarPos) > 0.3)
    {
      this.setState({
        xCurPos:this.state.xCurPos * (1 - 0.05) + this.state.xTarPos * 0.05  
      });

      postMessage({type:"newPosition", x:this.state.xCurPos,z:this.state.zCurPos});
    }
    else if(Math.abs(this,this.state.zCurPos - this,state.zTarPos) > 0.3)
    {
      this.setState({
        xCurPos:this.state.zCurPos * (1 - 0.05) + this.state.zTarPos * 0.05  
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
            this.state.xTarPos=-0;
            this.state.zTarPos=-0;
          }}>
          <Entity
            source={{
              obj:asset('Marker.obj'),
              mtl:asset('Marker.mtl')
            }}
            lit={true}
            style={{
              transform: [
                {translate: [0,-32,0]},
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