import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import { icons, SIZES } from '../constants'
import styles from './welcome.style'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,

} from 'react-native'


const Welcome = () => {
  const router = useRouter();
  const [ActiveJobType, setActiveJobType] = useState('Full Time')
  const jobTypes = ['Full Time', 'Part Time', 'Internship', 'Freelance']
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.userName}>Welcome Michael</Text>
        <Text style={styles.welcomeMessage}>Find Your Perfect Job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="What type of job are you looking for?"
            value=""
            onChang={() => { }}

          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => { }} >
          <Image
            source={icons.search}
            style={styles.searchBtnImage}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(ActiveJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                // router.push(`/search/${item}`)
                }}>
              <Text style={styles.tabText(ActiveJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome
