import * as React from 'react';
import { Text, View,StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style={styles.forTextContainer}>
      <Text style={styles.forText}>
      DJ Mixer App
      </Text>
      </View>
    )
  }
  
}

const styles=StyleSheet.create({
  forTextContainer:{
backgroundColor:'orange'
  },
  forText:{
color:'grey',
padding:20,
fontSize:22,
fontWeight:'bold',
textAlign:'center'
  }
})

export default AppHeader;