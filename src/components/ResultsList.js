import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultDetail from "./ResultDetail";

const ResultsList = ({ title, results, navigation }) => {
  if(!results.length){
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ResultsShow",{id:item.id})}
            >
              <ResultDetail item={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  title: {
    marginLeft: 15,
    fontWeight: "bold",
    marginBottom: 5
  }
});

export default withNavigation(ResultsList);
