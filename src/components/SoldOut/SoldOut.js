import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./SoldOut.style";

const SoldOut = (props) => {

  return (
    <View style={props.isFocus ? styles.containerActive : styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={props.isFocus ? styles.container_text_Active : styles.container_text}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SoldOut;
