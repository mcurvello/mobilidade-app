import React, { useEffect, useState } from "react";
import MapView from "react-native-maps";
import {
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Map() {
  const navigation = useNavigation();
  const [region, setRegion] = useState(null);
  useEffect(() => {
    setRegion({
      latitude: -23.7575559,
      longitude: -46.7848964,
      latitudeDelta: 10,
      longitudeDelta: 10,
    });
  }, []);
  //www.google.com/maps/search/Starbucks+Coffee/@-23.7575559,-46.7848964,10z/data=!3m1!4b1
  https: return (
    <View style={styles.screen}>
      <View style={styles.back}>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
      <ScrollView>
        <Text style={styles.title}>Como chegar</Text>
        <View style={styles.container}>
          <MapView style={styles.map} initialRegion={region} />
        </View>
        <Text style={styles.address}>
          Alameda Jauaperi, 597 - Indianópolis, São Paulo - SP, 04523-012
        </Text>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
    marginLeft: 20,
  },
  address: {
    marginTop: 20,
    textAlign: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: 250,
  },
});
