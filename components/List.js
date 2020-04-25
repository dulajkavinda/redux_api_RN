import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

const List = (props) => {
  return (
    <View>
      {props.ingredients.map((el, i) => {
        return (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            key={i}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={styles.dot} />
              <Text>{el}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};
export default List;

const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: "#F88A25",
    marginTop: "10%",
    marginRight: "8%",
  },
});
