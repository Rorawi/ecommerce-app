import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { FlatList, Text, View, ScrollView,TouchableOpacity } from "react-native";
import crop from "../assets/crop.png";
import crop1 from "../assets/crop1.png";
import crop2 from "../assets/crop2.png";
import crop4 from "../assets/crop4.png";
import crop5 from "../assets/crop5.png";
import crop6 from "../assets/crop6.png";
import crop7 from "../assets/crop7.png";
import crop8 from "../assets/crop8.png";
import crop9 from "../assets/crop9.png";
import Item from "../components/Item";
import { FontAwesome } from '@expo/vector-icons';const ListOfItems = () => {
  let stars =<FontAwesome name="star" size={12} color="orange" />;
  let unrated = <FontAwesome name="star-o" size={12} color="orange" />;
  const items = [
    {
      itemImg: crop,
      itemName: "Mauve Blouse",
      stars: [stars, stars, stars, stars, unrated],
      amount: `${"$ " + 66}`,
      description: "It is a mauve silky crop; very stunning and affordable.Drapes well with a pencil skirt or jeans"
    },
    {
      itemImg: crop1,
      itemName: "Mild-Blue Blouse",
      stars: [stars, stars, stars, unrated, unrated],
      amount: `${"$ " + 64}`,
      description: "It is a mild-blue silky crop; very stunning and affordable.Drapes well with a pencil skirt or jeans"
    },
    {
      itemImg: crop2,
      itemName: "Nude Blouse",
      stars: [stars, stars, stars, unrated, unrated],
      amount: `${"$ " + 63}`,
      description: "It is a nude silky crop; very stunning and affordable.Drapes well with a pencil skirt or jeans"
    },
    {
      itemImg: crop4,
      itemName: "Purple Blouse",
      stars: [stars, stars, stars, unrated, unrated],
      amount: `${"$ " + 69}`,
      description: "It is a purple silky crop; very stunning and affordable.Drapes well with a pencil skirt or jeans"
    },
    {
      itemImg: crop5,
      itemName: "Green Blouse",
      stars: [stars, stars, stars, unrated, unrated],
      amount: `${"$ " + 60}`,
      description: "It is a green silky crop; very stunning and affordable.Drapes well with a pencil skirt or jeans"
    },
    {
      itemImg: crop6,
      itemName: "Red Blouse",
      stars: [stars, stars, stars, unrated, unrated],
      amount: `${"$ " + 59}`,
      description: "It is a red silky crop; very stunning and affordable.Drapes well with a pencil skirt or jeans"
    },
    {
      itemImg: crop7,
      itemName: "Grey Blouse",
      stars: [stars, stars, stars, unrated, unrated],
      amount: `${"$ " + 19}`,
      description: "It is a grey silky crop; very stunning and affordable.Drapes well with a pencil skirt or jeans"
    },
    {
      itemImg: crop8,
      itemName: "White Blouse",
      stars: [stars, stars, stars, unrated, unrated],
      amount: `${"$ " + 89}`,
      description: "It is a white silky crop; very stunning and affordable.Drapes well with a pencil skirt or jeans"
    },
    {
      itemImg: crop9,
      itemName: "Black Blouse",
      stars: [stars, stars, stars, unrated, unrated],
      amount: `${"$ " + 909}`,
      description: "It is a black silky crop; very stunning and affordable.Drapes well with a pencil skirt or jeans",
    },
  ];
  return (
    <ScrollView style={style.motherDiv}>
      <Text style={style.topic}>Women Blouses</Text>
      <TextInput style={style.input} placeholder={"Enter search"} />
      <TouchableOpacity style={style.rightBtn}>
        <Text style={style.rightBtnText}>Filter</Text>
      </TouchableOpacity>
      <FlatList
        data={items}
        renderItem={({ item }) => {
          return (
            <Item
              itemImg={item.itemImg}
              itemName={item.itemName}
              description={item.description}
              stars={item.stars}
              amount={item.amount}
            />
          );
        }}
        keyExtractor={(item, index) => item.amount}
      />
    </ScrollView>
  );
};

const style = StyleSheet.create({

    motherDiv: {
        backgroundColor: '#EFEFF6',
    },
  topic: {
    fontSize: 25,
    fontWeight:700,
    marginLeft: 20,
    marginTop: 10,
    color: '#000'
  },

  rightBtn: {
    position: "relative",
    bottom: 60,
    left: 340,
  },
  input: {
    marginVertical: 20,
    marginHorizontal: 20,
    height: 55,
    backgroundColor: "#fff",
    shadowColor: "#131313",
    elevation: 4,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 16,
  },

  rightBtnText: {
    color: "purple",
    fontSize: 14,
    fontWeight: 600
  },
});

export default ListOfItems;
