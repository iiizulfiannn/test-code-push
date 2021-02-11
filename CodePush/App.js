import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import codePush from 'react-native-code-push';

const App = () => {
  const env = 'prod';
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

// export default App;

/**
 * if in console, 400: An update check must include a valid deployment key - please check that your app has been configured correctly. To view available deployment keys, run 'code-push deployment ls <appName> -k'.
 * active code below
 */

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESUME,
})(App);
