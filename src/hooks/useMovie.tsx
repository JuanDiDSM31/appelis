import {useEffect, useState} from 'react';
import {MovieApi} from '../api/MovieApi';
import {MovieDBNowPlaying, Movies} from '../interfaces/MovieInterfaces';
interface MoviesState {
  nowPlaying: Movies[];
  popular: Movies[];
  topRated: Movies[];
  upComing: Movies[];
}

export const useMovie = () => {
  const [MovieState, setMovieState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upComing: [],
  });
  const [isLoading, setisLoading] = useState(true);

  const getMovies = async () => {
    const nowPlayingPromise = MovieApi.get<MovieDBNowPlaying>('now_playing');
    const popularPromise = MovieApi.get<MovieDBNowPlaying>('popular');
    const topRatedPromise = MovieApi.get<MovieDBNowPlaying>('top_rated');
    const upcomingPopular = MovieApi.get<MovieDBNowPlaying>('upcoming');
    const resp = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPopular,
    ]);
    setMovieState({
      nowPlaying: resp[0].data.results,
      popular: resp[1].data.results,
      topRated: resp[2].data.results,
      upComing: resp[3].data.results,
    });
    setisLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...MovieState,
    isLoading,
  };
};
