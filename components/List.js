import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { deleteIngredients } from "../redux/actions";

const List = () => {
  const ingredients = useSelector((state) => state.ingredients);
  const dispatch = useDispatch();
  return (
    <View>
      {ingredients.map((el, i) => {
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
            <TouchableOpacity
              style={{ width: 10, height: 10, backgroundColor: "red" }}
              onPress={() => {
                dispatch(deleteIngredients(i));
              }}
            ></TouchableOpacity>
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
