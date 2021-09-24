import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View , SafeAreaView, Button, Alert} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        width:80,
        height:80,
        backgroundColor:"green",    

      }}>

<Text> Crazy Ass </Text>
      </View>
      <Text>Hello Dessy😍</Text>
      <Image source={{
        width:100,
        height:100,
        uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0EE5I6jOyzowFq9XC-zbVXhkRsz4QrMe2Ll-7q2gx4saqhwxytJvBUkf-IjBAmGms4_Q&usqp=CAU"
      }}/>
      <StatusBar style="auto" />  
<Button title="Hit Me!" 
onPress = {() => Alert.alert("Dessy Is King","New To React",[
  {text:"Yes"},
  {text:"No!"}
])} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
