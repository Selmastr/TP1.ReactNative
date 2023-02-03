import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, ScrollView, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={{marginTop:70}}>
        <FlatList
          data={[
            {key:'Benoit'},
            {key:'Bernard'},
            {key:'Jean-Marc A'},
            {key:'Jérôme'},
            {key:'Jean-Marc S'},
            {key:'Catherine'},
            {key:'Pierre-Alexandre'},
            {key:'Véronique'},
            {key:'Noémie'},
            {key:'Baptiste'},
            {key:'Coralie'},
            {key:'Tracy'},
            {key:'Sophie'},
          ]}
          renderItem={({item})=><Text style={styles.cases}>{item.key}</Text>}
        />
      </View>
    </ScrollView>
   );
}

// style
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
  cases: {
    flex : 1,
    backgroundColor : "skyblue",
    padding : 15,
    marginVertical : 5,
    marginHorizontal : 0,
    fontSize:20,
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
