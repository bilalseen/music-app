import { View, Text, Image } from "react-native";
import styles from "./SongCard.style";

const SongCard = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: props.song.imageUrl }} />
      <View style={styles.info_container}>
        <Text style={styles.title}>{props.song.title}</Text>
        <View style={styles.song_info}>
          <View style={styles.inner_container}>
            <Text style={styles.artist}>{props.song.artist}</Text>
            <Text style={styles.year}>{props.song.year}</Text>
          </View>
          {props.song.isSoldOut && <Text style={styles.soldOut}>TÜKENDİ</Text>}
        </View>
      </View>
    </View>
  );
};

export default SongCard;
