import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import StatusSection from '../components/StatusSection'
import Channels from '../components/Channels'

const StatusPage = ({navigation}) => {
    console.log(navigation)
  return (
    <View style={{flex : 1, backgroundColor : '#0e111c', padding:20,}}>
        <Header />
        <StatusSection nav={navigation} />
        <Channels />
    </View>
  )
}

export default StatusPage

const styles = StyleSheet.create({})