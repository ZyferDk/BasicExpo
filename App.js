import { StyleSheet, Text, View } from "react-native";
import { Header, ListItem } from "./src/Components";
import React from "react";

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ListItem title="Apa itu e-wallet ?" />
      <ListItem title="Apa itu e-money?" />
      <ListItem title="Bagaimana cara topup saldo?" />
      <ListItem title="Bagaimana cara transfer dana ?" />
      <ListItem title="Berapa fee untuk transfer ke bank?" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    flex: 1,
    backgroundColor: "#fff",
  },
});
