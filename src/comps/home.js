import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Country from './country';

const Countries = [
  "Alaska",
  "אילת",
  "London",
  "New York",
];
const countryCode = "ISO 3166"; 
const KEY = "7b9325af2dba8b81ee6d54dfa964eee3";
async function fetchWeatherData(country) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${country},${countryCode}&lang=he&units=metric&appid=${KEY}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch weather data for ${country}`);
  }
}

export default function Home() {
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const promises = Countries.map((country) => fetchWeatherData(country));
        const data = await Promise.all(promises); 
        setWeatherData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className='container'>
      <h1 className='text-center text-danger p-4 display-4 fw-bolder'>תחזית מזג אויר</h1>
      <div className='row justify-content-around'>
        {weatherData.map((item) => (
         <Country country={item}/>
        ))}
      </div> </div>
  );
}

