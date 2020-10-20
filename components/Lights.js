import React from 'react';
import {
  AppRegistry,
  View,
  AmbientLight,
  PointLight,
} from 'react-360';

export default class Lights extends React.Component {
  render() {
    return (
      <View>

        <AmbientLight intensity={0.6}
          style={{
            color:'white',
            transform:[
              {translate:[0,0,0]},
            ]
          }}
        />

        <PointLight
          intensity={0.6}
          style={{
            color: '#F5F5DC',
            transform:[
              {translate:[140,10,10]},
            ]
          }}
          distance={500}
        />

        <PointLight
          intensity={0.6}
          style={{
            color: '#F5F5DC',
            transform:[
              {translate:[140,10,-300]},
            ]
          }}
          distance={500}
        />

        <PointLight
          intensity={0.6}
          style={{
            color: '#F5F5DC',
            transform:[
              {translate:[-140,-100,-300]},
            ]
          }}
          distance={500}
        />

        <PointLight
          intensity={0.6}
          style={{
            color: '#F5F5DC',
            transform:[
              {translate:[280,-100,-350]},
            ]
          }}
          distance={500}
        />


        <PointLight
          intensity={0.6}
          style={{
            color: '#F5F5DC',
            transform:[
              {translate:[-190,10,450]},
            ]
          }}
          distance={500}
        />

        <PointLight
          intensity={0.6}
          style={{
            color: '#F5F5DC',
            transform:[
              {translate:[140,-100,450]},
            ]
          }}
          distance={500}
        />

        <PointLight
          intensity={0.6}
          style={{
            color: '#F5F5DC',
            transform:[
              {translate:[530,-100,320]},
            ]
          }}
          distance={500}
        />



        <PointLight
          intensity={0.6}
          style={{
            color: '#F5F5DC',
            transform:[
              {translate:[300,10,100]},
            ]
          }}
          distance={500}
        />

        <PointLight
          intensity={0.6}
          style={{
            color: '#F5F5DC',
            transform:[
              {translate:[650,10,100]},
            ]
          }}
          distance={500}
        />

        <PointLight
          intensity={0.6}
          style={{
            color: '#F5F5DC',
            transform:[
              {translate:[950,10,-400]},
            ]
          }}
          distance={500}
        />

        {/* <PointLight
          intensity={0.8}
          style={{
            color: '#F5F5DC',
            transform:[
              {translate:[-405,1,-600]},
            ]
          }}
          distance={450}
        />

        <PointLight
          intensity={0.8}
          style={{
            color: '#F5F5DC',
            transform:[
              {translate:[-305,1,-1200]},
            ]
          }}
          distance={4500}
        />

        <PointLight
          intensity={0.8}
          style={{
            color: '#F5F5DC',
            transform:[
              {translate:[-305,1,-2200]},
            ]
          }}
          distance={4500}
        />

        <PointLight
          intensity={0.8}
          style={{
            color: '#F5F5DC',
            transform:[
              {translate:[-305,1,-3200]},
            ]
          }}
          distance={4500}
        />

        <PointLight
          intensity={0.8}
          style={{
            color: '#F5F5DC',
            transform:[
              {translate:[-1205,1,-600]},
            ]
          }}
          distance={4500}
        />

        <PointLight
          intensity={0.8}
          style={{
            color: '#F5F5DC',
            transform:[
              {translate:[-2205,1,-200]},
            ]
          }}
          distance={4500}
        />

        <PointLight
          intensity={0.8}
          style={{
            color: '#F5F5DC',
            transform:[
              {translate:[-105,1,-2200]},
            ]
          }}
          distance={4500}
        />

        <PointLight
          intensity={0.8}
          style={{
            color: '#F5F5DC',
            transform:[
              {translate:[-1905,1,-1200]},
            ]
          }}
          distance={4500}
        />

        <PointLight
          intensity={0.8}
          style={{
            color: '#F5F5DC',
            transform:[
              {translate:[-905,1,-1200]},
            ]
          }}
          distance={4500}
        />

        <PointLight
          intensity={0.8}
          style={{
            color: '#F5F5DC',
            transform:[
              {translate:[-2905,1,-2800]},
            ]
          }}
          distance={4500}
        />


        <PointLight
          intensity={0.8}
          style={{
            color: '#F5F5DC',
            transform:[
              {translate:[-2505,1,-1800]},
            ]
          }}
          distance={4500}
        /> */}

      </View>
    );
  }
};