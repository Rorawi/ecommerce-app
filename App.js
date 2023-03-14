import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import ListOfItems from "./screens/ListOfItems";
import { createStackNavigator } from "@react-navigation/stack";
import PreviewItem from "./screens/PreviewItem";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="itemsList"
          component={ListOfItems}
          options={{
            title: " ",
            headerStyle: {
              backgroundColor: "#EFEFF6",
              elevation: 0,
            },
            headerLeft: () => {
              return (
                <AntDesign
                  name="arrowleft"
                  size={20}
                  color="black"
                  style={styles.arrow}
                />
              );
            },
            headerRight: () => {
              return (
                <SimpleLineIcons
                  name="basket"
                  size={20}
                  color="black"
                  style={styles.basket}
                />
              );
            },
          }}
        />
        <Stack.Screen
          name="Preview"
          component={PreviewItem}
          options={{
            title: " ",
            headerStyle: {
              backgroundColor: "#EFEFF6",
              elevation: 0,
            },
            headerRight: () => {
              return (
                <SimpleLineIcons
                  name="basket"
                  size={15}
                  color="black"
                  style={styles.basket}
                />
              );
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <ListOfItems/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  basket: {
    marginRight: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 50,
    shadowColor: "#171717",
    elevation: 10,
  },
  arrow: {
    marginLeft: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 50,
    shadowColor: "#171717",
    elevation: 10,
  },
});
