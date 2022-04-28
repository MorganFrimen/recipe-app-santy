import React from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { Search } from '../componetns/search.component'
import { Conatiner } from './style/styles.style'

const HomeScreen = () => {
    return (
        <Conatiner>
            <Search />
        </Conatiner>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 32,
    }
})