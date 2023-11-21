import React from 'react';
import {View, Image, } from 'react-native';
import {Movies} from '../interfaces/MovieInterfaces';
import {styles} from './../theme/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
interface p {
  movie: Movies;
  height?:number;
  width?:number
}
export const MoviePoster = ({movie, height=420, width=300}: p) => {
  // console.log(movie);

  //   console.log(movie.poster_path);
  const uri = `https://image.tmdb.org/t/p/w500//${movie?.poster_path}`;
  const navigation =useNavigation();
  return (

    <TouchableOpacity 
    onPress={()=> navigation.navigate('Detail')}
    activeOpacity={.8}
    style={{width, height, marginHorizontal:8}}>
      <View style={styles.SHADOWcONTAINER}>
        <Image
          style={styles.image}
          source={{
            uri,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};
