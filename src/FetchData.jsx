import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function FetchData(){
    const [city, setCity] = useState('London');
    const apiKey = '0002d5a55453440d419c1a6cdb8a3cda';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const fetchApi = async()=>{
        const weather = await fetch(url);
        if (!weather.ok){
            throw new Error("NetWork response was not ok")
        }
        const data = await weather.json();

        return data;
    }

    const {data, isLoading, isError, error} = useQuery({queryKey: ['weather', city], queryFn: fetchApi,})

    return {data, isLoading, isError, error};
}

export default FetchData;