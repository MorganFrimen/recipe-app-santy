import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const Spacer = styled.View`
    padding: 5px;
`;

const Title = styled.Text`
    width: 100px;
    text-align: center;
`;

export const TopDishesCard = () => {
    return (
        <TouchableOpacity>
            <View>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1474045326708-cdc78c2487cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80' }}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 20,
                    }}
                />
                <Spacer />
                <Title>Quick day frее</Title>
            </View>
        </TouchableOpacity>

    )
}