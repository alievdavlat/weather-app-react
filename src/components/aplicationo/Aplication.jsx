import React, { useState } from 'react'
import './Aplication.css'
import { fetchWeather } from '../api/fetchWeather'

function Aplication() {
  const [query , setQuery ] = useState('')
  const [weather, setWeather] = useState()

  const search = async (e) => {
      e.preventDefault()
      const data = await fetchWeather(query)
      setWeather(data);
      setQuery('')
     

  }

  return (
    <div className='main-container'>
      <form className='search' onSubmit={search}>
        <input type="text" className='search-input' value={query} onChange={(e) => setQuery(e.target.value)}   placeholder='search...'/>
      </form>

      {
        weather?.main && <div className='city'>
            <div className='info'>
            <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
            </div>
            <div className='details'>
                <h2 className='city-name'>
                  <span>{weather.name}</span>
                  <sup>{weather.sys.country}</sup>
                </h2>
                <div className='city-temp'>
                {Math.floor(weather.main.temp)}
                <sub>&deg;C</sub>
                <br />
                <br />
                <p>{weather.weather[0].description}</p>
                </div>
            </div>
        </div>
      }

    </div>
  )
}

export default Aplication
