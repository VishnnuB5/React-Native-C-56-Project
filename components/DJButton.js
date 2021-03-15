import * as React from 'react';
import {  View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import {Audio} from 'expo-av';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
class DJButton extends React.Component {
   playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: this.props.uri },
      { shouldPlay: true }
    );
  }
  render() {
    return (
      <TouchableOpacity
        style={[styles.forButton,{backgroundColor:this.props.bgcolor}]}
        onPress={this.playSound}>
        <Text
          style={styles.forText}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles=StyleSheet.create({
  forButton:{
marginLeft: 60,
          borderWidth: 1,
          borderColor: 'rgb(0,0,0,0.2)',
          alignItems: 'center',
          justifyContent: 'center',
          width: 200,
          height: 100,
          backgroundColor: 'red',
          borderRadius: 100,
          marginTop:20,
  },
  forText:{
    color:'rgb(255,255,255)',
fontWeight: 'bold',
fontSize: 20,
  }
})

export default DJButton;