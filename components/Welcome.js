import React from 'react'
import { useRouter } from 'expo-router'
import { icons, SIZES } from '../constants'
import styles from './welcome.style'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Flatlist,
  Image,

} from 'react-native'

const Welcome = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.userName}>Welcome Michael</Text>
        <Text style={styles.welcomeMessage}>Find Your Perfect Job</Text>
      </View>
      <View style={styles.searchContainer}>

      </View>
    </View>
  )
}

export default Welcome
