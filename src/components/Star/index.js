import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import filledStar from "../../../assets/filledStar.png";
import unfilledStar from "../../../assets/unfilledStar.png";

export default function Star({ onPress, disabled = true, filled }) {
  const getImage = () => {
    if (filled) {
      return filledStar;
    }
    return unfilledStar;
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Image source={getImage()} style={styles.star} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  star: {
    marginRight: 2,
    width: 30,
    height: 30,
  },
});
