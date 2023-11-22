import React from 'react'
import {View, Text} from 'react-native'
import { MovieFull } from '../interfaces/MovieInterfaces'
import { Cast } from '../interfaces/CreditsInterface';
interface Props {
    moviefull?:MovieFull;
    cast?:Cast[];
}

export const MovieDetail = ({cast, moviefull}:Props) => {
  return (
    <View>
        <Text style={{ color:'black'}}> Hola desde Movie Detail </Text>
    </View>
  )
}
