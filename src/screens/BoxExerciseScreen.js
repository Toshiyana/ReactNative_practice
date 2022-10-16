import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxExerciseScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
      <View style={styles.viewFourStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: "red",
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: "green",
    marginTop: 50,
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: "purple",
    alignSelf: "flex-end",
  },
  viewFourStyle: {
    height: 50,
    width: 50,
    backgroundColor: "blue",
  },
});

export default BoxExerciseScreen;
