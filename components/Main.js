import React, { Component } from "react";
import { StyleSheet, View, Text, StatusBar, TextInput } from "react-native";
import List from "./List";

import { connect } from "react-redux";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      ingredient: "",
    };
  }
  handleAddIngredient = () => {
    if (this.state.ingredient.trim().length) {
      this.setState({
        ingredients: this.state.ingredients.concat(this.state.ingredient),
        ingredient: "",
      });
    }
    this.textInput.clear();
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#50A0FF" }}>
        <StatusBar backgroundColor="#50A0FF" barStyle="light-content" />
        <Text style={styles.title}>{this.props.recipie}</Text>
        <View style={styles.small_container}>
          <Text style={styles.subtitle}>Ingredients</Text>
          <List ingredients={this.state.ingredients} />
          <View style={styles.textinput_container}>
            <TextInput
              placeholder="Ingredient"
              placeholderTextColor="#8A9AAD"
              onChangeText={(val) => {
                this.setState({ ingredient: val });
              }}
              ref={(component) => {
                this.textInput = component;
              }}
              multiline={true}
              blurOnSubmit={true}
              onEndEditing={() => {
                this.handleAddIngredient();
              }}
              style={{
                paddingLeft: "4%",
              }}
            />
            <View style={styles.button}>
              <Text
                style={{ color: "#fff" }}
                onPress={() => {
                  this.handleAddIngredient();
                }}
              >
                Add
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { recipie: state.recipie };
};

export default connect(mapStateToProps)(Main);

const styles = StyleSheet.create({
  small_container: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: "9%",
    paddingHorizontal: "7%",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    paddingTop: "6%",
    paddingBottom: "9%",
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 0.8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.1,
    color: "#002A5A",
    paddingBottom: "5%",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: "#F88A25",
    marginTop: "1.8%",
    marginRight: "1.5%",
  },
  textinput_container: {
    backgroundColor: "#D8E7FA",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#50A0FF",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
    position: "absolute",
    bottom: "5%",
    width: "100%",
    marginHorizontal: "7%",
  },
  button: {
    backgroundColor: "#50A0FF",
    paddingVertical: "1.5%",
    paddingHorizontal: "7%",
    borderRadius: 30,
    margin: "1%",
  },
});
