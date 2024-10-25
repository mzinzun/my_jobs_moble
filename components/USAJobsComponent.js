import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
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
          Keyword: 'developer',
          LocationName: 'California'
        }
      });
      setData(response.data.SearchResult.SearchResultItems);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
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
      />
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
