import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Star from "../Star";

export default function Stars({ quantity: initialQuantity, editable = true }) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const RenderStars = () => {
    const starsList = [];
    for (let i = 0; i < 5; i++) {
      starsList.push(
        <Star
          key={i}
          onPress={() => setQuantity(i + 1)}
          disabled={!editable}
          filled={i < quantity}
        />
      );
    }
    return starsList;
  };

  return (
    <View style={styles.stars}>
      <RenderStars />
    </View>
  );
}

const styles = StyleSheet.create({
  stars: {
    flexDirection: "row",
  },
});
