import React, {Component, createContext, useContext, useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
import codePush from 'react-native-code-push';

const CodePushContext = createContext();

const useCodePush = () => useContext(CodePushContext);

const CodePushProvider = () =>
  codePush()(
    class extends Component {
      state = {
        status: null,
        progress: null,
        totalBytes: null,
      };

      codePushStatusDidChange(status) {
        this.setState({status});
      }

      codePushDownloadDidProgress(progress) {
        this.setState({progress: progress.receivedBytes});
        this.setState({totalBytes: progress.totalBytes});
      }

      render() {
        return (
          <CodePushContext.Provider
            value={{
              status: this.state.status,
              progress: this.state.progress,
              totalBytes: this.state.totalBytes,
            }}>
            {Home}
          </CodePushContext.Provider>
        );
      }
    },
  );

const Home = () => {
  const {progress, totalBytes, status} = useCodePush();

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
        <Text style={{fontSize: 22}}>
          {progress} / {totalBytes}
        </Text>
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
    </>
  );
};

export default CodePushProvider;
// export default codePush({
//   checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
//   installMode: codePush.InstallMode.IMMEDIATE,
// })(App);
