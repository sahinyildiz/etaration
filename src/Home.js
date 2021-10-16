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
  Alert,
} from 'react-native';
import CustomHeader from './components/CustomHeader';
import LoadingMed from './components/Loading';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const Home = (props) => {
  const [loader, setLoader] = useState(0);
  const [simpsonsList, setSimpsonsList] = useState([]);

  useEffect(() => {
    getControl()
  },[]);

  const getControl = async () =>{
    setLoader(1)
    let simpsonsList = await AsyncStorage.getItem('simpsonsList');
    if(simpsonsList !== null){
        setSimpsonsList(JSON.parse(simpsonsList))
        setLoader(0)
    }
    else
    {
      getAll();
    }
  }

  const getAll = async () =>{
    setLoader(1)
    await axios.get("https://5fc9346b2af77700165ae514.mockapi.io/simpsons").then(async ({data}) => {
      if(data){
        AsyncStorage.setItem("simpsonsList", JSON.stringify(data), (err)=> {
          if(err){
            console.log("an error");
            throw err;
          }
          setSimpsonsList(data)
        }).catch((err)=> {
            console.log("error is: " + err);
        });
      }
    }).catch(err => {
        console.log(err);
    });
    setLoader(0)
  }

  const itemDeleteBtn = (id) =>{
    Alert.alert(
      "Etaration",
      "Are you sure you want to perform this operation?",
      [
        {
          text: "No",
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () => {
            itemDeleteFunc(id)
          }
        }
      ]
    );
  }

  const itemDetailBtn = (item) =>{
    props.navigation.navigate('Detail',{item:item})
  }

  const itemDeleteFunc = async (id) => {
    try {
      let simpsonsList = await AsyncStorage.getItem('simpsonsList');
      let simpsonsListParse = JSON.parse(simpsonsList);
      let newSimpsonsList = [];
      simpsonsListParse.map((item)=>{
        if (item.id!=id) {
          newSimpsonsList.push({
            id:item.id,
            name:item.name,
            avatar:item.avatar,
            job:item.job,
            about:item.about,
          })
        }
      })
      AsyncStorage.setItem("simpsonsList", JSON.stringify(newSimpsonsList), (err)=> {
        if(err){
          console.log("an error");
          throw err;
        }
        else{
          getControl();
        }
      }).catch((err)=> {
          console.log("error is: " + err);
      });
    } catch (err) {
      return;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {loader?<LoadingMed/>:null}
      <CustomHeader title={"Simpsons"}/>
      <ScrollView style={styles.homeArea}>
        <View style={styles.listArea}>
          {
            simpsonsList.length > 0 ? simpsonsList.map((item)=>{
              return <View key={item.id} style={styles.listAreaItem}>
                <TouchableOpacity style={styles.itemDetailbtn} activeOpacity={0.8} onPress={() => {itemDetailBtn(item)}}>
                  <View>
                    <Image
                      source={{ uri: item.avatar }}
                      style={styles.itemAvatar}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={styles.itemNameArea}>
                    <Text style={styles.itemName}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.itemDeleteArea}>
                  <TouchableOpacity activeOpacity={0.8} onPress={() => {itemDeleteBtn(item.id)}} style={styles.itemDelete}>
                    <Text style={styles.itemDeleteText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            }):<Text style={{fontSize: 14,textAlign: 'center'}}>Veri Bulunamadı !</Text>
          }
        </View>
      </ScrollView>
      <View>
        <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('Add',{getControl:getControl})} style={styles.itemAdd}>
          <Text style={styles.itemDeleteText}>New Add</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
    flex: 1,
  },
  listArea:{
    marginHorizontal:12,
    marginTop:12
  },
  listAreaItem:{
    flexDirection:'row',
    marginBottom:12,
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius:20
  },
  itemAvatar:{
    width:50,
    height:50
  },
  itemNameArea:{
    justifyContent:'center',
    flex:1
  },
  itemName:{
    fontSize:14,
    marginLeft:10
  },
  itemDeleteArea:{
    justifyContent:'center'
  },
  itemDelete:{
    backgroundColor:'red',
    marginRight:20,
    paddingVertical:5,
    paddingHorizontal:15,
    borderRadius:5
  },
  itemDeleteText:{
    color:'#fff',
    fontSize:14
  },
  itemAdd:{
    backgroundColor:'#E86433',
    marginHorizontal:20,
    paddingVertical:15,
    paddingHorizontal:15,
    borderRadius:20,
    marginVertical:20,
    justifyContent:'center',
    alignItems:'center',
  },
  itemDetailbtn:{
    flex:1,
    flexDirection:'row',
    padding:10
  }
});
export default Home;
