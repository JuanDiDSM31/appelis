import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, ActivityIndicator} from 'react-native';
import {RootStackParams} from '../routes/StackNavigator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';

const di = Dimensions.get('screen').height;
interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}
export const Detail = ({route}: Props) => {
  console.log(route.params?.original_title);
  const Movie = route.params
  const nom = Movie.original_title;
  const nomEs = Movie.title;
  console.log(Movie.id)
  const {cast,isLoading,moviefull}=useMovieDetails(Movie.id);

  console.log({moviefull})

  const uri = `https://image.tmdb.org/t/p/w500//${route.params?.poster_path}`;
  const {top} = useSafeAreaInsets();
  return (
    <ScrollView>
      <View style={styles.imgContainer}>
        <View style={styles.borderImage}>
          <Image style={styles.posterImage} source={{uri}} />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subtitulo}>{nom}</Text>
        <Text style={styles.titulo}>{nomEs}</Text>
      </View>
      <View>
        {
          isLoading ? <ActivityIndicator style={styles.marginContainer} size={100} color="grey" />: <Text>Juan</Text>
        }
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    // backgroundColor:'red',
    width: '100%',
    height: di * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },

    shadowOpacity: 0.25,
    shadowRadius: 7,

    elevation: 9,
    borderStartEndRadius: 25,
    borderBottomEndRadius: 25,
  },
  borderImage: {
    flex: 1,
    overflow: 'hidden',

    borderStartEndRadius: 25,
    borderBottomEndRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitulo: {
    fontSize: 16,
    opacity: 0.8,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
