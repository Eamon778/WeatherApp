import React, { useState } from 'react';
import useFetchData from './FetchData.jsx';

function Weather() {
    const [city, setCity] = useState('London');
    const [searchCity, setSearchCity] = useState(city);

    const { data, isLoading, isError, error } = useFetchData(searchCity);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchCity(city);
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (isError) {
        return <p>Error: {error.message}</p>;
    }
    if (!data) {
        return <p>No data available</p>;
    }

    const temp = data?.main?.temp;
    const humidity = data?.main?.humidity;
    const weatherCondition = data?.weather[0]?.description;

    return (
        <div>
            <h1>Weather Info</h1>
            <form onSubmit={handleSearch}>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city"/>
                <button type="submit">Search</button>
            </form>

            <div>
                <h2>City: {data.name}</h2>
                <p>Temperature: {temp ? Math.round(temp - 273.15) : 'N/A'} °C</p>
                <p>Humidity: {humidity ? humidity : 'N/A'}%</p>
                <p>Weather Condition: {weatherCondition ? weatherCondition : 'N/A'}</p>
            </div>
        </div>
    );
}

export default Weather;
