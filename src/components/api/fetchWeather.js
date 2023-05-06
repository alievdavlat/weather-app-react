import React from 'react'
import axios from 'axios'

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const url = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '31953052f2649ba07937f3e70553f4c7'


export const fetchWeather = async ( query ) => {
 const { data } = await axios.get(url, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY, 
    }
  })

  return data ;

}

