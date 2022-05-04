import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Spacer = styled.View`
  padding: 5px;
`;

const Title = styled.Text`
  width: 100px;
  text-align: center;
`;

export const TopDishesCard = ({ title, image }) => {
  return (
    <View>
      <Image
        source={{ uri: image }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 20,
        }}
      />
      <Spacer />
      <Title> {title} </Title>
    </View>
  );
};
