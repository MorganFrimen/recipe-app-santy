import React, { useEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { CardComp } from '../componetns/card.component';
import { Search } from '../componetns/search.component';
import { TopDishesCard } from '../componetns/top.Dishes.component';
import { Conatainer, CartText, Spacer, Scroll } from './style/styles.style';
import { client } from '../lib/client';
import { urlFor } from '../lib/client';

export const HomeScreen = ({ navigation }) => {
  const [resipes, setResipes] = useState([]);

  useEffect(async () => {
    const query = '*[_type == "resipes"]';
    const resipes = await client.fetch(query);
    setResipes(resipes);
  }, []);

  return (
    <SafeAreaView>
      <Conatainer>
        <Search placeholder="Search recipes.." />
        <Spacer />
        <Scroll>
          <CartText>Dines</CartText>
          <Spacer />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {resipes.map((resipe) => {
              return (
                <>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('detail', {
                        uri: urlFor(resipe.image).url(),
                        ingridients: resipe.ingridients,
                        steps: resipe.steps,
                      })
                    }>
                    <TopDishesCard
                      key={resipe.id}
                      title={resipe.title}
                      image={urlFor(resipe.image).url()}
                    />
                  </TouchableOpacity>
                  <Spacer />
                </>
              );
            })}
          </ScrollView>
          <Spacer />
          {resipes.map((resipe) => {
            return (
              <>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('detail', {
                      uri: urlFor(resipe.image).url(),
                      ingridients: resipe.ingridients,
                      steps: resipe.steps,
                    })
                  }>
                  <CardComp
                    key={resipe.id}
                    title={resipe.title}
                    imageUrl={urlFor(resipe.image).url()}
                  />
                </TouchableOpacity>
                <Spacer />
              </>
            );
          })}
        </Scroll>
      </Conatainer>
    </SafeAreaView>
  );
};
