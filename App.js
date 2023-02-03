import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView style={{marginTop:80}}>
      <View style={{width: 400, height: 400, backgroundColor:"skyblue", margin : 5}} />
      <ScrollView horizontal={true}>
        <View style = {styles.blocs} />
        <View style = {styles.blocs} />
        <View style={styles.blocs} />
      </ScrollView>
      <View style={{width: 400, height: 400, backgroundColor:"skyblue", margin : 5 }} />
    </ScrollView>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems : "flex-end",
    justifyContent:"space-between",
    paddingTop : 60,
  },
  blocs:{
    flexDirection : "row",
    justifyContent: "flex-start",
    width : 300, 
    height:300,
    backgroundColor:"steelblue",
    margin:10,
  }, 
  titre: {
    color : "red",
    fontWeight : "bold",
    fontSize : 30,
  },
  image: {
    width:143,
    height: 45,
  }

});
