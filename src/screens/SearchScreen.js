import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { getRests } from "../actions";

//import useResults from "../hooks/useResults";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const { error, rests } = useSelector((state) => state.results);

  const dispatch = useDispatch();

  const filterResultsByPrice = (price) => {
    return rests.filter((result) => result.price === price);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => dispatch(getRests(term))}
      />
      {error ? <Text>{error}</Text> : null}
      <Text>We have found {rests.length} results.</Text>
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effictive"
        />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricer" />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
