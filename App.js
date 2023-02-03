import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:'https://www.bpesquet.fr/images/ENSC_2022.jpg'}} />
      <Image style={styles.image} source={{uri:'https://www.bpesquet.fr/images/ENSC_2022.jpg'}} />
      <Image style={styles.image} source={{uri:'https://www.bpesquet.fr/images/ENSC_2022.jpg'}} />
    </View>
// AFFICHAGE DU TITRE HELLO WORLD
//     // <View style={styles.container}>
//     //   <Text style={styles.titre}>Hello World ;)</Text>
//     //   <StatusBar style="auto" />
//     // </View>
// AFFICHAGE D'UN BLOC
//     // <View style={styles.container}>
//     //   <View style={{width: 100,    height: 100,    backgroundColor:"red",  }} />
//     //   <View style={{  width: 100,    height: 100,    backgroundColor:"orange",  }} />
//     //   <View style={{    width: 100,    height: 100,    backgroundColor:"green",  }} />
//     // </View>
   );
}

const styles = StyleSheet.create({
  //alignement vertical des cubes
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'space-around',
  // },
  //alignement horizontal des cubes
  // container: {
  //   flex: 1,
  //   flexDirection: "row",
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'flex-start',
  //   alignItems: "flex-start",
  //   marginTop:60,
  // },
  // affichage des 3 images
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems : "flex-end",
    justifyContent:"space-between",
    paddingTop : 60,
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
