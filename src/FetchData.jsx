import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function FetchData(){
    const [city, setCity] = useState('Londol');
    const apiKey = '7b7b8c1240fbf1aee8765b37f432bb11';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const fetchApi = async()=>{
        const weather = await fetch(url);
        if (!weather.ok){
            throw new Error("NetWork response was not ok")
        }
        const data = await weather.json();

        return data;
    }

    const {data, isLoading, isError, error} = useQuery({queryKey: ['weather'], queryFn: fetchApi,})

    return {data, isLoading, isError, error};
}

export default FetchData;