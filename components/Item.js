import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const Item = ({ itemImg, itemName, stars, amount,description }) => {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    Roboto_Black: require('../assets/fonts/Roboto-Light.ttf'),
    Roboto_Bold: require('../assets/fonts/Roboto-Bold.ttf'),
    Roboto_Medium: require('../assets/fonts/Roboto-Medium.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      <TouchableOpacity
        style={style.container}
        onPress={()=> {
          navigation.navigate("Preview", {
           itemName,
            itemImg,
            description,
            stars,
            amount
          })
      }}>
        <Image source={itemImg} style={style.image} />
        <View style={style.imageView}>
      </View>
        <View style={style.itemDetailsContainer}>
          <Text style={style.itemDetailsName}>{itemName}</Text>
          <Text>{stars}</Text>
          <Text style={style.itemDetailsAmount}>{amount}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginBottom: 45,
    marginHorizontal: 30,
    marginTop:20,
  },

  itemDetailsContainer: {
    marginLeft: 30,
  },

  imageView: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor:"#fff",
    position: 'absolute',
    left: -10,
    top: -20,
    alignSelf:"center",
    zIndex:-1
},

  image: {
    width: 100,
    height: 100,
  },

  itemDetailsName: {
    color: "#000",
    fontSize: 17,
    fontFamily: 'Roboto_Bold'
  },

  itemDetailsAmount: {
    marginTop: 20,
    fontSize: 20,
    fontWeight:800,
    color: '#525bdd'
  },
});

export default Item;
