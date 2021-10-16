import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';
import CustomHeader from './components/CustomHeader';
import CustomInput from './components/CustomInput';
import LoadingMed from './components/Loading';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const Detail = (props) => {
  const [loader, setLoader] = useState(0);
  useEffect(() => {
    console.log(props.route.params.item.avatar)
  },[]);
  return (
    <SafeAreaView style={styles.safeArea}>
      {loader?<LoadingMed/>:null}
      <CustomHeader back={true} navigation={props.navigation} title={"Simpsons Detail"}/>
      <ScrollView style={styles.addArea}>
        <View style={styles.imageArea}>
          <Image
            source={{ uri: props.route.params.item.avatar }}
            style={styles.itemAvatar}
            resizeMode="contain"
          />
        </View>
        <View style={styles.nameArea}>
          <Text style={styles.itemName}>{props.route.params.item.name}</Text>
        </View>
        <View style={styles.nameArea}>
          <Text style={styles.itemNameJob}>{props.route.params.item.job}</Text>
        </View>
        <View style={styles.nameArea}>
          <Text style={styles.itemNameAbout}>{props.route.params.item.about}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
    flex: 1,
  },
  addArea:{
    marginHorizontal:12,
    marginTop:12
  },
  itemAvatar:{
    width:200,
    height:200
  },
  imageArea:{
    alignItems:'center'
  },
  itemName:{
    fontSize:22,
    fontWeight:'bold'
  },
  itemNameJob:{
    fontSize:18,
    color:'#444'
  },
  nameArea:{
    alignItems:'center'
  },
  itemNameAbout:{
    fontSize:16,
    color:'#444',
    marginTop:15,

  }
});
export default Detail;
