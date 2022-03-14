import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";
import { IcChevronLeft, IcSearch } from "../../../Assets";
import { HStack, Typography } from "../../atoms";

const Header = () => {
  return (
    <HStack
      style={{
        backgroundColor: "#007AFF",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 22,
      }}
    >
      <Image source={IcChevronLeft} />
      <Typography color={"white"} size={16} weight="bold">
        E-Wallet
      </Typography>
      <Image source={IcSearch} />
    </HStack>
  );
};

export default Header;

const styles = StyleSheet.create({
  rowHeader: {
    flexDirection: "row",
    backgroundColor: "#007AFF",
  },
});
