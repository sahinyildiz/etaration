import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from 'react-native';
import LottieView from 'lottie-react-native';
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const Loading = (props) => {
  return (
    <View style={styles.loaderArea}>
      <LottieView style={styles.lottie} source={require("../images/loader.json")} autoPlay loop />
    </View>
  );
};
const styles = StyleSheet.create({
  loaderArea: {
    width:deviceWidth,
    height:deviceHeight,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    zIndex:9,
    position:"absolute",
    top:0,
    left:0,
    justifyContent:"center",
    alignItems:"center"
  },
  lottie:{
    width:deviceWidth/3,
    height:deviceHeight/3
  }
});
export default Loading;
