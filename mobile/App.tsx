import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ButtonProps {
  title: string;
}


export function Button(props: ButtonProps){
  return(
    <TouchableOpacity style={styles.button}>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello peach!</Text>
      <StatusBar style="auto" />
      <Button title='ME' />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9aa66',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  },
  button:{
    margin: 6,
    padding: 10,
    backgroundColor: '#ef6fefaa',

  }
});
