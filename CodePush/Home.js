import React, {useState} from 'react';
import {
  Dimensions,
  ProgressBarAndroid,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {useCodePush} from './App';

const Home = () => {
  const env = 'dev';
  const whatEnv = env === 'dev' ? '__DEV__' : '__PROD__';

  return (
    <>
      <StatusBar barStyle="dark-content" translucent backgroundColor="white" />
      <View style={{flex: 1, marginTop: StatusBar.currentHeight}}>
        <View
          style={{
            flex: 1,
            padding: 32,
          }}>
          {/* <View
            style={{
              backgroundColor: 'blue',
              width: progress ? `${progress}%` : 0,
              height: 10,
            }}
          /> */}
          {/* <Text style={{fontSize: 22}}>{progress}%</Text> */}
          {/* <Text style={{fontSize: 22}}>status {status}</Text> */}
        </View>
        <View
          style={{
            flex: 1,
            padding: 32,
          }}>
          <Text
            style={{
              fontSize: 36,
            }}>
            {whatEnv} Dev
          </Text>
          <Text>Penambahan ++</Text>
          <Text>Pengurangan --</Text>
        </View>
      </View>
    </>
  );
};

export default Home;
