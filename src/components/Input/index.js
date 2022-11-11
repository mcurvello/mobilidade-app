import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function Input() {
  return (
    <TextInput
      value="Starbucks"
      style={styles.input}
      onChangeText={(search) => setSearch(search)}
      placeholder={"Pesquise locais"}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: 375,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 7,
    backgroundColor: "#FFF",
    borderColor: "#000",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
});
