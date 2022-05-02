import React, { useEffect, useState }  from 'react'
import { SafeAreaView } from 'react-native'
import { CardComp } from '../componetns/card.component'
import { Search } from '../componetns/search.component'
import { TopDishesCard } from '../componetns/top.Dishes.component'
import { Conatainer, CartText,Spacer } from './style/styles.style'
import  {client}  from '../lib/client'
import { urlFor } from '../lib/client'


export const HomeScreen = () => {

    const [resipes , setResipes] = useState([])

    useEffect(async() => {
        const query = '*[_type == "resipes"]';
        const resipes = await client.fetch(query)
        setResipes(resipes)
    },[])

    return (
        <SafeAreaView>
            <Conatainer>
                <Search placeholder='Search recipes..' />
                <Spacer/>
                <CartText>Dines</CartText>
                <Spacer/>
                <TopDishesCard/>
                <Spacer/>
                {resipes.map(resipe =>  {
                    return(
                        <>
                            <CardComp title={resipe.title} imageUrl={urlFor(resipe.image).url()} />
                        </>
                    )
                    
                })}
                
            </Conatainer>
        </SafeAreaView>
    )
}

