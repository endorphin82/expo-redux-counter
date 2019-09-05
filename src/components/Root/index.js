import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";
import { add } from "../../AC";

class Root extends Component {

  render() {
    const { add, count } = this.props;
    return (
      <View style={styles.container}>
        <Text>Number increment {count} !</Text>
        <Button
          onPress={add}
          title="ADD"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default connect((state) => {
  console.log("state", state);
  return {
    count: state.crements.count
  };
}, { add })(Root);
//, null, { pure: false }