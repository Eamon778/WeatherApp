import React, { useState } from 'react';
import useFetchData from './FetchData.jsx';
import ErrorPage from './ErrorPage.jsx'

function Weather() {
    const [city, setCity] = useState('London');
    const [searchCity, setSearchCity] = useState(city);

    const { data, isLoading, isError, error } = useFetchData(searchCity);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchCity(city);
    };

    if (isLoading) {
        return (
            <div className='w-full h-[100vh] bg-gray-100 flex justify-center items-center'>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        );
    }
    if (isError) {
        return <ErrorPage error={error.message} />;
    }

    const temp = data?.main?.temp;
    const humidity = data?.main?.humidity;
    const weatherCondition = data?.weather[0]?.description;

    return (
        <div className='bg-gray-100 h-[100vh] flex justify-center'>
            <div>
                <h1 className='text-center text-black text-6xl font-bold mt-[30px] pb-14'>Weather Info</h1>
                <form onSubmit={handleSearch} className='flex'>
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className='bg-black text-white px-3 py-[10px] rounded-lg text-lg' placeholder="Enter city"/>
                    <button type="submit" className='ms-3 btn  bg-green-600 font-bold hover:bg-green-500 glass'>Search</button>
                </form>

                <div className='mt-5 p-4 bg-teal-700 text-white rounded-lg'>
                    <h2>City: {data.name}</h2>
                    <p>Temperature: {temp ? Math.round(temp - 273.15) : 'N/A'} °C</p>
                    <p>Humidity: {humidity ? humidity : 'N/A'}%</p>
                    <p>Weather Condition: {weatherCondition ? weatherCondition : 'N/A'}</p>
                </div>
            </div>
        </div>
    );
}

export default Weather;
