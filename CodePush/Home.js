import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  ProgressBarAndroid,
  StatusBar,
  Text,
  View,
} from 'react-native';
import Config from 'react-native-config';
import {useCodePush} from './App';
import KwKw from './KwKw';

const Home = () => {
  const environment = Config.ENVIRONMENT;
  // const whatEnv =
  //   environment === 'development'
  //     ? '__DEV__'
  //     : environment === 'production' && '__PROD__';

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
            {environment} Dev
          </Text>
          <Text>Penambahan ++</Text>
          <Text>Pengurangan --</Text>
          <Hem />
        </View>
      </View>
    </>
  );
};

const Hem = () => {
  return (
    <View>
      <Text>Haaai</Text>
      <KwKw />
    </View>
  );
};

export default Home;
