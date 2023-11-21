import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {MoviePoster} from './MoviePoster';
import {Movies} from '../interfaces/MovieInterfaces';
import {useMovie} from '../hooks/useMovie';
interface p {
  movies: Movies[];
  title?: string;
}
export const HorizontalSlider = ({movies, title}: p) => {
  const {peliculasEnCine, isLoading} = useMovie();

  return (
    <View style={{height: title ? 250 : 230}}>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
        {title}
      </Text>
      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} height={200} width={140} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
