import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { USA_API_KEY } from '@env';
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import { COLORS, SIZES } from '../constants'
import PopularJobsCard from './PopularJobsCard'
import useFetch from '../hook/useFetch'


const PopularJobs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter()
  useEffect( () => {
    console.log('UseEffect started');
    console.log('USA_API_KEY: ', USA_API_KEY);
    const host = 'data.usajobs.gov';
    const userAgent = 'zinzunmichael@gmail.com';
    const authKey = USA_API_KEY;

    const ans = axios.request(
      {
        url: 'https://data.usajobs.gov/api/Search',
        method: 'GET',
        headers: {
          "Host": host,
          "User-Agent": userAgent,
          "Authorization-Key": authKey
        },
        params: {
          Keyword: 'developer',
          LocationName: 'California'
        }
      }).then((response) => {
        // console.log('response: ', response.data);

        // setData(response);

        // setLoading(false);
       return response.data;
      }).then((result) => {
        // setData([...result.SearchResult.SearchResultItems]);
        // console.log('Data: ', result.SearchResult.SearchResultItems);
      })
      .catch((error) => {
        setError(error);
        alert("There was an error fetching data");
      }
      )
      setData(ans.SearchResult.SearchResultItems)
  }, []);


  // const data = result;

  // const info = data.SearchResult.SearchResultItems;
  // console.log('Ready for data: ', data);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity style={styles.headerBtn} onPress={() => { }}>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View >
        {loading ? (<ActivityIndicator size='large' colors={COLORS.primary} />) : error ? <Text>Something went wrong</Text> : <FlatList
          data={[...data]}
          renderItem={({ item }) => <Text>{item}t</Text>}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal

        />}

      </View>
    </View>
  )
}

export default PopularJobs
