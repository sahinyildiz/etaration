import React from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const CustomHeader = (props) => {
  return (
    <SafeAreaView style={styles.header}>
      <StatusBar
        backgroundColor="#E86433"
        barStyle="light-content"
        translucent={true}
      />
      <View style={styles.headerInLogo}>
        <View style={styles.headerLeft}>
          {
            props.back && props.back?<TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image
              source={require('../images/back.png')}
              style={{
                width: 20,
                height: 20,
              }}
            />
            </TouchableOpacity>:null
          }
        </View>
        <View style={{flex:1,alignItems:'center'}}>
          <Text
            numberOfLines={1}
            ellipsizeMode={'tail'}
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: '#121242',
            }}>
            {props.title}
          </Text>
        </View>
        <View style={styles.headerRight}/>
      </View>
    </SafeAreaView>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    height: 60,
    marginTop:StatusBar.currentHeight,
    backgroundColor:'#FFF'
  },
  headerInLogo: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    borderBottomWidth:1,
    borderColor:'#ccc',
    flexDirection:'row'
  },
  headerLeft:{
    width:50,
    alignItems:'center'
  },
  headerRight:{
    width:50
  }
});
