import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

import useResults from "../hooks/useResults";
import SearchBar from "../components/SearchBar";
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, errorMessage, results] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter(result => result.price === price);
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results.</Text>

      <ResultsList results={filterResultsByPrice('$')} title="test 1"/>
      <ResultsList results={filterResultsByPrice('$$')} title="test 2"/>
      <ResultsList results={filterResultsByPrice('$$$')} title="test 3"/>
    </View>
  );
};

export default SearchScreen;
