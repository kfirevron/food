import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ResultDetail = ({item}) => {
   return (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ResultDetail;
