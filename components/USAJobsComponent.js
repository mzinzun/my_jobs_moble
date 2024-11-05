import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { USA_API_KEY } from '@env';
import { useRouter } from 'expo-router'
import axios from 'axios';

const USAJobsComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJobs = async () => {
    try {
      const response = await axios.get('https://data.usajobs.gov/api/search', {
        headers: {
          'Host': 'data.usajobs.gov',
          'User-Agent': 'mzinzun3@outlook.com',
          'Authorization-Key': 'oRlE8Ke2mn6ezU/zWryy/YIOmSLLXeAPHR2GSmRgBnU='
        },
        params: {
          Keyword: 'Web Developer',
        }
      });
      setData(response.data.SearchResult.SearchResultItems);
      console.log('Data: ', response.data.SearchResult.SearchResultItems,(response.data.SearchResult.SearchResultItems).length);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();

  }, []);

  return (
    console.log('Data: ', data.length),
    <View style={styles.container}>
      <View >
      {loading? <ActivityIndicator size="large" color="#0000ff" /> : error ? <Text>Error: {error.message}</Text> :<View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.MatchedObjectId}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.MatchedObjectDescriptor.PositionTitle}</Text>
            <Text>{item.MatchedObjectDescriptor.OrganizationName}</Text>
            <Text>{item.MatchedObjectDescriptor.PositionLocationDisplay}</Text>
          </View>
        )}
      /></View>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default USAJobsComponent;
