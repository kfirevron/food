import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

import useResults from "../hooks/useResults";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, errorMessage, results] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(result => result.price === price);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results.</Text>
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effictive"
        />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title="Bit Pricer"
        />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
