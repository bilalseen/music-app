import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import SearchBar from "./components/SearchBar";
import SongCard from "./components/SongCard";
import SoldOut from "./components/SoldOut";
import music_data from "./music-data.json";

export default function App() {
  const [list, setList] = useState(music_data);

  function showOnlySoldOut() {
    setList(music_data.filter((sold) => sold.isSoldOut));
    setFocusSold(!focusSold);
    setFocusAll(focusSold);
  }

  const [focusSold, setFocusSold] = useState(false);

  function showAll() {
    setList(music_data);
    setFocusAll(!focusAll);
    setFocusSold(focusAll);
  }

  const [focusAll, setFocusAll] = useState(true);

  const renderItem = ({ item }) => <SongCard song={item} />;
  const renderSeperatorItem = <View style={styles.seperator}></View>;
  const handleSearch = (text) => {
    const filteredList = music_data.filter((song) => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList);
  };
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <View style={styles.filter_container}>
        <SoldOut title="Hepsi" onPress={showAll} isFocus={focusAll} />
        <SoldOut
          title="Tükenenler"
          onPress={showOnlySoldOut}
          isFocus={focusSold}
        />
      </View>
      <FlatList
        data={list}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeperatorItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  seperator: {
    borderWidth: 1,
    borderColor: "#ececec",
  },
  filter_container: {
    flexDirection: "row",
  },
});
