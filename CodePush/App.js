import React, {Component, createContext, useContext} from 'react';
import {Text, View} from 'react-native';
import codePush from 'react-native-code-push';
import Home from './Home';

const CodePushContext = createContext();

export const useCodePush = () => useContext(CodePushContext);

class App extends Component {
  state = {
    status: null,
    progress: null,
  };

  codePushStatusDidChange(status) {
    switch (status) {
      case codePush.SyncStatus.CHECKING_FOR_UPDATE:
        this.setState({status: `${status} Checking for update.`});
        break;
      case codePush.SyncStatus.DOWNLOADING_PACKAGE:
        this.setState({status: `${status} Downloading package.`});
        break;
      case codePush.SyncStatus.AWAITING_USER_ACTION:
        this.setState({status: `${status} Awaiting user action.`});
        break;
      case codePush.SyncStatus.INSTALLING_UPDATE:
        this.setState({status: `${status} Installing update.`});
        break;
      case codePush.SyncStatus.UP_TO_DATE:
        this.setState({status: `${status} App up to date.`});
        break;
      case codePush.SyncStatus.UPDATE_IGNORED:
        this.setState({status: `${status} Update cancelled by user.`});
        break;
      case codePush.SyncStatus.UPDATE_INSTALLED:
        this.setState({
          status: `${status} Update installed and will be applied on restart.`,
        });
        codePush.restartApp();
        break;
      case codePush.SyncStatus.UNKNOWN_ERROR:
        this.setState({status: `${status} An unknown error occurred.`});
        break;
    }
  }

  codePushDownloadDidProgress(progress) {
    this.setState({
      progress: progress
        ? (progress.receivedBytes / progress.totalBytes) * 100
        : 0,
    });
  }

  render() {
    const {status, progress} = this.state;
    return (
      <CodePushContext.Provider value={{status, progress}}>
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'blue',
            width: progress ? `${progress}%` : '100%',
            // height: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>{progress}%</Text>
        </View>
        <Home />
      </CodePushContext.Provider>
    );
  }
}
App = codePush({
  // updateDialog: true,
  installMode: codePush.InstallMode.IMMEDIATE,
  // checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
})(App);

export default App;
// export default codePush({
//   checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
//   installMode: codePush.InstallMode.IMMEDIATE,
// })(App);
