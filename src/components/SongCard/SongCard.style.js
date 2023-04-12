import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  info_container: {
    flex: 1,
    margin: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  song_info: {
    flexDirection: "row",
  },
  inner_container: {
    flex: 1,
    flexDirection: "row",
  },
  artist: {},
  year: {
    marginLeft: 10,
    color: "#e0e0e0"
  },
  soldOut: {
    color: "red",
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 5,
  }
});
