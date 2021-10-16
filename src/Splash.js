import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import { CommonActions } from '@react-navigation/native';

const Splash = (props) => {
  useEffect(() => {
    loginCotrol();
  },[]);

  const loginCotrol = async () =>{
    setTimeout(function(){
      props.navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            { name: 'Home' },
          ],
        })
      );
    }, 3000)
  }
  return (
    <SafeAreaView style={styles.splashArea}>
      <StatusBar
        backgroundColor="#E86433"
        barStyle="light-content"
        translucent={true}
      />
      <Image
        source={require('./images/logo.png')}
        style={{width: 175, height: 100}}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  splashArea: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
});
export default Splash;
