
import { View, Text, ScrollView, SafeAreaView, Image} from 'react-native'
import React, {useState} from 'react'
import { Stack, useRouter } from 'expo-router'

import { COLORS, icons,images, SIZES } from '../constants'
// import {icons} from '../constants'
import { NearbyJobs, PopularJobs, ScreenHeaderBtn, Welcome} from '../components'
// const iconPath = "require(icons.menu)";
const home = () => {
    const router = useRouter()
    const onPress = () => {

    }
  return (
<SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite, borderStyle: 'solid',borderColor: "red", borderWidth: 2}}>
      <Stack.Screen
        options={{
            headerTitle: "Home Page",
            headerStyle: {
                backgroundColor: COLORS.lightWhite,
            },
            headerShadowVisible: false,
            headerTitleAlign: 'center',
            headerLeft: () => (
              <ScreenHeaderBtn
              iconURL={icons.menu}
              dimension= '80%'
              onPress={onPress}
              />
            ),
            headerRight: () => (
              <ScreenHeaderBtn
              iconURL={images.profile}
              dimension= '90%'
              onPress={onPress}
              />
            ),

        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1, padding: SIZES.padding}}>
        <Welcome/>
        <PopularJobs/>
        <NearbyJobs/>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default home
