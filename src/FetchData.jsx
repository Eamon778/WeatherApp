import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function FetchData(){
    const [city, setCity] = useState('Londol');
    const apiKey = '7b7b8c1240fbf1aee8765b37f432bb11';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
        .then((response) => response.json() )
        .then((data) => {
            console.log(data);
        })

        return(data)
}