import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import { Search } from '../componetns/search.component'
import { Conatainer, CartText,Spacer } from './style/styles.style'

export const HomeScreen = () => {
    return (
        <SafeAreaView>
            <Conatainer>
                <Search placeholder='Search recipes..' />
                <Spacer/>
                <CartText>Dines</CartText>
            </Conatainer>
        </SafeAreaView>
    )
}

