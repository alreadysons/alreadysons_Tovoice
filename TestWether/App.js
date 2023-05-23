import { StatusBar } from 'expo-status-bar';
import {View,StyleSheet,Text } from 'react-native';

export default function App() {
  return (
      <View style={Style.container}>
        <StatusBar style='light'/>
        <View style={Style.city}>
          <Text style={Style.cityName}>WONJU</Text>
        </View>
        <View style = {Style.wether}>
          <View style = {Style.day}>
          <Text stytle = {Style.temp}>27</Text>
          <Text style = {Style.desp}>sunny</Text>
          </View>
        </View>
      </View>
  );
}
const Style = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "khaki",
  },
  city : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center",
  },
  cityName : {
    fontSize : 68,
    color : "black",
    fontWeight : "500",
  },  
  wether : {
    flex : 3,
  },
  day : {
    flex : 1,
    backgroundColor : "red", 
    justifyContent : "center",  
    alignItems : "center",
  },
  temp : {
    fontSize : 158,
  },
  desp : {
    fontSize : 100,
  }
});
