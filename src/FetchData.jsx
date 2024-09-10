import { useQuery } from "@tanstack/react-query";

function FetchData(city) {
  const apiKey = '0002d5a55453440d419c1a6cdb8a3cda';  // Access environment variable
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  
  const fetchApi = async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['weather', city],
    queryFn: fetchApi,
  });

  return { data, isLoading, isError, error };
}

export default FetchData;
