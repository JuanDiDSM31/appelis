import React from 'react';
import {View, Text} from 'react-native';
import {MovieFull} from '../interfaces/MovieInterfaces';
import {Cast} from '../interfaces/CreditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  moviefull: MovieFull;
  cast: Cast[];
}

export const MovieDetail = ({cast, moviefull}: Props) => {
  return (
    <View style={{marginHorizontal: 20}}>
      <View style={{flexDirection: 'row'}}> 
      <Icon name='star-half-outline'  color='black' size={20}/>
      <Text style={{color: 'black', marginLeft: 10}} >{moviefull.vote_average}</Text>
        <Text style={{color: 'black', marginLeft: 10}}> {moviefull.genres.map(g=> g.name ).join(",")}</Text>
      </View>
    </View>
  );
};
