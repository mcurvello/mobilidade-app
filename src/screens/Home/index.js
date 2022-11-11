import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Input from "../../components/Input";
import Stars from "../../components/Stars";

import logo from "../../../assets/starbucks-logo.png";
import store from "../../../assets/starbucks-store.png";
import map from "../../../assets/map-pin.png";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  const stars = () => {
    return Math.floor(Math.random() * 5 + 1);
  };
  return (
    <ScrollView style={styles.container}>
      <Input />
      <View style={styles.header}>
        <Image source={logo} />
        <Text style={styles.text}>Starbucks Coffee</Text>
      </View>
      <Image source={store} />
      <View style={styles.icons}>
        <Stars quantity={stars} />
        <TouchableOpacity onPress={() => navigation.navigate("Map")}>
          <Image source={map} style={styles.map} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text
          style={styles.feedback}
          onPress={() => navigation.navigate("Feedback")}
        >
          Ver avaliações
        </Text>
      </TouchableOpacity>
      <View style={styles.description}>
        <Text style={styles.title}>O que esse lugar oferece</Text>
        <Text> - rampa acessibilidade</Text>
        <Text> - elevador acessível</Text>
        <Text> - estacionamento</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  icons: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  map: {
    width: 40,
    height: 40,
  },
  description: {
    margin: 10,
    fontSize: 14,
  },
  feedback: {
    color: "#0098FD",
    fontSize: 16,
    margin: 10,
  },
  title: {
    marginBottom: 10,
  },
});
