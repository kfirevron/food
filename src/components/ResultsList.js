import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import ResultDetail from './ResultDetail';

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text>{title}</Text>
      <FlatList 
        horizontal 
        scrollEnabled
        data={results} 
        keyExtractor={result => result.id} 
        renderItem={({item})=>{
            return <ResultDetail item={item}/>
        }}
      />
    </View>
  );
};

export default ResultsList;
