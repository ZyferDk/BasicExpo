import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Typography = ({
  flex,
  size,
  weight,
  color,
  lineHeight,
  align,
  width,
  children
}) => {
  return (
    <Text
      style={styles.text(flex, size, weight, color, lineHeight, align, width)}
    >
      {children}
    </Text>
  );
};

export default Typography;

const styles = StyleSheet.create({
  text: (flex, size, weight, color, lineHeight, align, width) => ({
    flex: flex,
    fontSize: size,
    fontWeight: weight,
    color: color,
    textAlign: align,
    width: width,
  }),
});
