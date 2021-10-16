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

const Add = (props) => {
  const [loader, setLoader] = useState(0);
  const [nameSurname, setNameSurname] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [about, setAbout] = useState("");
  const [ımageLink, setImageLink] = useState("");

  const addBtn = async () =>{
    if(nameSurname==""){
      Alert.alert(
        "Etaration",
        "Please enter Name Surname",
        [
          {
            text: "Ok",
          }
        ]
      );
    }
    else if(jobTitle==""){
      Alert.alert(
        "Etaration",
        "Please enter Job Title",
        [
          {
            text: "Ok",
          }
        ]
      );
    }
    else if(about==""){
      Alert.alert(
        "Etaration",
        "Please enter About",
        [
          {
            text: "Ok",
          }
        ]
      );
    }
    else if(ımageLink==""){
      Alert.alert(
        "Etaration",
        "Please enter Image Link",
        [
          {
            text: "Ok",
          }
        ]
      );
    }
    else{
      setLoader(1)
      let simpsonsList = await AsyncStorage.getItem('simpsonsList');
      let simpsonsListParse = JSON.parse(simpsonsList)
      let randNumber = Math.floor(Math.random() * 100) + 1 ;
      simpsonsListParse.push({
        id:randNumber,
        name:nameSurname,
        avatar:ımageLink,
        job:jobTitle,
        about:about,
      })
      AsyncStorage.setItem("simpsonsList", JSON.stringify(simpsonsListParse), (err)=> {
        if(err){
          console.log("an error");
          throw err;
        }
        else{
          props.navigation.goBack();
          const getControl = props?.route?.params?.getControl();
          if(getControl)
          props.route.params.getControl();
        }
      }).catch((err)=> {
          console.log("error is: " + err);
      });
      setLoader(0)
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      {loader?<LoadingMed/>:null}
      <CustomHeader back={true} navigation={props.navigation} title={"Simpsons Add"}/>
      <ScrollView style={styles.addArea}>
        <View style={styles.formArea}>
          <View style={styles.formAreaItem}>
            <CustomInput
              label={"Name Surname"}
              labelStyle={{
                marginBottom: 10,
                fontSize: 14,
                color: '#123212',
              }}
              onChangeText={(text) => {
                setNameSurname(text)
              }}
              placeHolderText={"Bart Simpson"}
            />
          </View>
          <View style={styles.formAreaItem}>
            <CustomInput
              label={"Job Title"}
              labelStyle={{
                marginBottom: 10,
                fontSize: 14,
                color: '#123212',
              }}
              onChangeText={(text) => {
                setJobTitle(text)
              }}
              placeHolderText={"Retired"}
            />
          </View>
          <View style={styles.formAreaItem}>
            <CustomInput
              label={"About Him/Her"}
              labelStyle={{
                marginBottom: 10,
                fontSize: 14,
                color: '#123212',
              }}
              multiline = {true}
              numberOfLines = {4}
              style={{
                height:100,
                textAlignVertical: 'top'
              }}
              onChangeText={(text) => {
                setAbout(text)
              }}
              placeHolderText={"Margaret Evelyn Maggie Simpson[9] (born December 17, 1989), is the 1-year-old"}
            />
          </View>
          <View style={styles.formAreaItem}>
            <CustomInput
              label={"Image Link"}
              labelStyle={{
                marginBottom: 10,
                fontSize: 14,
                color: '#123212',
              }}
              onChangeText={(text) => {
                setImageLink(text)
              }}
              placeHolderText={"http://placeimg.com/640/480/city"}
            />
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={() => addBtn()} style={styles.itemAdd}>
          <Text style={styles.itemDeleteText}>New Add</Text>
        </TouchableOpacity>
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
  itemDeleteText:{
    color:'#fff',
    fontSize:14
  },
  itemAdd:{
    backgroundColor:'#E86433',
    paddingVertical:15,
    paddingHorizontal:15,
    borderRadius:20,
    marginVertical:20,
    justifyContent:'center',
    alignItems:'center',
  },
  formAreaItem:{
    marginBottom:10
  }
});
export default Add;
