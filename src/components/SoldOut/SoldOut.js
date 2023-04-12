import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./SoldOut.style";

const SoldOut = (props) => {


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.container_text}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SoldOut;
