import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import {
  Conatainer,
  ArrowHolder,
  StyledImage,
  Spacer,
  CatHolder,
  IngredientHolder,
  Ingredient,
  SpaserHolder,
  DescriptionButton,
  DetailScroll,
  DescriptionButtonHolder,
  ButtonText,
} from './style/styles.style';
import { Entypo } from '@expo/vector-icons';

export const DetailsScreen = ({ navigation, route }) => {
  const [description, setDescription] = useState(true);
  const { uri, ingridients, steps } = route.params;
  return (
    <View>
      <DetailScroll>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <ArrowHolder>
            <Entypo name="chevron-with-circle-down" size={36} color="#444" />
          </ArrowHolder>
        </TouchableOpacity>
        <Conatainer>
          <StyledImage
            source={{
              uri: uri,
            }}
          />
          <Spacer />
          {description ? (
            <CatHolder>{steps}</CatHolder>
          ) : (
            <>
              <CatHolder>Ингридиенты {ingridients.length} </CatHolder>
              <Spacer />
              {ingridients.map((ingridient) => {
                return (
                  <>
                    <IngredientHolder key={ingridient.id}>
                      <Ingredient> {ingridient} </Ingredient>
                    </IngredientHolder>
                    <SpaserHolder />
                  </>
                );
              })}
            </>
          )}
          <Spacer />
          <TouchableOpacity
            onPress={() => {
              setDescription(!description);
            }}>
            <DescriptionButtonHolder>
              <DescriptionButton>
                <ButtonText>Details</ButtonText>
              </DescriptionButton>
            </DescriptionButtonHolder>
          </TouchableOpacity>
        </Conatainer>
      </DetailScroll>
    </View>
  );
};
