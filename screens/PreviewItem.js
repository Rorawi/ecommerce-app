import React from "react";
import { Alert, Image, StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { EvilIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';


const PreviewItem = ({ route}) => {
    let [fontsLoaded] = useFonts({
        Roboto_Black: require('../assets/fonts/Roboto-Light.ttf'),
        Roboto_Bold: require('../assets/fonts/Roboto-Bold.ttf'),
        Roboto_Medium: require('../assets/fonts/Roboto-Medium.ttf')
      });
    
      if (!fontsLoaded) {
        return null;
      }

  const { itemName, itemImg, stars, amount,description } = route.params;
//   console.log(route.params);
  return (
    <View style={styles.container}>
      <EvilIcons name="heart" size={24} color="black" style={styles.love}/>
      <Image source={itemImg} style={styles.image}/>
      <View style={styles.imageView}>
      </View>
     
        <View>
     <Text style={styles.itemDetailsName}>{itemName}</Text>
      <Text style={styles.itemDetailsStar}>Review: {stars}</Text>
      <View style={styles.hr}></View>
      <Text style={styles.itemDetailsText}>{description}</Text>
      <Text style={styles.itemshortText}>Material :91% polyester,9% elastene</Text>
     </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>XS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>S</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>M</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>L</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>XL</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.addToCart}>
        <View style={styles.amount}>
        <Text style={[styles.total,styles.addToCartTextColor]}>Total Amount</Text>
        <Text style={[styles.price,styles.addToCartTextColor]}>{amount}</Text>
        </View>
        <TouchableOpacity style={styles.addToCartBtn}>
            <Text style={[styles.addToCartBtnText,styles.addToCartTextColor]}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EFEFF6',
        flex:1,
        color:'#fff',
        marginTop: -20,
        marginHorizontal: 15
    },

    image: {
        flex:.9,
        width: 180,
        height: 200,
        alignSelf: 'center',
    },

    imageView: {
        width:250,
        height: 250,
        borderRadius:150,
        backgroundColor:"#fff",
        position: 'absolute',
        top: 20,
        alignSelf:"center",
        zIndex:-1
    },
    love: {
        backgroundColor: '#fff',
        padding:9.5,
        width:40,
        height: 40,
        borderRadius: 30,
        shadowColor: '#171717',
        elevation: 10,
        position: 'relative',
        top: 28,
        left:340

      },

    hr: {
        width: 30,
        height: 4,
        borderRadius: 15,
        backgroundColor: '#757DEF',
    },
    itemDetailsName: {
        fontSize: 25,
        marginBottom:5,
        fontFamily: 'Roboto_Bold'
    },
    itemDetailsStar: {
        fontSize: 12,
        fontWeight: 600,
        marginBottom:15,
        fontFamily: 'Roboto_Black',
    },
    itemDetailsText: {
        marginTop:15,
        fontFamily: 'Roboto_Black',
    },

    itemshortText: {
        marginVertical: 20,
        padding: 10,
        margin: -15,
        backgroundColor: '#fff',
        color: '#757DEF',
        fontFamily: 'Roboto_Medium'
    },

    buttons: {
        flex: .1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        margin:5,
    },

    btnText: {
        alignSelf: 'center',
    },
    
    btn: {
        minWidth: 30,
        backgroundColor: "#fff",
        paddingVertical: 6,
        paddingHorizontal: 6,
        borderRadius: 5
    },
    
    btnHover: {
        backgroundColor: "red"
    },

    addToCart: {
        maxWidth:400,
        margin:15,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: "#757DEF",
        paddingVertical:12,
        borderRadius:10,
        marginBottom:20,
    },
addToCartTextColor: {
    color:'#fff'
},

    total: {
        fontSize:12,
        
    },
    price: {
        fontSize: 20,
        fontFamily: 'Roboto_Bold',

    },
    addToCartBtn: {
        backgroundColor: "#5758ED",
        paddingVertical:10,
        paddingHorizontal: 30,
        borderRadius:10
    },
    addToCartBtnText: {
        fontSize: 14,
        fontWeight: 700
    },
})

export default PreviewItem;
