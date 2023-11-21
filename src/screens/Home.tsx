import React, {useEffect} from 'react';
import {
  Text,
  View,
  Button,
  ActivityIndicator,
  FlatList,
  ScrollView,
} from 'react-native';
import {useMovie} from '../hooks/useMovie';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {MoviePoster} from '../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';
import {styles} from '../theme/styles';
import {HorizontalSlider} from '../components/HorizontalSlider';
export const Home = () => {
  const {top} = useSafeAreaInsets();
  const {nowPlaying, isLoading, popular, topRated, upComing} = useMovie();
  // console.log(peliculasEnCine[1]?.title);

 if (isLoading) {
   return (
     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
       <ActivityIndicator color="red" size={200} />
     </View>
   );
 }
  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <View style={{height: 440}}>
          <Carousel
            data={nowPlaying}
            renderItem={({item}) => <MoviePoster movie={item} />}
            sliderWidth={600}
            itemWidth={300}
          />
        </View>

        <HorizontalSlider title="Populares" movies={popular} />
        <HorizontalSlider title="Mejor calificadas" movies={topRated} />
        <HorizontalSlider title="Proximas" movies={upComing} />
      </View>
    </ScrollView>
  );
};
