import React, { useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Stars from "../../components/Stars";

import profile from "../../../assets/profile.jpg";
import { useNavigation } from "@react-navigation/native";

export default function Feedback() {
  const navigation = useNavigation();
  const [feed, setFeed] = useState();
  const stars = () => {
    return Math.floor(Math.random() * 5 + 1);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.back}>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Avaliações</Text>
        <View style={styles.card}>
          <Stars quantity={stars} editable={false} />
          <View style={styles.feed}>
            <Image source={profile} style={styles.profile} />
            <Text style={styles.description}>
              “Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.“
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <Stars quantity={stars} editable={false} />
          <View style={styles.feed}>
            <Image source={profile} style={styles.profile} />
            <Text style={styles.description}>
              “Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.“
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Stars quantity={stars} editable={false} />
          <View style={styles.feed}>
            <Image source={profile} style={styles.profile} />
            <Text style={styles.description}>
              “Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.“
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <Stars quantity={stars} editable={false} />
          <View style={styles.feed}>
            <Image source={profile} style={styles.profile} />
            <Text style={styles.description}>
              “Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.“
            </Text>
          </View>
        </View>
        <Text style={styles.subtitle}>Avalie este estabelecimento</Text>
        <Stars />
        <View style={styles.area}>
          <TextInput
            style={styles.list}
            editable
            maxLength={100}
            multiline
            value={feed}
            numberOfLines={4}
            onChangeText={(text) => setFeed(text)}
            placeholder="Escreva um comentário"
          />
        </View>
        <Button title="Enviar" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "flex-start",
  },
  back: {
    marginLeft: 10,
    marginBottom: 20,
  },
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },
  card: {
    marginTop: 20,
  },
  feed: {
    flexDirection: "row",
    alignItems: "center",
  },
  profile: {
    width: 70,
    height: 70,
    marginLeft: -18,
  },
  description: {
    width: 290,
  },
  area: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    height: 80,
    marginTop: 15,
  },
  list: {
    padding: 10,
    fontSize: 16,
  },
  subtitle: {
    marginTop: 40,
    marginBottom: 15,
    fontWeight: "bold",
  },
});
