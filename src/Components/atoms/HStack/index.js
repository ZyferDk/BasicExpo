import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HStack = ({ style, children }) => {
  return (
    <View style={[styles.row, style]}>
      {children}
    </View>
  );
};

export default HStack;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
});
