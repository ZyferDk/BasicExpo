import { StyleSheet, Image, Pressable, Text, View } from "react-native";
import React from "react";
import { HStack, Typography } from "../../atoms";
import { IcChevronRightGrey } from "../../../Assets";

const ListItem = ({ title, onPress }) => {
  return (
    <HStack style={styles.hlist}>
      <Typography size={16} weight="400" color="#333333">
        {title}
      </Typography>
      <Pressable>
        <Image source={IcChevronRightGrey} />
      </Pressable>
    </HStack>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  hlist: {
    justifyContent: "space-between",
    marginHorizontal: 22.5,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#F5F5F5",
  },
});
