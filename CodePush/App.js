import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import CodePush from 'react-native-code-push';

const App = () => {
  const env = 'dev';
  const whatEnv = env === 'dev' ? '__DEV__' : '__PROD__';

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          flex: 1,
          padding: 32,
        }}>
        <Text
          style={{
            fontSize: 36,
          }}>
          {whatEnv}
        </Text>
      </View>
    </>
  );
};

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  installMode: CodePush.InstallMode.ON_NEXT_RESUME,
})(App);
