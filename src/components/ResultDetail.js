import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import ImagePlaceholder from "react-native-image-with-placeholder";

const ResultDetail = ({ item }) => {
  return (
    <View style={styles.container}>
      <ImagePlaceholder 
        style={styles.image}
        src={item.image_url}
        placeholder='https://via.placeholder.com/250x120'
      />
      <Text style={styles.name}>{item.name}</Text>
      <Text>
        {item.rating} Stars, {item.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    borderRadius: 4,
    height: 120,
    marginBottom: 5
  },
  name: {
    fontWeight: "bold"
  }
});

export default ResultDetail;
