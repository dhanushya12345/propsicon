

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import Colors from './app/color/config';
 import Propsicon from './screens/Props ';

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{backgroundColor:'green',width:300,height:300,alignItems:'center'}}>
      <MaterialCommunityIcons
        name="rowing"
        size={150}
        color="yellow"
      />
 <Propsicon Name='Dhanushya'  Aboutme='fullstack developer'>
       
       </Propsicon>
       
       <View style={styles.box}>
        <Text>say something</Text>
        </View>
        </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },

  box: {
    borderRadius: 20,
    backgroundColor: Colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: 100,
  },
});