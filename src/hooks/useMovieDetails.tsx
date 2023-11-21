import {useEffect, useState} from 'react';
import {MovieApi} from '../api/MovieApi';
import {MovieFull} from '../interfaces/MovieInterfaces';
import {Cast, CreditsResponsive} from '../interfaces/CreditsInterface';

export interface MovieDetails {
  isLoading: boolean;
  moviefull?: MovieFull;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading:true,
    moviefull:undefined,
    cast:[],
  });
  const getMovieDetails = async () => {
    const MovieDetailPromise =  MovieApi.get<MovieFull>(`/${movieId}`);
    const CreditsPromise =  MovieApi.get<CreditsResponsive>(`/${movieId}/credits`);
    const [MovieDetailResp, CreditsResp, ] =await Promise.all([
        MovieDetailPromise,
        CreditsPromise,
       
    ])
     setState({
         isLoading:false,
         moviefull:MovieDetailResp.data,
         cast:CreditsResp.data.cast,
     })
   
  };

  useEffect(() => {
    getMovieDetails();
  }, []);
  return {
    ...state,
  };
};
