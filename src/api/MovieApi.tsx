import React from 'react'
import axios from 'axios'

export const MovieApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
   params:{
    api_key:'d13069c8a7986cc10264640568ddcf1d',
    language:'es-Es'
   }
})