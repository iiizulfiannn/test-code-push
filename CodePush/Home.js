import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {useCodePush} from './App';

const Home = () => {
  const {progress, totalBytes, status} = useCodePush();

  const env = 'dev';
  const whatEnv = env === 'dev' ? '__DEV__' : '__PROD__';

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            padding: 32,
          }}>
          <Text style={{fontSize: 22}}>{(progress / totalBytes) * 100}%</Text>
          <Text style={{fontSize: 22}}>status {status}</Text>
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
        </View>
      </View>
    </>
  );
};

export default Home;
