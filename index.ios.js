'use strict';

var React = require('react-native');
var Orientation = require('react-native-orientation');

var {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

var OrientationTest = React.createClass({
  componentWillMount: function() {
    Orientation.unlockAllOrientations();
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <TouchableHighlight
          onPress={() => Orientation.lockToPortrait()}
          style={{backgroundColor: "red", borderWidth: 1, borderColor: "white", padding: 10, borderRadius: 4}}>
          <Text style={styles.instructions}>Lock</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('OrientationTest', () => OrientationTest);