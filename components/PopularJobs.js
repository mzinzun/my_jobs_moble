import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import { COLORS, SIZES } from '../constants'
import PopularJobsCard from './PopularJobsCard'
import useFetch from '../hook/useFetch'


const PopularJobs = () => {
  const router = useRouter()
  useEffect(() => {

  }, []);

  const { data, loading, error, refetch } = useFetch()
  // const data = result;
  console.log('Ready for data: ', data);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity style={styles.headerBtn} onPress={() => { }}>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
      {loading? (<ActivityIndicator size='large' colors={COLORS.primary} />) :error? <Text>Something went wrong</Text>:<FlatList
      data={data}
      renderItem={({item}) => <Text>{item}</Text>}
      keyExtractor={(item) => item?.job_id}
      contentContainerStyle={{columnGap: SIZES.medium}}
      horizontal

      />}

      </View>
    </View>
  )
}

export default PopularJobs
