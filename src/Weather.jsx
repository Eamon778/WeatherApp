import FetchData from './FetchData.jsx'

function Weather() {
    const {data, isLoading, isError, error} = FetchData();
    return(
        <div>
            {console.log(data)}
        </div>
    )
}

export default Weather;