import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import styles from './screenHeader.style'
const ScreenHeaderBtn = ({iconURL,dimension,onPress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Image
        source={iconURL}
        style={styles.btnImg(dimension)}

      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn
