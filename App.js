import { StatusBar } from 'expo-status-bar';
import { Component, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Alert, Image } from 'react-native';

export default function App() {
  const[text, setText] = useState('');
  const showAlert = (texte) => {
    Alert.alert('Hello', texte.nativeEvent.text)
  };
  
  return(
    <View style={styles.container}>
      <TextInput
        style={{height:40}}
        placeholder="Saisissez votre prénom"
        onSubmitEditing={showAlert}
      />
    </View>

  );
    
  };

  
  
  

// style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems : "center",
    justifyContent:"center",
    paddingTop : 60,
  },
  buttonContainer:{
    margin:20,
    justifyContent:"center",
    backgroundColor: 'skyblue',
    padding : 15,
    width : 320,
  },
  buttonText:{
    fontSize:20,
    textAlign:"center",
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
